"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const validateTodo = (body) => {
    const schema = joi_1.default.object({
        title: joi_1.default.string().required().min(3).max(100),
        description: joi_1.default.string().allow("").max(1000),
    });
    const { error } = schema.validate(body);
    return error;
};
exports.default = validateTodo;
