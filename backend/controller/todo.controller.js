const Todo = require("../model/Todo");
// /**
//  * createTodo() - Asynchronous Function
//  *      - Destructures the input received in req.body.
//  *      - Destructures the userid/appwriteId received in req.params.
//  *      - Create a todoObj object.
//  *      - Validated if title is received.
//  *      - Validated if title received is of type string.
//  *      - define title property in todoObj.
//  *      - Validated if tasks are received then it should be of type array.
//  *      - If tasks is valid define it in todoObj.
//  *      - Validated if isImportant is of type boolean.
//  *      - If isImportant is valid define it in todoObj.
//  *      - Validated if userId/appwriteId is received.
//  *      - Validated if userId/appwriteId received is of type string.
//  *      - Fetch the user in DB using appwriteId
//  *      - Validate user exists
//  *      - After finding user add his user._id as property in todoObj.
//  *      - Creates a new todo document from the validated data. (Asynchronous operation - create())
//  *      - Update user todos using the todo._id and save.
//  */

exports.createTodo = async (req, res) => {
  const { title, tasks, isImportant, user } = req.body;

  if (!title) {
    return res.status(400).send("enter a todo name");
  }
  try {
    const newTodo = new Todo({
      title,
    });

    const createdNewTodo = await newTodo.save();

    res.status(200).json(createdNewTodo);
  } catch (err) {
    res.status(400).send(err.message);
    console.log("nhi bana");
  }
};

exports.getTodos = async (_req, res) => {
  const allTodos = await Todo.find();

  res.status(200).json(allTodos);
};

exports.getTodo = async (req, res) => {
  const { todoId } = req.params;

  const todo = await Todo.find({ _id: todoId });
  console.log(todo);

  res.status(200).json(todo);
  if (!todo) {
    res.status(400).json("Todo not exists");
  }
};

exports.createTask = async (req, res) => {
  const { todoId } = req.params;

  const todo = await Todo.findById(todoId);
  if (!todo) res.status(400).json("todo not available");

  const { text } = req.body;
  console.log(text);
  todo.tasks.push(text);
  await todo.save();

  res.status(201).json(todo);
};

exports;
