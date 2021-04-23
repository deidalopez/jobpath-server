import { Model } from 'sequelize';
import { InterviewInterface } from './interview.type';
import { OfferInterface } from './offer.type';

export interface Application {
  date: Date;
  method: string;
  _id: string;
  status: string;
  position: string;
  user_id: string;
  companyName: string;
  interviews?: Model<InterviewInterface>[];
  offers?: Model<OfferInterface>[];
}
