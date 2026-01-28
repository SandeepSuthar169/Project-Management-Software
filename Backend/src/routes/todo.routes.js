import express from "express";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../controller/todo.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js"

const router = express.Router();

router.post("/create", verifyJWT, createTodo);
router.get("/fetch", verifyJWT, getTodos);
router.put("/update/:id", verifyJWT, updateTodo);
router.delete("/delete/:id", verifyJWT, deleteTodo);

export default router;