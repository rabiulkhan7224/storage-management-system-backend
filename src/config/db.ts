import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/mydatabase';
        await mongoose.connect(dbUrl,);
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
    }
}
export default connectDB;