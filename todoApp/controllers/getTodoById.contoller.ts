import { Request, Response } from "express";
import { Todo } from "../models/todo.model";
import apiResponse from "../utils/apiResponse.utils";
import apiError from "../utils/errorResponse.utils";

const getTodoById = async (req: Request, res: Response) => {
  try {
    const { todoId } = req.params;
    const todo = await Todo.findById(todoId);
    if (!todo) {
      return res.status(404).send(apiError(404, "Todo does not exist"));
    }
    return res.status(201).send(apiResponse(200, todo, "Todo Fetched successfully"))
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

export default getTodoById;