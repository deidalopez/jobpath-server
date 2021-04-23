import { User } from '../models';
import { Request, Response } from 'express';

const createUser = async (req: Request, res: Response): Promise<void | Response> => {
  const { name, email, desiredJobTitle, dateStartedLooking, salaryTarget } = req.body;
  if (!name || !email || !desiredJobTitle || !dateStartedLooking || !salaryTarget) {
    return res.status(400).json({
      status: 400,
      error: 'Bad Request: Please ensure all required parameters are sent.',
    });
  }
  await User.create({
    _id: res.locals.user_id,
    name,
    email,
    desiredJobTitle,
    dateStartedLooking,
    salaryTarget,
  });
  res.status(201).json({
    applications: [],
    offers: [],
    interviews: [],
  });
};

const updateUser = async (req: Request, res: Response): Promise<void | Response> => {
  try {
    const result = await User.update({
      ...req.body,
    }, {
      where: {
        _id: res.locals.user_id,
      }
    });
    const user = result[1][0];
    if (!user) return res.status(500).json({ status: 500, error: 'DB error' });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ status: 500, error: err });
  }
};

export {
  createUser,
  updateUser,
};