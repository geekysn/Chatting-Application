import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();
const connectToMongoDB = async () => {
    try {
        const uri = process.env.MONGO_DB_URI;
        if (!uri) {
            throw new Error("MONGO_DB_URI is not defined in environment variables.");
        }

        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

export default connectToMongoDB;
