import { Request, Response } from "express";
import { Todo } from "../models/todo.model";
import validateTodo from "../validators/todo.validator";
import apiResponse from "../utils/apiResponse.utils";
import apiError from "../utils/errorResponse.utils";

const createTodo = async (req: Request, res: Response) => {
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
    // Create a new Todo instance and save it to the database
    const todo = new Todo({
      title,
      description,
    });
    await todo.save();
    return res.status(201).send(apiResponse(201, todo, "Todo created successfully"))
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

export default createTodo;