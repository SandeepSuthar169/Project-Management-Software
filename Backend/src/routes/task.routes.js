import { Router } from "express";
import { 
    createTask ,
    getAllTasks,
    getTasksById,
    updateTask,
    createSubTask,
    getSubTask,
    updateSubTask,
    deleteSubTask,
    deleteTask
} from "../controllers/task.controllers.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
// import { upload } from "../middlewares/multer.middleware.js"

const router = Router()

// ================= Task ===================
router.route("/createTask").post(createTask)  // 1
router.route("/getTasksById/:taskId").get(verifyJWT,getTasksById)  // 4
router.route("/updateTask/:taskId").post(verifyJWT,updateTask)  // 2
router.route("/deleteTask/:taskId").delete(verifyJWT, deleteTask)  // 3

router.route("/getAllTask/:projectId").get(getAllTasks)


// ================= SubTask ===================
router.route("/createSubTask/:userId/:taskId").post(createSubTask)
router.route("/createSubTask/:taskId").get(getSubTask)
router.route("/updateSubTask/:subTaskId").post(updateSubTask)
router.route("/deleteSubTask/:subTaskId").delete(deleteSubTask)

export default router