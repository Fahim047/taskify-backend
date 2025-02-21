import User from '../models/user.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const createUser = asyncHandler(async (req, res) => {
	const { email, name, photoURL } = req.body;
	const userExists = await User.findOne({ email });
	if (userExists) {
		return res
			.status(200)
			.json({ message: 'User already exists and not saved in db this time!' });
	}
	const user = await User.create({
		email,
		name,
		photoURL,
	});
	return res.status(201).json({
		message: 'User data saved to Database.',
	});
});
export const getUsers = asyncHandler(async (req, res) => {
	const { email } = req.query;
	if (email) {
		const user = await User.findOne({ email });
		return res.status(200).json(user);
	} else {
		const users = await User.find();
		return res.status(200).json(users);
	}
});
