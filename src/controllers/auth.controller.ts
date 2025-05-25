import e, { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/User";

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

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      res.status(400).json({ error: "Email and password are required" });
      return;
    }

    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ error: "Invalid credentials" });
      return;
    }

    if (!user.password || typeof user.password !== "string") {
      res.status(400).json({ error: "Invalid credentials" });
      return;
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ error: "Invalid credentials" });
      return;
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
}   