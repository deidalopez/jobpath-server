import { Router } from 'express';
import { createUser } from './controllers/user.controllers';
import authenticate from './middleware/auth';

const router = Router();

router.post('/register', authenticate, createUser);
router.get('/applications', authenticate)

export default router;