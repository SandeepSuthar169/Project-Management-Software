import mongoose, { Mongoose, Schema } from "mongoose";
import {
    TodoStatusEnum,
    AvailableTodoStatuses ,
    TodoPriority,
    AvailableTodoPriority
} from "../utils/constants.js"

const TodoSchema = new Schema(
    {
        todoName: {
            type: String,
            require: true
        },
        status: {
            type: String,
            enum: AvailableTodoStatuses,
            default: TodoStatusEnum.TODO
        },
        piority: {
            type: String,
            enum: AvailableTodoPriority,
            default: TodoPriority.HIGH
        },
        startDate: {
            type: Date,
            required: false
        },
        endDate: {
            type: Date,
            required: false
        },

        description: {
            type: String,
            require: true
        },
        estimatedHours: {
            type: Number,
        },
    },
    {
        timestamps: true
    }
)

export const Todo = mongoose.model("Todo", TodoSchema)