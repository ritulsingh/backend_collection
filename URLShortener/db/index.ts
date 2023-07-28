import mongoose, { Mongoose } from "mongoose";
import config from "../config";

// Extract the DB_NAME and MongoDB_URI from the config object
const { dbName, uri: MongoDB_URI } = config.db;

// Function to connect to MongoDB using Mongoose
const connectDB = async (): Promise<void> => {
  try {
    const connectionInstance: Mongoose = await mongoose.connect(
      `${MongoDB_URI}/${dbName}`
    );
    console.log(`MongoDB Connected! Db host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;