import { Document } from "mongoose";

export interface Click {
  timestamp: Date;
  ipAddress: string;
  referer?: string;
  userAgent?: string;
}

interface ShortenedUrl extends Document {
  shortCode: string;
  originalUrl: string;
  createdAt: Date;
  clicks: Click[];
}

export default ShortenedUrl;