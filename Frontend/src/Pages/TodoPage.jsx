import { useEffect, useState } from "react";
import { DndContext, DragOverlay, closestCorners, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ChevronDown, ChevronRight, Plus, MoreHorizontal, Circle, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { useTodoStore } from "../store/useTodoStore";

const todoSchema = z.object({
  text: z.string().min(1, "Todo text is required"),
  completed: z.boolean().optional(),
  status: z.string().optional(),
  projectId: z.string().optional(),
});

// Sortable Task Item Component
function SortableTask({ task, onToggle, onDelete, onStatusChange }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task._id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="group flex items-center gap-3 px-4 py-2 hover:bg-gray-800/50 cursor-move rounded border-b border-gray-800"
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggle(task._id, !task.completed);
        }}
        className="shrink-0"
      >
        {task.completed ? (
          <CheckCircle2 className="w-5 h-5 text-blue-500" />
        ) : (
          <Circle className="w-5 h-5 text-gray-500" />
        )}
      </button>

      <span
        className={`flex-1 text-sm ${
          task.completed ? "line-through text-gray-500" : "text-gray-200"
        }`}
      >
        {task.text}
      </span>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(task._id);
        }}
        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-400 transition-opacity"
      >
        <MoreHorizontal className="w-4 h-4" />
      </button>
    </div>
  );
}

function ProjectGroup({ project, tasks, onAddTask, onToggle, onDelete, onStatusChange, isCollapsed, onToggleCollapse }) {
  const statusGroups = {
    "IN PROGRESS": tasks.filter(t => t.status === "IN PROGRESS"),
    "TO DO": tasks.filter(t => t.status === "TO DO"),
  };

  return (
    <div className="mb-6 bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
        <button onClick={onToggleCollapse} className="text-gray-400 hover:text-gray-200">
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        <span className="text-sm font-semibold text-gray-200">{project.name}</span>
        <button className="ml-auto text-gray-500 hover:text-gray-300">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      {!isCollapsed && (
        <div className="p-2">
          {Object.entries(statusGroups).map(([status, statusTasks]) => (
            <StatusGroup
              key={status}
              status={status}
              tasks={statusTasks}
              projectId={project._id}
              onAddTask={onAddTask}
              onToggle={onToggle}
              onDelete={onDelete}
              onStatusChange={onStatusChange}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function StatusGroup({ status, tasks, projectId, onAddTask, onToggle, onDelete, onStatusChange }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [newTaskText, setNewTaskText] = useState("");

  const handleAddTask = () => {
    if (newTaskText.trim()) {
      onAddTask({ text: newTaskText, status, projectId, completed: false });
      setNewTaskText("");
      setIsAdding(false);
    }
  };

  const statusColor = status === "IN PROGRESS" ? "bg-blue-600" : "bg-gray-600";
  const statusIcon = status === "IN PROGRESS" ? "●" : "○";

  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 px-2 py-2 mb-1">
        <button onClick={() => setIsCollapsed(!isCollapsed)} className="text-gray-400 hover:text-gray-200">
          {isCollapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </button>
        <div className={`w-2 h-2 rounded-full ${statusColor}`}></div>
        <span className="text-xs font-semibold text-gray-300 uppercase">{status}</span>
        <span className="text-xs text-gray-500">{tasks.length}</span>
      </div>

      {!isCollapsed && (
        <div className="ml-4">
          <SortableContext items={tasks.map(t => t._id)} strategy={verticalListSortingStrategy}>
            {tasks.map((task) => (
              <SortableTask
                key={task._id}
                task={task}
                onToggle={onToggle}
                onDelete={onDelete}
                onStatusChange={onStatusChange}
              />
            ))}
          </SortableContext>

          {isAdding ? (
            <div className="flex items-center gap-2 px-4 py-2 mt-1">
              <Circle className="w-5 h-5 text-gray-600" />
              <input
                autoFocus
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleAddTask()}
                onBlur={() => {
                  if (!newTaskText.trim()) setIsAdding(false);
                }}
                placeholder="Task name"
                className="flex-1 bg-transparent text-sm text-gray-200 outline-none placeholder-gray-600"
              />
            </div>
          ) : (
            <button
              onClick={() => setIsAdding(true)}
              className="flex items-center gap-2 px-4 py-2 mt-1 text-gray-500 hover:text-gray-300 text-sm w-full"
            >
              <Plus className="w-4 h-4" />
              <span>Add Task</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default function TodoApp() {
  const { todos, getTodos, createTodo, updateTodo, deleteTodo, loading } = useTodoStore();
  const [activeId, setActiveId] = useState(null);
  const [collapsedProjects, setCollapsedProjects] = useState({});

  const [projects, setProjects] = useState([
    { _id: "project1", name: "Project 2" },
    { _id: "project2", name: "Get Started with ClickUp" },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  useEffect(() => {
    getTodos();
  }, []);

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    
    if (!over) return;

    if (active.id !== over.id) {
      const activeTask = todos.find(t => t._id === active.id);
      const overTask = todos.find(t => t._id === over.id);

      if (activeTask && overTask) {
        if (activeTask.status !== overTask.status) {
          updateTodo(active.id, { status: overTask.status });
        }
      }
    }

    setActiveId(null);
  };

  const handleAddTask = async (data) => {
    const parsed = todoSchema.safeParse(data);
    if (!parsed.success) {
      alert(parsed.error.issues[0].message);
      return;
    }
    await createTodo(data);
  };

  const handleToggleTask = (id, completed) => {
    updateTodo(id, { completed });
  };

  const handleDeleteTask = (id) => {
    deleteTodo(id);
  };

  const handleStatusChange = (id, status) => {
    updateTodo(id, { status });
  };

  const toggleProjectCollapse = (projectId) => {
    setCollapsedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const getProjectTasks = (projectId) => {
    return todos.filter(todo => (todo.projectId || "project1") === projectId);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-gray-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-sm font-semibold text-gray-500 mb-4">Team Space</h1>
        </div>

        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          {projects.map((project) => (
            <ProjectGroup
              key={project._id}
              project={project}
              tasks={getProjectTasks(project._id)}
              onAddTask={handleAddTask}
              onToggle={handleToggleTask}
              onDelete={handleDeleteTask}
              onStatusChange={handleStatusChange}
              isCollapsed={collapsedProjects[project._id]}
              onToggleCollapse={() => toggleProjectCollapse(project._id)}
            />
          ))}

          <DragOverlay>
            {activeId ? (
              <div className="bg-gray-800 px-4 py-2 rounded shadow-lg border border-gray-700">
                <span className="text-sm text-gray-200">
                  {todos.find(t => t._id === activeId)?.text}
                </span>
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>
    </div>
  );
}