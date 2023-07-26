import { Request, Response } from "express";
import { Todo } from "../models/todo.model";
import apiResponse from "../utils/apiResponse.utils";
import apiError from "../utils/errorResponse.utils";

const toggleTodoDoneStatus = async (req: Request, res: Response) => {
  try {
    const { todoId } = req.params;
    const todo = await Todo.findById(todoId);
    if (!todo) {
      return res.status(404).send(apiError(404, "Todo does not exist"));
    }
    todo.isComplete = !todo.isComplete;
    await todo.save({ validateBeforeSave: false });
    return res.status(200).send(apiResponse(200, todo, "Todo marked " + todo.isComplete ? "done" : "undone"))
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

export default toggleTodoDoneStatus;