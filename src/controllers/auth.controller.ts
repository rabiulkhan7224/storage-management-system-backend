import e, { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/User";
import jwt from 'jsonwebtoken';

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    
    if (!name || !email || !password) {
         res.status(400).json({ error: "All fields are required" });
         return 
        }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
       res.status(400).json({ error: "User already exists" }); 
       return
    }
   

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed });
    res.status(201).json(user); 
  } catch (err) {
    res.status(500).json({ error: 'Signup failed' }); 
  }
};

// how to cookieparse ,jwt ,npm install
// npm install cookie-parser jsonwebtoken
// @types/jsonwebtoken @types/cookie-parser    

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (
    !user ||
    !user.password ||
    !(await bcrypt.compare(password, user.password as string))
  ) {
    res.status(401).json({ message: 'Invalid credentials' });
    return;
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, { expiresIn: '1d' });
  res.cookie('token', token).json({ message: 'Logged in', token });
};

export const logout = (req: Request, res: Response) => {
  res.clearCookie('token').json({ message: 'Logged out' });
};