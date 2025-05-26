import  { Router, Request, Response } from 'express';
import { login, logout, signup } from '../controllers/auth.controller';
const router = Router();

router.post('/signup',signup );
router.post("/login",login)
router.post("/logout", logout)


 const authRoutes =router;
export default authRoutes;