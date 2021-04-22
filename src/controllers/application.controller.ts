import { Application } from '../models';
import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';

const createApplication = async (req: Request, res: Response): Promise<void | Response> => {
  const { companyName, position, method, date } = req.body;
  if (!companyName || !position || !method || !status || !date) {
    return res.status(400).json({
      status: 400,
      error: 'Bad Request: Please ensure all required parameters are sent.',
    });
  }
  const application = await Application.create({
    _id: uuid(),
    companyName,
    position,
    method,
    status,
    date,
    user_id: res.locals.user_id,
  });
  res.status(201).json(application);
};

const updateApplication = async (req: Request, res: Response): Promise<void> => {
  const { _id } = req.params;
  try {
    const [application] = await Application.update({
      ...req.body,
    }, {
      returning: true,
      where: { _id },
    });
    res.status(200).json(application);
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: err,
    });
  }
};

export {
  createApplication,
  updateApplication,
};