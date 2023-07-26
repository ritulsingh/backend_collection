# Todo App Backend

Welcome to the Todo App Backend documentation! This section provides detailed information about the API endpoints available in the Todo App Backend. These endpoints allow you to perform various operations related to todo items.

## Project Description

The Todo App Backend is a server-side application that serves as the backend for a todo management system. It provides a set of API endpoints to create, read, update, and delete todo items. The backend is built using Node.js, TypeScript, Express.js, and MongoDB, offering a robust and efficient solution for handling todo-related operations.

## Tech Stack

The Todo App Backend is developed using the following technologies:

- **Node.js**: A JavaScript runtime that allows server-side execution of JavaScript code.
- **TypeScript**: A typed superset of JavaScript that enhances code maintainability and productivity.
- **Express.js**: A popular web framework for Node.js, enabling the creation of RESTful APIs easily.
- **MongoDB**: A NoSQL database for efficient storage and retrieval of data.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB, providing a structured schema-based approach for interacting with the database.

## Folder Structure

The Todo App Backend repository follows the following folder structure to organize backend code for different components:

- **config/**: Contains configuration files and settings for the project.

- **controllers/**: Houses the controller files responsible for handling HTTP requests and defining the application logic.

- **db/**: Includes files related to database connections and configurations.

- **models/**: Contains the model files that define the data structure and interact with the database.

- **routes/**: Contains the route files that define the API endpoints and their corresponding controller functions.

- **types/**: Includes TypeScript type declarations and custom type definitions.

- **utils/**: Contains utility functions that can be shared across different parts of the backend.

- **validators/**: Includes validation functions and schemas for validating incoming data.

## API Endpoints

Below are the API endpoints available in the Todo App Backend:

### Create a New Todo

- **Method**: POST
- **Endpoint**: `/create-todo`
- **Description**: Create a new todo item.
- **Parameters**:
  - `title` (String) - Title of the todo (required).
  - `description` (String) - Description of the todo.
- **Response**: Returns an object with data response.

### Delete a Todo

- **Method**: DELETE
- **Endpoint**: `/delete-todo/:id`
- **Description**: Delete a todo item by its ID.
- **Parameters**:
  - `id` (String) - ID of the todo (required).
- **Response**: Returns an object with data response.

### Get All Todos

- **Method**: GET
- **Endpoint**: `/get-all-todos`
- **Description**: Get all todo items.
- **Response**: Returns an object with data response.

### Get Todo by ID

- **Method**: GET
- **Endpoint**: `/get-todo/:todoId`
- **Description**: Get a todo item by its ID.
- **Parameters**:
  - `todoId` (String) - ID of the todo (required).
- **Response**: Returns an object with data response.

### Toggle Todo Done Status

- **Method**: PATCH
- **Endpoint**: `/toggle-todo-done-status/:todoId`
- **Description**: Toggle the done status of a todo item.
- **Parameters**:
  - `todoId` (String) - ID of the todo (required).
- **Response**: Returns an object with data response.

### Update a Todo

- **Method**: PATCH
- **Endpoint**: `/update-todo/:todoId`
- **Description**: Update a todo item.
- **Parameters**:
  - `todoId` (String) - ID of the todo (required).
  - `title` (String) - Title of the todo.
  - `description` (String) - Description of the todo.
- **Response**: Returns an object with data response.

## Conclusion

The Todo App Backend provides a powerful backend solution for managing todo items. With its well-structured API endpoints and efficient organization of code, it offers a seamless experience for creating, updating, and deleting todos. If you have any questions or feedback, feel free to reach out and contribute to this project!

Happy coding!
