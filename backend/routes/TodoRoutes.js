const express = require("express");
const {
  createTodo,
  getTodos,
  getTodo,
  createTask,
} = require("../controller/todo.controller");

const router = express.Router();

router
  .post("/createTodo", createTodo)
  .get("/getTodos", getTodos)
  .get("/getTodo/:todoId", getTodo)
  .post("/createTask/:todoId", createTask);

module.exports = router;
