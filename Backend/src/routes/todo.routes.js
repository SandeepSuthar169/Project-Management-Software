import { Router } from "express";
import {   
    createTodo,
    getTodo,
    getAllTodo,
    updateTodo,
    deleteTodo
} from "../controllers/todo.controllers.js"

const router = Router()

router.route("/createTodo/:userId").post(createTodo)

export default router