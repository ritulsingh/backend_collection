import express, { Router } from "express";
import createTodo from "../controllers/createTodo.controller";
import deleteTodo from "../controllers/deleteTodo.controller";
import getAllTodos from "../controllers/getAllTodos.controller";
import getTodoById from "../controllers/getTodoById.contoller";

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

export default todoRoutes;
