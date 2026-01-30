// controllers/todo.controller.js
import Todo from "../models/Todo.models.js";

export const createTodo = async (req, res) => {
  try {
    const { text, completed, status, projectId } = req.body;

    if (!text) {
      return res.status(400).json({ message: "Todo text is required" });
    }

    const newTodo = new Todo({
      text,
      completed: completed || false,
      status: status || "TO DO",
      projectId: projectId || "project1",
      userId: req.user._id, 
    });

    await newTodo.save();

    res.status(201).json({
      message: "Todo created successfully",
      newTodo,
    });
  } catch (error) {
    console.error("Error in createTodo:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.user._id }).sort({
      createdAt: -1,
    });

    res.status(200).json({ todos });
  } catch (error) {
    console.error("Error in getTodos:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { text, completed, status, projectId } = req.body;

    const todo = await Todo.findOne({ _id: id, userId: req.user._id });

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    if (text !== undefined) todo.text = text;
    if (completed !== undefined) todo.completed = completed;
    if (status !== undefined) todo.status = status;
    if (projectId !== undefined) todo.projectId = projectId;

    await todo.save();

    res.status(200).json({
      message: "Todo updated successfully",
      todo,
    });
  } catch (error) {
    console.error("Error in updateTodo:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findOneAndDelete({
      _id: id,
      userId: req.user._id,
    });

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error("Error in deleteTodo:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};