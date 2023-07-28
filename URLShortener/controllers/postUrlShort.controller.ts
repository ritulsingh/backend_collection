import { Request, Response } from "express";
import crypto from "crypto";
import apiError from "../utils/errorResponse.utils";
import apiResponse from "../utils/apiResponse.utils";
import ShortenedUrl from "../types/urlshort.type";
import { ShortenedUrlModel } from "../models/urlshort.model";

const isValidURL = (url: string): boolean => {
  try {
    new URL(url)
    return true;
  } catch (err) {
    return false;
  }
}

const generateShortCode = (): string => {
  return Array.from(crypto.randomBytes(7)).map((byte) => String.fromCharCode(97 + (byte % 26))).join('');
};

const postUrlShort = async (req: Request, res: Response) => {
  const originalUrl: string = req.body.url;
  if (!originalUrl) {
    return res.status(400).send(apiError(400, 'Missing URL', 'URL is required'));
  }
  if (!isValidURL(originalUrl)) {
    return res.status(400).send(apiError(400, 'Invalid URL', 'URL is required'));
  }
  try {
    const protocol = req.secure ? 'https' : 'http';
    const host = req.get('host');
    const existingShortenedUrl: ShortenedUrl | null = await ShortenedUrlModel.findOne({ originalUrl });
    if (existingShortenedUrl) {
      const shortUrl: string = `${protocol}://${host}/${existingShortenedUrl.shortCode}`;
      return res.status(200).send(apiResponse(200, { shortUrl }, 'Shortened URL retrieved',));
    }
    const shortCode: string = generateShortCode();
    const shortenedUrl: ShortenedUrl = await ShortenedUrlModel.create({
      shortCode,
      originalUrl,
      clicks: [],
    });
    const shortUrl: string = `${protocol}://${host}/${shortCode}`;
    return res.status(201).send(apiResponse(201, { shortUrl }, 'Shortened URL created'))
  } catch (err: any) {
    return res.status(500).send(
      apiError(
        500,
        "INTERNAL_SERVER_ERROR",
        err.message || "Internal server error"
      )
    )
  }
};

export default postUrlShort;