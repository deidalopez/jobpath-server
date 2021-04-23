import { Application } from '../models';
import { NextFunction, Request, Response } from 'express';

const createApplication = async (req: Request, res: Response): Promise<void | Response> => {
  const { companyName, position, method, date } = req.body;
  if (!companyName || !position || !method || !date) {
    return res.status(400).json({
      status: 400,
      error: 'Bad Request: Please ensure all required parameters are sent.',
    });
  }
  try {
    const application = await Application.create({
      companyName,
      position,
      method,
      date,
      user_id: res.locals.user_id,
    });
    res.status(201).json(application);
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: err,
    });
  }
};

const updateApplication = async (req: Request, res: Response): Promise<void | Response> => {
  const { _id } = req.params;
  if (!_id) return res.status(403).json({status: 403, error: 'Bad Request: Please ensure appropriate information requested.'})
  try {
    const result = await Application.update({
      ...req.body,
    }, {
      returning: true,
      where: { _id },
    });
    const application = result[1][0];
    if (!application) return res.status(403).json({ status: 403, error: 'No application found'});
    res.status(200).json(application);
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: err,
    });
  }
};

const getApplications = async (_: Request, res: Response, next: NextFunction): Promise<void | Response> => {
  if (!res.locals.user_id) return res.status(403).json({ status: 403, error: 'Bad Request: Please ensure appropriate information submitted.'});
  try {
    const applications = await Application.findAll({ where: { _id: res.locals.user_id }, raw: true });
    res.locals.applications = applications;
    applications.length ? next() : res.status(200).json({
      applications: [],
      offers: [],
      interviews: [],
    });
  } catch (err) {
    res.status(500).json({ status: 500, error: err });
  }
};

export {
  createApplication,
  updateApplication,
  getApplications,
};