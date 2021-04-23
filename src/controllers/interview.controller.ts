import { Interview } from '../models';
import { Request, Response, NextFunction } from 'express';
import { Application } from '../types/application.type';
import { InterviewInterface } from '../types/interview.type';
import { Model } from 'sequelize';

const createInterview = async (req: Request, res: Response): Promise<void | Response> => {
  const { application_id, status, type, date } = req.body;
  if (!status || !type || !date || !application_id) {
    return res.status(400).json({
      status: 400,
      error: 'Bad Request: Please ensure all required parameters are sent.',
    });
  }
  try {
    const interview = await Interview.create({
      status,
      type,
      date,
      application_id,
    });
    res.status(201).json(interview);
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: err,
    });
  }
};

const updateInterview = async (req: Request, res: Response): Promise<void | Response> => {
  const { _id } = req.params;
  try {
    const result = await Interview.update({
      ...req.body,
    }, {
      returning: true,
      where: { _id },
    });
    const interview = result[1][0];
    if (!interview) return res.status(403).json({ status: 403, error: 'No interview found'});
    res.status(200).json(interview);
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: err,
    });
  }
};

const getInterviews = async (_: Request, res: Response, next: NextFunction): Promise<void | Response> => {
  try {
    res.locals.applications.forEach(async (app: Application) => {
      app.interviews = await Interview.findAll<Model<InterviewInterface>>({ where: { application_id: app._id}, raw: true });
    });
    next();
  } catch (err) {
    res.status(500).json({ status: 500, error: err });
  }
};

export {
  createInterview,
  updateInterview,
  getInterviews,
};