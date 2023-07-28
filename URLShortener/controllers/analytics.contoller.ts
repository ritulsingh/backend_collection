import { Request, Response } from "express";
import apiError from "../utils/errorResponse.utils";
import ShortenedUrl, { Click } from "../types/urlshort.type";
import { ShortenedUrlModel } from "../models/urlshort.model";
import apiResponse from "../utils/apiResponse.utils";

const analyticsData = async (req: Request, res: Response) => {
  try {
    const shortCode: string = req.params.shortCode;
    const shortenedUrl: ShortenedUrl | null = await ShortenedUrlModel.findOne({ shortCode });
    if (shortenedUrl) {
      const clickData: Click[] = shortenedUrl.clicks;
      const data = {
        clickCount: clickData.length,
        clickData
      }
      return res.status(200).send(apiResponse(200, data, 'Click data retrieved'));
    } else {
      res.status(404).send(apiError(404, 'Short URL not found'));
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
}

export default analyticsData;