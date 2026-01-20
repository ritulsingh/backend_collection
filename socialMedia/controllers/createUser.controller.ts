import { Request, Response } from "express";
import User from "../models/user.model";
import apiResponse from "../utils/apiResponse.utils";
import apiError from "../utils/errorResponse.utils";

const createUser = async (req: Request, res: Response) => {
  try {
    const { username, email } = req.body;
    const user = new User({ username, email });
    await user.save();
    return res.status(201).send(apiResponse(201, user, "User created successfully"));
  } catch (err: any) {
    return res.status(500).send(
      apiError(500, "INTERNAL_SERVER_ERROR", err.message || "Internal server error")
    );
  }
};

export default createUser;
