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
const toggleTodoDoneStatus_contoller_1 = __importDefault(require("../controllers/toggleTodoDoneStatus.contoller"));
const updateTodo_controller_1 = __importDefault(require("../controllers/updateTodo.controller"));
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
/**
 * @Method PATCH
 * @description toggle todo done status
 * @param {String} todoId - id of the todo
 * @returns {Object} returns data response
 */
todoRoutes.patch("/toggle-todo-done-status/:todoId", toggleTodoDoneStatus_contoller_1.default);
/**
 * @Method PATCH
 * @description update a todo
 * @param {String} todoId - id of the todo
 * @param {String} title - title of the todo
 * @param {String} description - description of the todo
 * @returns {Object} returns data response
 */
todoRoutes.patch("/update-todo/:todoId", updateTodo_controller_1.default);
exports.default = todoRoutes;
