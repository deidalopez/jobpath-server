import { Router } from 'express';
import { createUser, updateUser } from './controllers/user.controllers';
import { createApplication, updateApplication, getApplications } from './controllers/application.controller';
import authenticate from './middleware/auth';
import { createInterview, updateInterview, getInterviews } from './controllers/interview.controller';
import { createOffer, updateOffer, getOffers } from './controllers/offer.controller';


const router = Router();

router.post('/user', authenticate, createUser);
router.put('/user', authenticate, updateUser);
router.post('/applications', authenticate, createApplication);
router.put('/applications/:_id', authenticate, updateApplication);
router.post('/interviews', authenticate, createInterview);
router.put('/interviews', authenticate, updateInterview);
router.post('/offers', authenticate, createOffer);
router.put('/offers', authenticate, updateOffer);
router.get('/applications', authenticate, getApplications, getInterviews, getOffers);

export default router;