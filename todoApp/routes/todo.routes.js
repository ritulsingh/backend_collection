"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createTodo_controller_1 = __importDefault(require("../controllers/createTodo.controller"));
const deleteTodo_controller_1 = __importDefault(require("../controllers/deleteTodo.controller"));
const getAllTodos_controller_1 = __importDefault(require("../controllers/getAllTodos.controller"));
const getTodoById_contoller_1 = __importDefault(require("../controllers/getTodoById.contoller"));
const todoRoutes = express_1.default.Router();
/**
 * @Method POST
 * @description create a new todo
 * @param {String} title - title of the todo
 * @param {String} description - description of the todo
 * @returns {Object} returns data response
 */
todoRoutes.post("/create-todo", createTodo_controller_1.default);
/**
 * @Method DELETE
 * @description delete a todo
 * @param {String} id - id of the todo
 * @returns {Object} returns data response
 */
todoRoutes.delete("/delete-todo/:id", deleteTodo_controller_1.default);
/**
 * @Method GET
 * @description get all todos
 * @returns {Object} returns data response
 */
todoRoutes.get("/get-all-todos", getAllTodos_controller_1.default);
/**
 * @Method GET
 * @description get a todo by id
 * @param {String} id - id of the todo
 * @returns {Object} returns data response
 */
todoRoutes.get("/get-todo/:todoId", getTodoById_contoller_1.default);
exports.default = todoRoutes;
