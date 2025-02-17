import mongoose from "mongoose"
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
    try {
       await mongoose.connect(process.env.MONGO_URI);
       console.log('Database connected')
    } catch (e) {
        console.log('Database failed to connect', e.message)
        process.exit(1);
    }
}
