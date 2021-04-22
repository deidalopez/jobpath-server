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

export {
  createUser,
};