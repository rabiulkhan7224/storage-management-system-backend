import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        const dbUrl = process.env.MongoDB_URL
        
        await mongoose.connect(dbUrl as string);
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
    }
}
export default connectDB;