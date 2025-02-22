import { Task } from '../models/task.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { removeMongoDBIdFromArray } from '../utils/mongo-utils.js';

export const createTask = asyncHandler(async (req, res) => {
	console.log('hello');
	const { title, description } = req.body;
	const newTask = await Task.create({
		title,
		description,
	});
	return res.status(201).json({
		message: 'Task created',
		data: newTask,
	});
});
export const getTasks = asyncHandler(async (req, res) => {
	const tasks = await Task.find().lean();
	const processedTasks = tasks ? removeMongoDBIdFromArray(tasks) : [];
	res.status(200).json(processedTasks);
});
export const updateTask = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const updatedTask = await Task.findByIdAndUpdate(id, req.body);
	res.status(200).json({ message: 'Task updated', data: updatedTask });
});
export const reorderTasks = asyncHandler(async (req, res) => {
	const { tasks } = req.body;
	const bulkOps = tasks.map((task) => ({
		updateOne: {
			filter: { _id: task.id },
			update: { $set: { category: task.category, order: task.order } },
		},
	}));
	await Task.bulkWrite(bulkOps);
	return res.status(200).json({ message: 'Tasks reordered' });
});
