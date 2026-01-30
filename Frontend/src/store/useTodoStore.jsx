import { create } from "zustand";
import axiosInstance from "../lib/axios.js";
import toast from "react-hot-toast";

export const useTodoStore = create((set) => ({
  todos: [],
  loading: false,

  getTodos: async () => {
    set({ loading: true });
    try {
      const res = await axiosInstance.get("/todo/fetch");
      set({ todos: res.data.todos, loading: false });
    } catch (error) {
      console.error("Error fetching todos:", error);
      toast.error(error.response?.data?.message || "Failed to fetch todos");
      set({ loading: false });
    }
  },

  createTodo: async (data) => {
    try {
      const todoData = {
        text: data.text,
        completed: data.completed || false,
        status: data.status || "TO DO",
        projectId: data.projectId || "project1",
      };

      const res = await axiosInstance.post("/todo/create", todoData);
      set((state) => ({
        todos: [...state.todos, res.data.newTodo],
      }));
      toast.success("Todo created successfully");
    } catch (error) {
      console.error("Error creating todo:", error);
      toast.error(error.response?.data?.message || "Failed to create todo");
    }
  },

  updateTodo: async (id, data) => {
    try {
      const res = await axiosInstance.put(`/todo/update/${id}`, data);
      set((state) => ({
        todos: state.todos.map((t) => (t._id === id ? res.data.todo : t)),
      }));
      toast.success("Todo updated successfully");
    } catch (error) {
      console.error("Error updating todo:", error);
      toast.error(error.response?.data?.message || "Failed to update todo");
    }
  },

  deleteTodo: async (id) => {
    try {
      await axiosInstance.delete(`/todo/delete/${id}`);
      set((state) => ({
        todos: state.todos.filter((t) => t._id !== id),
      }));
      toast.success("Todo deleted successfully");
    } catch (error) {
      console.error("Error deleting todo:", error);
      toast.error(error.response?.data?.message || "Failed to delete todo");
    }
  },

  reorderTodos: (reorderedTodos) => {
    set({ todos: reorderedTodos });
  },

  moveTodo: async (id, newStatus, newProjectId) => {
    try {
      const updateData = {};
      if (newStatus) updateData.status = newStatus;
      if (newProjectId) updateData.projectId = newProjectId;

      const res = await axiosInstance.put(`/todo/update/${id}`, updateData);
      set((state) => ({
        todos: state.todos.map((t) => (t._id === id ? res.data.todo : t)),
      }));
    } catch (error) {
      console.error("Error moving todo:", error);
      toast.error(error.response?.data?.message || "Failed to move todo");
    }
  },
}));