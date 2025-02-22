import { Router } from 'express';
import {
	createTask,
	deleteTask,
	getTasks,
	reorderTasks,
	updateTask,
} from '../controllers/task.controller.js';

const taskRouter = Router();

taskRouter.route('/').post(createTask).get(getTasks);
taskRouter.route('/reorder').patch(reorderTasks);
taskRouter.route('/:id').patch(updateTask).delete(deleteTask);

export default taskRouter;
