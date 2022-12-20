import Todo from "../model/Todo";

export const createTodo = async (req, res) => {
  try {
    const { todo } = req.body;

    if (!todo) {
      throw new Error("you should create a new todo");
    }

    const todoExists = await Todo.findOne({ todo });
    if (todoExists) {
      throw new Error("todo already exists!");
    }

    const todos = await Todo.create({ todo });

    res.status(201).json({
      success: true,
      message: "Todo created successfully",
      todos,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const createTaskTodoController = async (req, res) => {
  const { todoId } = req.params;
};

/*
getTodo()- asynchronous function

  -- desctructures the input in req.params
  -- Validated if todoId is recieved
  -- 


*/

// export const getTodo = async (req, res) => {

// }

export const createTod = async (req, res) => {
  const newTodo = new Todo({ title: req.body });

  const createdNewTodo = await newTodo.save();
  res.json(createdNewTodo);
};
