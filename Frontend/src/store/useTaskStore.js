import { create } from "zustand";
import axiosInstance from "../lib/axios.js";
import toast from "react-hot-toast";

export const useTaskStore = create((set) => ({
    tasks: [],
    loading: false,

    getTasks: async (taskId) => {
        set({ loading: true });
        try {
          const res = await axiosInstance.get(`/task/getTasksById/${taskId}`); 
          set({ tasks: res.data.data, loading: false }); 
        } catch (error) {
        //   console.error("Error fetching tasks:", error);
        //   console.error("Error details:", error.response); // Added for debugging
          toast.error(error.response?.data?.message || "Failed to fetch tasks");
          set({ loading: false });
        }
      },

      createTasks: async (data) => {
        set({ loading: true }); // Added loading state
        try {
            // console.log("Creating task with data:", data); // Debug log
            const res = await axiosInstance.post("/task/createTask", data); 
            // console.log("Task created response:", res.data); // Debug log
            set((state) => ({
                tasks: [...state.tasks, res.data.data],
                loading: false, // Reset loading
            }));
            toast.success("Task created successfully");
            return res.data.data; // Return the created task
        } catch (error) {
            // console.error("Error creating tasks:", error);
            // console.error("Error response:", error.response); // Added for debugging
            // console.error("Request URL:", error.config?.url); // Shows the full URL
            toast.error(error.response?.data?.message || "Failed to create tasks");
            set({ loading: false }); // Reset loading on error
            throw error; // Re-throw for component to handle if needed
        }
      },

      
    updateTasks: async (taskId, data) => {
        set({ loading: true }); // Added loading state
        try {
            const res = await axiosInstance.post(`/task/updateTask/${taskId}`, data); 
            set((state) => ({
                tasks: state.tasks.map((t) => (t._id === taskId ? res.data.data : t)),
                loading: false, // Reset loading
            }));
            toast.success("Task updated successfully");
            return res.data.data;
        } catch (error) {
            // console.error("Error updating task:", error);
            // console.error("Error response:", error.response);
            toast.error(error.response?.data?.message || "Failed to update task");
            set({ loading: false }); // Reset loading on error
            throw error;
        }
    },


    deleteTasks: async (taskId) => {
        set({ loading: true }); // Added loading state
        try {
            await axiosInstance.delete(`/task/deleteTask/${taskId}`); 
            set((state) => ({
                tasks: state.tasks.filter((t) => t._id !== taskId),
                loading: false, // Reset loading
            }));
            toast.success("Task deleted successfully");
        } catch (error) {
            console.error("Error deleting task:", error);
            console.error("Error response:", error.response);
            toast.error(error.response?.data?.message || "Failed to delete task");
            set({ loading: false }); // Reset loading on error
            throw error;
        }
      },
}));