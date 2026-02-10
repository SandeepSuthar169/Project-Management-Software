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
     
          toast.error(error.response?.data?.message || "Failed to fetch tasks");
          set({ loading: false });
        }
      },

      createTasks: async (data) => {
        set({ loading: true }); 
        try {
            const res = await axiosInstance.post("/task/createTask", data); 
            set((state) => ({
                tasks: [...state.tasks, res.data.data],
                loading: false, 
            }));
            toast.success("Task created successfully");
            return res.data.data; 
        } catch (error) {
          
            toast.error(error.response?.data?.message || "Failed to create tasks");
            set({ loading: false }); 
            throw error; 
        }
      },

      
    updateTasks: async (taskId, data) => {
        set({ loading: true }); 
        try {
            const res = await axiosInstance.post(`/task/updateTask/${taskId}`, data); 
            set((state) => ({
                tasks: state.tasks.map((t) => (t._id === taskId ? res.data.data : t)),
                loading: false, 
            }));
            toast.success("Task updated successfully");
            return res.data.data;
        } catch (error) {
          
            toast.error(error.response?.data?.message || "Failed to update task");
            set({ loading: false }); 
            throw error;
        }
    },


    deleteTasks: async (taskId) => {
        set({ loading: true }); 
        try {
            await axiosInstance.delete(`/task/deleteTask/${taskId}`); 
            set((state) => ({
                tasks: state.tasks.filter((t) => t._id !== taskId),
                loading: false, 
            }));
            toast.success("Task deleted successfully");
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to delete task");
            set({ loading: false });
            throw error;
        }
      },
}));