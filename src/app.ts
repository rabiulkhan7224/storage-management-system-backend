import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
dotenv.config();
const app=express();

app.use(express.json());

// app.use('/api/auth', authRoutes);
// app.use('/api/storage', storageRoutes);

connectDB()
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});