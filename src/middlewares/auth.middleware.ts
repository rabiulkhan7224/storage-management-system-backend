import { NextFunction, Request, Response } from "express";
import User from "../models/User";
import jwt from "jsonwebtoken";


export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            res.status(401).json({ error: 'Unauthorized please token give me' });
            return
        }


        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
        const user = await User.findById(decoded.user._id)
        if (!user){
            res.status(401).json({ error: "forbidden" });
            return;
        }
        req.user = { _id: user._id.toString() };
        next();
    } catch (err) {
        res.status(401).json({ error: 'Unauthorized' });
    }
};