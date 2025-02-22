import { mongoose } from 'mongoose';

const taskSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
		},
		category: {
			type: String,
			enum: ['To-Do', 'In Progress', 'Done'],
			default: 'To-Do',
		},
		order: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

export const Task = mongoose.model('Task', taskSchema);
