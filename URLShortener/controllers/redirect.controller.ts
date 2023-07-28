import { Response, Request } from "express"
import apiError from "../utils/errorResponse.utils";
import ShortenedUrl, { Click } from "../types/urlshort.type";
import { ShortenedUrlModel } from "../models/urlshort.model";

const redirectController = async (req: Request, res: Response) => {
  const shortCode: string = req.params.shortCode;
  try {
    const shortenedUrl: ShortenedUrl | null = await ShortenedUrlModel.findOne({ shortCode });
    if (shortenedUrl) {
      const clickData: Click = {
        timestamp: new Date(),
        ipAddress: req.ip,
        referer: req.headers.referer,
        userAgent: req.headers['user-agent'],
      };
      console.log(clickData);
      shortenedUrl.clicks.push(clickData);
      await shortenedUrl.save();
      res.redirect(shortenedUrl.originalUrl);
    } else {
      return res.status(404).send(apiError(404, "NOT_FOUND", "Short URL not found"));
    }
  } catch (err: any) {
    console.error('Error handling redirection:', err);
    return res.status(500).send(
      apiError(
        500,
        "INTERNAL_SERVER_ERROR",
        err.message || "Internal server error"
      )
    )
  }
}

export default redirectController;