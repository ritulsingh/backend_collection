import { Request, Response } from "express";
import { Todo } from "../models/todo.model";
import validateTodo from "../validators/todo.validator";
import apiError from "../utils/errorResponse.utils";
import apiResponse from "../utils/apiResponse.utils";

const updateTodo = async (req: Request, res: Response) => {
  try {
    const validationError = validateTodo(req.body);
    if (validationError) {
      return res.status(401).send(
        apiError(
          401,
          "INVALID_PAYLOAD",
          "Invalid payload, i.e. title or description",
          validationError.details
        )
      );
    }
    const { title, description } = req.body;
    const { todoId } = req.params;
    const todo = await Todo.findByIdAndUpdate(
      todoId,
      {
        $set: {
          title,
          description,
        },
      },
      { new: true }
    );
    if (!todo) {
      return res.status(404).send(apiError(404, "Todo does not exist"));
    }
    return res.status(200).send(apiResponse(200, todo, "Todo updated successfully"))
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

export default updateTodo;