import { create } from "zustand"
import {axiosInstance} from "../lib/axios.js"
import toast from 'react-hot-toast'

export const useAuthStore = create((set) => ({
    authUser:null,
    isSigniUp: false,
    isLoggingUp: false,
    isCheckingAuth: false,


    checkAuth: async () => {
        set({ isCheckingAuth: true });
        try {
          const res = await axiosInstance.get("/auth/check");
          console.log("checkauth response", res.data);
    
          set({ authUser: res.data.user });
        } catch (error) {
          console.log("❌ Error checking auth:", error);
          set({ authUser: null });
        } finally {
          set({ isCheckingAuth: false });
        }

    },




    signup: async(data) => {

        set({isSigniUp: true});


        try {
            const res = await axiosInstance.get('/auth/register', data);
            set({ authUser : res.data.user });
            toast.success(res.data.message);
        } catch (error) {
            console.log("error signuing up", error);
            console.error("error siging up")
        }
    },


    login: async (data) => {

        set({ isLoggingIn: true });
        
        try {
          const res = await axiosInstance.post("/auth/login", data);
    
          set({ authUser: res.data.user });
    
          toast.success(res.data.message);
        
        } catch (error) {
          console.log("Error logging in", error);
          toast.error("Error logging in");
        
        } finally {
          set({ isLoggingIn: false });
        }
      },

    logout: async () => {
        
        try {
          await axiosInstance.post("/auth/logout");
          set({ authUser: null });
    
          toast.success("Logout successful");
        
        } catch (error) {
          console.log("Error logging out", error);
          toast.error("Error logging out");
        }
      },
}))