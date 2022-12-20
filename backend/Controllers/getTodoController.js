import Todo from "../model/Todo";

export async function getTodoController(req, res) {
  const { todoId } = req.params;

  const alltodos = await Todo.findById(todoId);
  res.json(alltodos);
}
