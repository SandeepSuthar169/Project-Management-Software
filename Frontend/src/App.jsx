import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Loader } from "lucide-react"
import { Toaster } from 'react-hot-toast'
import Home from './Pages/Home.jsx'
import Login from "./Auth/Login.jsx"
import Signup from './Auth/Signup.jsx'
import { useAuthStore } from './store/useAuthStore.js'
import Layout from './layout/Layout.jsx'
import TodoApp from './store/useTodoStore.js'

function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])
  
  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    )
  }

  return (
    <>
      <Toaster />
      <Routes>
        {/* Protected Routes - require auth */}
        <Route path='/' element={authUser ? <Layout /> : <Navigate to="/login" />}>
          <Route index element={<Home />} />
           <Route path='todos' element={<TodoApp/>}/>
        </Route>
        
        {/* Public Routes - only accessible if NOT authenticated */}
        <Route 
          path='login' 
          element={!authUser ? <Login /> : <Navigate to='/' />} 
        />
        <Route 
          path='signup' 
          element={!authUser ? <Signup /> : <Navigate to='/' />} 
        />
       
      </Routes>
    </>
  )
}

export default App