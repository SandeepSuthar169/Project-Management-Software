import { useEffect, useState } from "react";
import { Plus, Trash2, CheckCircle2, Circle } from "lucide-react";
import { z } from "zod";
import { useTodoStore } from "../store/useTodoStore.jsx";

// Simple validation schema
const todoSchema = z.string().min(1, "Todo cannot be empty").max(200, "Too long");

export default function SimpleTodoApp() {
  const { todos, loading, fetchTodos, addTodo, toggleTodo, deleteTodo } = useTodoStore();
  const [newTodo, setNewTodo] = useState("");
  const [error, setError] = useState("");

  // Load todos on mount
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  // Handle adding new todo
  const handleAddTodo = (e) => {
    e.preventDefault();
    setError("");

    // Validate input
    const result = todoSchema.safeParse(newTodo.trim());
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    // Add todo and clear input
    addTodo(newTodo.trim());
    setNewTodo("");
  };

  // Split todos into active and completed
  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-lg text-gray-400">Loading your todos...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">My Todos</h1>
          <p className="text-gray-400">Stay organized and productive</p>
        </div>

        {/* Add Todo Form */}
        <form onSubmit={handleAddTodo} className="mb-8">
          <div className="flex gap-2">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="What needs to be done?"
              className="flex-1 px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Add
            </button>
          </div>
          {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
        </form>

        {/* Stats */}
        <div className="mb-6 flex gap-4 text-sm text-gray-400">
          <span>{activeTodos.length} active</span>
          <span>•</span>
          <span>{completedTodos.length} completed</span>
          <span>•</span>
          <span>{todos.length} total</span>
        </div>

        {/* Active Todos */}
        {activeTodos.length > 0 && (
          <div className="mb-6">
            <h2 className="text-sm font-semibold text-gray-400 uppercase mb-3">
              Active Tasks
            </h2>
            <div className="space-y-2">
              {activeTodos.map((todo) => (
                <TodoItem
                  key={todo._id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))}
            </div>
          </div>
        )}

        {/* Completed Todos */}
        {completedTodos.length > 0 && (
          <div>
            <h2 className="text-sm font-semibold text-gray-400 uppercase mb-3">
              Completed
            </h2>
            <div className="space-y-2">
              {completedTodos.map((todo) => (
                <TodoItem
                  key={todo._id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {todos.length === 0 && (
          <div className="text-center py-12">
            <Circle className="w-16 h-16 text-gray-700 mx-auto mb-4" />
            <p className="text-gray-500">No todos yet. Add one to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
}

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="group flex items-center gap-3 px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors">
      {/* Checkbox */}
      <button
        onClick={() => onToggle(todo._id)}
        className="shrink-0 transition-transform hover:scale-110"
      >
        {todo.completed ? (
          <CheckCircle2 className="w-6 h-6 text-green-500" />
        ) : (
          <Circle className="w-6 h-6 text-gray-600 hover:text-gray-500" />
        )}
      </button>

      {/* Text */}
      <span
        className={`flex-1 text-base ${
          todo.completed
            ? "line-through text-gray-500"
            : "text-gray-200"
        }`}
      >
        {todo.text}
      </span>

      {/* Delete Button */}
      <button
        onClick={() => onDelete(todo._id)}
        className="opacity-0 group-hover:opacity-100 p-2 text-gray-500 hover:text-red-400 transition-all"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}