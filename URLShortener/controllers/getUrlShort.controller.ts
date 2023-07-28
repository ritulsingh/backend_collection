import { Request, Response } from "express";
import apiError from "../utils/errorResponse.utils";
import apiResponse from "../utils/apiResponse.utils";
import ShortenedUrl from "../types/urlshort.type";
import { ShortenedUrlModel } from "../models/urlshort.model";

const getUrlShort = async (req: Request, res: Response) => {
  const shortCode: string = req.params.shortCode;
  try {
    const shortenedUrl: ShortenedUrl | null = await ShortenedUrlModel.findOne({ shortCode });
    if (shortenedUrl) {
      return res.status(200).send(apiResponse(200, { originalUrl: shortenedUrl.originalUrl }, 'Original URL retrieved'));
    } else {
      return res.status(404).send(apiError(404, "NOT_FOUND", "Short URL not found"));
    }
  } catch (err: any) {
    console.error('Error retrieving original URL:', err);
    return res.status(500).send(
      apiError(
        500,
        "INTERNAL_SERVER_ERROR",
        err.message || "Internal server error"
      )
    );
  }
};

export default getUrlShort;