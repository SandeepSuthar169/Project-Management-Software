import mongoose from "mongoose";
import { User } from "../models/user.models.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";
import {
    TodoStatusEnum,
    AvailableTodoStatuses ,
    TodoPriority,
    AvailableTodoPriority
} from "../utils/constants.js"
import { Todo } from "../models/Todo.models.js";

const createTodo = asyncHandler(async (req, res) => {
    const {
        todoName,
        status,
        piority,
        startDate,
        endDate,
        description,
        estimatedHours
    } = req.body

    if(
        !todoName || 
        !status || 
        !piority || 
        !startDate || 
        !endDate || 
        !description || 
        !estimatedHours ) throw new ApiError(400, "todo detailes is required")

    const { userId } = req.params
    if(!userId) throw new ApiError(404, "userid is required")
    
    const user  = await User.findById(userId)

    const todo = await Todo.create({
        todoName,
        status,
        piority,
        startDate,
        endDate,
        description,
        estimatedHours,
        assignBy: user._id
    })
    if(!todo) throw new ApiError(404, "todo is required")

    return res.status(200).json(
        new ApiResponse(
            200, 
            todo,
            "todo created successfully"
        )
    )
})


const getTodo = asyncHandler(async (req, res) => {
    
})

const getAllTodo = asyncHandler(async (req, res) => {

})

const updateTodo = asyncHandler(async (req, res) => {

})


const deleteTodo = asyncHandler(async (req, res) => {

})


export {
    createTodo,
    getTodo,
    getAllTodo,
    updateTodo,
    deleteTodo
}