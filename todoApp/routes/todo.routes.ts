import express, { Router } from "express";
import createTodo from "../controllers/createTodo.controller";
import deleteTodo from "../controllers/deleteTodo.controller";
import getAllTodos from "../controllers/getAllTodos.controller";
import getTodoById from "../controllers/getTodoById.contoller";
import toggleTodoDoneStatus from "../controllers/toggleTodoDoneStatus.contoller";
import updateTodo from "../controllers/updateTodo.controller";

const todoRoutes: Router = express.Router();

/**
 * @Method POST
 * @description create a new todo
 * @param {String} title - title of the todo
 * @param {String} description - description of the todo
 * @returns {Object} returns data response
 */
todoRoutes.post("/create-todo", createTodo);

/**
 * @Method DELETE
 * @description delete a todo
 * @param {String} id - id of the todo
 * @returns {Object} returns data response
 */
todoRoutes.delete("/delete-todo/:id", deleteTodo)

/** 
 * @Method GET
 * @description get all todos
 * @returns {Object} returns data response
 */
todoRoutes.get("/get-all-todos", getAllTodos);

/** 
 * @Method GET
 * @description get a todo by id
 * @param {String} id - id of the todo
 * @returns {Object} returns data response
 */
todoRoutes.get("/get-todo/:todoId", getTodoById);

/** 
 * @Method PATCH
 * @description toggle todo done status
 * @param {String} todoId - id of the todo
 * @returns {Object} returns data response
 */
todoRoutes.patch("/toggle-todo-done-status/:todoId", toggleTodoDoneStatus);


/** 
 * @Method PATCH
 * @description update a todo
 * @param {String} todoId - id of the todo
 * @param {String} title - title of the todo
 * @param {String} description - description of the todo
 * @returns {Object} returns data response
 */
todoRoutes.patch("/update-todo/:todoId", updateTodo);

export default todoRoutes;
