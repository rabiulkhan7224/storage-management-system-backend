import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import authRoutes from './routes/auth.routes';
dotenv.config();
const app=express();

app.use(express.json());



connectDB()
app.use('/api/auth', authRoutes);
app.get('/api', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});