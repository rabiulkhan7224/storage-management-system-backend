import  { Router, Request, Response } from 'express';
import { login, signup } from '../controllers/auth.controller';
const router = Router();

router.post('/signup',signup );
router.post("/login",login)


 const authRoutes =router;
export default authRoutes;