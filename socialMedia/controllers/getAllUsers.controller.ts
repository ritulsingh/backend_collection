import { Request, Response } from "express";
import User from "../models/user.model";
import apiResponse from "../utils/apiResponse.utils";
import apiError from "../utils/errorResponse.utils";

const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find({});
    return res.status(200).send(apiResponse(200, users, "Users fetched successfully"));
  } catch (err: any) {
    return res.status(500).send(
      apiError(500, "INTERNAL_SERVER_ERROR", err.message || "Internal server error")
    );
  }
};

export default getAllUsers;
