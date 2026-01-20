import { Request, Response } from "express";
import Post from "../models/post.model";
import apiResponse from "../utils/apiResponse.utils";
import apiError from "../utils/errorResponse.utils";

const getAllPosts = async (_req: Request, res: Response) => {
  try {
    const posts = await Post.find({}).populate("author");
    return res.status(200).send(apiResponse(200, posts, "Posts fetched successfully"));
  } catch (err: any) {
    return res.status(500).send(
      apiError(500, "INTERNAL_SERVER_ERROR", err.message || "Internal server error")
    );
  }
};

export default getAllPosts;
