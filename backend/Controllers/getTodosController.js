import Todo from "../model/Todo";

export async function getTodosController(req, res) {
  const todos = await Todo.find();

  res.json(todos);
}
