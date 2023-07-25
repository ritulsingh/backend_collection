"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_model_1 = require("../models/todo.model");
const todo_validator_1 = __importDefault(require("../validators/todo.validator"));
const apiResponse_utils_1 = __importDefault(require("../utils/apiResponse.utils"));
const errorResponse_utils_1 = __importDefault(require("../utils/errorResponse.utils"));
const createTodo = async (req, res) => {
    try {
        const validationError = (0, todo_validator_1.default)(req.body);
        if (validationError) {
            return res.status(401).send((0, errorResponse_utils_1.default)(401, "INVALID_PAYLOAD", "Invalid payload, i.e. title or description", validationError.details));
        }
        const { title, description } = req.body;
        // Create a new Todo instance and save it to the database
        const todo = new todo_model_1.Todo({
            title,
            description,
        });
        await todo.save();
        return res.status(201).send((0, apiResponse_utils_1.default)(201, todo, "Todo created successfully"));
    }
    catch (err) {
        return res.status(500).send((0, errorResponse_utils_1.default)(500, "INTERNAL_SERVER_ERROR", err.message || "Internal server error"));
    }
};
exports.default = createTodo;
