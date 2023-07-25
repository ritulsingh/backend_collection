import express, { Router } from "express";
import createTodo from "../controllers/createTodo.controller";

const todoRoutes: Router = express.Router();

/**
 * @Method POST
 * @description create a new todo
 * @param {String} title - title of the todo
 * @param {String} description - description of the todo
 * @returns {Object} returns data response
 */
todoRoutes.post("/create-todo", createTodo);

export default todoRoutes;
