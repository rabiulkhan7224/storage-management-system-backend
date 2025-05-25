import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import authRoutes from './routes/auth.routes';
import cookieParser from 'cookie-parser';
dotenv.config();
const app=express();
const port = process.env.PORT || 5000;

app.use(express.json());

// cokie parser middleware
app.use(cookieParser());

connectDB()
app.use('/api/auth', authRoutes);
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Welcome to the API' });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
// export default app;