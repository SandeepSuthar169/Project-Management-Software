import { create } from "zustand";
import axiosInstance from "../lib/axios.js";
import toast from "react-hot-toast";

export const useTodoStore = create((set) => ({
  todos: [],
  loading: false,

  // Fetch all todos
  fetchTodos: async () => {
    set({ loading: true });
    try {
      const response = await axiosInstance.get("/todo/fetch");
      set({ todos: response.data.todos, loading: false });
    } catch (error) {
      toast.error("Failed to load todos");
      set({ loading: false });
    }
  },

  // Add new todo
  addTodo: async (text) => {
    try {
      const response = await axiosInstance.post("/todo/create", {
        text,
        completed: false,
      });
      set((state) => ({
        todos: [...state.todos, response.data.newTodo],
      }));
      toast.success("Todo added!");
    } catch (error) {
      toast.error("Failed to add todo");
    }
  },

  // Toggle todo completion
  toggleTodo: async (id) => {
    const todo = useTodoStore.getState().todos.find((t) => t._id === id);
    try {
      const response = await axiosInstance.put(`/todo/update/${id}`, {
        completed: !todo.completed,
      });
      set((state) => ({
        todos: state.todos.map((t) =>
          t._id === id ? response.data.todo : t
        ),
      }));
    } catch (error) {
      toast.error("Failed to update todo");
    }
  },

  // Delete todo
  deleteTodo: async (id) => {
    try {
      await axiosInstance.delete(`/todo/delete/${id}`);
      set((state) => ({
        todos: state.todos.filter((t) => t._id !== id),
      }));
      toast.success("Todo deleted");
    } catch (error) {
      toast.error("Failed to delete todo");
    }
  },
}));