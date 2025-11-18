import mongoose from 'mongoose';

async function connectDB() {
    try {
        // accept either MONGO_URL or MONGO_URI
        const mongoUrl = process.env.MONGO_URL || process.env.MONGO_URI;
        if (!mongoUrl) {
            throw new Error('MONGO_URL or MONGO_URI environment variable is not defined');
        }

        await mongoose.connect(mongoUrl);
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
}

export default connectDB;