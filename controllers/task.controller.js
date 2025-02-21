import { Task } from '../models/task.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';

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
