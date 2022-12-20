import Todo from "../model/Todo";

export const createTask = async (req, res) => {
  try {
    const { task } = req.body;

    if (!task) {
      throw new Error("one Task is required for every todo!");
    }

    const taskExists = await Todo.findOne({ task });
    if (taskExists) {
      throw new Error("task already exists!");
    }

    const tasks = await Todo.create({ task });

    res.status(201).json({
      success: true,
      message: "Task created successfully",
      tasks,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Todo.findByIdAndUpdate(req.params.id, req.body);
    res.send(201).json({
      success: true,
      message: "Task updated successfully",
    });
  } catch (err) {
    console.log(err.message);
  }
};
