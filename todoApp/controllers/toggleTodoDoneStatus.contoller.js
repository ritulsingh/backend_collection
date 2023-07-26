"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_model_1 = require("../models/todo.model");
const apiResponse_utils_1 = __importDefault(require("../utils/apiResponse.utils"));
const errorResponse_utils_1 = __importDefault(require("../utils/errorResponse.utils"));
const toggleTodoDoneStatus = async (req, res) => {
    try {
        const { todoId } = req.params;
        const todo = await todo_model_1.Todo.findById(todoId);
        if (!todo) {
            return res.status(404).send((0, errorResponse_utils_1.default)(404, "Todo does not exist"));
        }
        todo.isComplete = !todo.isComplete;
        await todo.save({ validateBeforeSave: false });
        return res.status(200).send((0, apiResponse_utils_1.default)(200, todo, "Todo marked " + todo.isComplete ? "done" : "undone"));
    }
    catch (err) {
        return res.status(500).send((0, errorResponse_utils_1.default)(500, "INTERNAL_SERVER_ERROR", err.message || "Internal server error"));
    }
};
exports.default = toggleTodoDoneStatus;
