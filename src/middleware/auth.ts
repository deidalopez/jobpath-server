import * as admin from 'firebase-admin';
import { Request, Response, NextFunction } from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const auth = admin.initializeApp({
  credential: admin.credential.applicationDefault(),
}).auth();

const authenticate = async (req: Request, res: Response, next: NextFunction): Promise<void | Response> => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(403).json({ status: 403, error: 'Incorrect Permissions'});
  try {
    const { user_id } = await auth.verifyIdToken(token);
    if (!user_id) return res.status(403).json({ status: 403, error: 'Incorrect Permissions'});
    res.locals.user_id = user_id;
    next();
  } catch (err) {
    res.status(500).json({ status: 500, error: err });
  }
} 

export default authenticate;