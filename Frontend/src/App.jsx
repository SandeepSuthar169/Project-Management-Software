import { useEffect, useState } from 'react'
import { 
  createBrowserRouter, 
  RouterProvider,
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { Loader } from "lucide-react";
import { Toaster } from 'react-hot-toast'
import  Home  from './Pages/Home.jsx'
import  Login  from "./Auth/Login.jsx"
import  Signup  from './Auth/Signup.jsx'
import { useAuthStore } from './store/useAuthStore.js'

function App() {

  const {authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth])
  
  if(isCheckingAuth && !authUser){
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  return (
   <div className='flex flex-col items-center justify-center'>
    <Toaster />
    <Routes>
      <Route 
        path='/' 
        element={authUser ? <Home/> : <Navigate to={"/login"}/>} 
      />
      <Route 
        path='login' 
        element={!authUser ?   <Login/> : <Navigate to={'/'}/>} 
        />
      <Route 
        path='signup'  
        element={!authUser ?   <Signup/> : <Navigate to={'/'}/>} 
      />
    </Routes>
   </div>
  )
}

export default App























// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />
//   },
//   {
//     path: '/login',
//     element: <Login />
//   },
//   {
//     path: '/signup',
//     element: <Signup />
//   },
// ])


// function App() {

//   return (
//         <RouterProvider router={router}></RouterProvider>
//   )
// }

// export default App
