"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_model_1 = require("../models/todo.model");
const todo_validator_1 = __importDefault(require("../validators/todo.validator"));
const errorResponse_utils_1 = __importDefault(require("../utils/errorResponse.utils"));
const apiResponse_utils_1 = __importDefault(require("../utils/apiResponse.utils"));
const updateTodo = async (req, res) => {
    try {
        const validationError = (0, todo_validator_1.default)(req.body);
        if (validationError) {
            return res.status(401).send((0, errorResponse_utils_1.default)(401, "INVALID_PAYLOAD", "Invalid payload, i.e. title or description", validationError.details));
        }
        const { title, description } = req.body;
        const { todoId } = req.params;
        const todo = await todo_model_1.Todo.findByIdAndUpdate(todoId, {
            $set: {
                title,
                description,
            },
        }, { new: true });
        if (!todo) {
            return res.status(404).send((0, errorResponse_utils_1.default)(404, "Todo does not exist"));
        }
        return res.status(200).send((0, apiResponse_utils_1.default)(200, todo, "Todo updated successfully"));
    }
    catch (err) {
        return res.status(500).send((0, errorResponse_utils_1.default)(500, "INTERNAL_SERVER_ERROR", err.message || "Internal server error"));
    }
};
exports.default = updateTodo;
