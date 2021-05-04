import { Offer } from '../models';
import { Request, Response } from 'express';
import { Application } from '../types/application.type';
import { OfferInterface } from '../types/offer.type';
import { Model } from 'sequelize';

const createOffer = async (req: Request, res: Response): Promise<void | Response> => {
  const { application_id, salary, benefits, employmentType, date } = req.body;
  if (!salary || !employmentType || !date || !application_id || !benefits) {
    return res.status(400).json({
      status: 400,
      error: 'Bad Request: Please ensure all required parameters are sent.',
    });
  }
  try {
    const offer = await Offer.create({
      status,
      salary,
      date,
      benefits: JSON.stringify(benefits),
      employmentType,
      application_id,
    });
    res.status(201).json(offer);
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: err,
    });
  }
};

const updateOffer = async (req: Request, res: Response): Promise<void | Response> => {
  const { _id } = req.params;
  try {
    const result = await Offer.update({
      ...req.body,
    }, {
      returning: true,
      where: { _id },
    });
    const offer = result[1][0];
    if (!offer) return res.status(403).json({ status: 403, error: 'No offer found'});
    res.status(200).json(offer);
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: err,
    });
  }
};

const getOffers = async (_: Request, res: Response): Promise<void | Response> => {
  try {
    res.locals.applications.forEach(async (app: Application) => {
      app.offers = await Offer.findAll<Model<OfferInterface>>({ where: { application_id: app._id}, raw: true });
    });
    res.status(200).json(res.locals.applications);
  } catch (err) {
    res.status(500).json({ status: 500, error: err });
  }
};

export {
  createOffer,
  updateOffer,
  getOffers,
};