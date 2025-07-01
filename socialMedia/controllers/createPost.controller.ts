import { Request, Response } from "express";
import Post from "../models/post.model";
import apiResponse from "../utils/apiResponse.utils";
import apiError from "../utils/errorResponse.utils";

const createPost = async (req: Request, res: Response) => {
  try {
    const { author, content } = req.body;
    const post = new Post({ author, content });
    await post.save();
    return res.status(201).send(apiResponse(201, post, "Post created successfully"));
  } catch (err: any) {
    return res.status(500).send(
      apiError(500, "INTERNAL_SERVER_ERROR", err.message || "Internal server error")
    );
  }
};

export default createPost;
