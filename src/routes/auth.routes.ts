import  { Router, Request, Response } from 'express';
import { signup } from '../controllers/auth.controller';
const router = Router();

router.post('/signup',signup );


 const authRoutes =router;
export default authRoutes;