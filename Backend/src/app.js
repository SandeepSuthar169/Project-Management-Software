import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(cors({
    origin: process.env.BASE_URL,
    credentials: "include",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}))
app.use(express.json({limit: "50kb"}))
app.use(cookieParser())
app.use(express.static("public"))
app.use(express.urlencoded(
    {
        extended: true,
        limit: "50kb"
    }
))


// router impots

import authRoute from "./routes/auth.routes.js"
import healthCheckRouter from "./routes/helthcheck.routes.js"
import projectRoute from "./routes/project.routes.js"
import noteRoute from "./routes/note.routes.js"
import taskRoute from "./routes/task.routes.js"
import subTaskRoute from "./routes/task.routes.js"
import boardRoute from "./routes/board.routes.js"
import todoRoute from "./routes/todo.routes.js"
import projectDocsRoute from "./routes/projectDocs.routes.js"


app.use("/api/v1/auth", authRoute)
app.use("/api/v1/healthcheck", healthCheckRouter)
app.use("/api/v1/project", projectRoute)
app.use("/api/v1/note", noteRoute)
app.use("/api/v1/task", taskRoute)
app.use("/api/v1/subTask", subTaskRoute)
app.use("/api/v1/board", boardRoute)
app.use("/api/v1/todo", todoRoute)
app.use("/api/v1/projectDocs", projectDocsRoute)


export default app;
