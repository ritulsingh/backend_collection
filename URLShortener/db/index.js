"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../config"));
// Extract the DB_NAME and MongoDB_URI from the config object
const { dbName, uri: MongoDB_URI } = config_1.default.db;
// Function to connect to MongoDB using Mongoose
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose_1.default.connect(`${MongoDB_URI}/${dbName}`);
        console.log(`MongoDB Connected! Db host: ${connectionInstance.connection.host}`);
    }
    catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};
exports.default = connectDB;
