import mongoose, { Schema } from "mongoose";
import ShortenedUrl from "../types/urlshort.type";

const urlShortenerSchema = new Schema<ShortenedUrl>(
  {
    shortCode: {
      type: String,
      required: true,
      index: true,
    },
    originalUrl: {
      type: String,
      required: true,
    },
    clicks: {
      type: [
        {
          timestamp: { type: Date, required: true },
          ipAddress: { type: String, required: true },
          referer: String,
          userAgent: String,
        },
      ],
      default: [],
    },
  },
  { timestamps: true, versionKey: false }
);

export const ShortenedUrlModel = mongoose.model<ShortenedUrl>("urlShortener", urlShortenerSchema);