import { Router } from "express";
import { 
    createBoard,
    getBoard,
    getAllBoard,
    updateBoard,
    deleteBoard,

} from "../controllers/boards.controllers.js"
const router = Router()

router.route("/createBoard/:userId").post(createBoard)
router.route("/getBoard/:boardId").post(getBoard)


export default router
