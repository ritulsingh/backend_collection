"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_model_1 = require("../models/todo.model");
const apiResponse_utils_1 = __importDefault(require("../utils/apiResponse.utils"));
const errorResponse_utils_1 = __importDefault(require("../utils/errorResponse.utils"));
const deleteTodo = async (req, res) => {
    try {
        const { todoId } = req.params;
        const todo = await todo_model_1.Todo.findByIdAndDelete(todoId);
        if (!todo) {
            return res.status(404).send((0, errorResponse_utils_1.default)(404, "Todo does not exist"));
        }
        return res.status(201).send((0, apiResponse_utils_1.default)(200, { deletedTodo: todo }, "Todo deleted successfully"));
    }
    catch (err) {
        return res.status(500).send((0, errorResponse_utils_1.default)(500, "INTERNAL_SERVER_ERROR", err.message || "Internal server error"));
    }
};
exports.default = deleteTodo;
