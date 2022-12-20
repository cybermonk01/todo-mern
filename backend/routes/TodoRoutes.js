const express = require("express");
const {
  createTodo,
  getTodos,
  getTodo,
} = require("../controller/todo.controller");

const router = express.Router();

router
  .post("/createTodo", createTodo)
  .get("/getTodos", getTodos)
  .get("/getTodo/:todoId", getTodo);

module.exports = router;
