import { useEffect, useState } from "react";
import { useTaskStore } from "../store/useTaskStore.js"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Plus } from "lucide-react";

export const createTaskSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(5, "Description must be at least 5 characters"),
  status: z.enum(["TODO", "IN_PROGRESS", "DONE"], {
    errorMap: () => ({ message: "Status is required" }),
  }),
});


export default function TasksPage() {
  const { 
    createTasks, 
    loading, 
    tasks, 
    getTasks, 
    updateTaks, 
    deleteTasks 
  } = useTaskStore();
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [state, setState] = useState("TODO")
  const [error, setError] = useState("");

  useEffect(() => {
    getTasks();
  }, [getTasks])

  const handleAddTasks = (e) => {
    e.preventDefault();
    setError("")

    const formData = {
      title,
      description,
      state
    }

    const result = createTaskSchema.safeDecode(formData)
    if(!result.success){
      setError(result.error.errors[0].message)
      return
    }

    createTasks(result.data)
    title("")
    description("")
    state("TODO")
  }

  const activeTasks = tasks.filter((tasks) => !tasks.completed)
  const compleTedTasks = tasks.filter((tasks) => tasks.completed)

  if(loading){
    return (
      <div>
        <div>Loading your tasks...</div>
      </div>
    )
  }


  return (
    <div>
      <div>
        <div>
          <h1>My Tasks</h1>
          <p>Stay organized and productive </p>
        </div>

        <form onSubmit={handleAddTasks}>
          <div>
            <div>
              <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="What needs to be task done?"
              />
            </div>

            <div>
              <input 
                type="text" 
                value={description}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="What needs to be task done?"
              />
            </div>
            <button>
              <Plus />
              Add
            </button>
          </div>
          {error && <p>{error}</p>}
        </form>

        <div>
          <span>{activeTasks.length} active</span>
          <span>•</span>
          <span>{compleTedTasks.length} completed</span>
          <span>•</span>
          <span>{tasks.length} total</span>
        </div>
      </div>
    </div>
  )
  
}