import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import authRoutes from './routes/auth.routes';
import cookieParser from 'cookie-parser';
import { authMiddleware } from './middlewares/auth.middleware';
import folderRoutes from './routes/folder.routes';
import fileRoutes from './routes/file.routes';
dotenv.config();
const app=express();
const port = process.env.PORT || 5000;

app.use(express.json());

// cokie parser middleware
app.use(cookieParser());

connectDB()
app.use('/api/auth', authRoutes);
app.use('/api/files', authMiddleware,  fileRoutes);
app.use('/api/folders', authMiddleware, folderRoutes);
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Welcome to the API' });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
// export default app;