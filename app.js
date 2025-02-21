import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
const app = express();

app.use(
	cors({
		origin: ['http://localhost:5173', 'https://taskify-fahim047.vercel.app'],
		credentials: true,
	})
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((err, req, res, next) => {
	console.error(err.stack);
	res
		.status(err.status || 500)
		.json({ message: err.message || 'Internal Server Error!' });
});
app.get('/', (req, res) => {
	res.send('Hello World!');
});

// import Routers
import taskRouter from './routes/task.routes.js';
import userRouter from './routes/user.routes.js';
app.use('/api/v1/users', userRouter);
app.use('/api/v1/tasks', taskRouter);

export default app;
