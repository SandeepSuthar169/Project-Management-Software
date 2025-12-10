import { Router } from "express";
import { 
    createProjectDocs,
    getProjectDocs,
    updateProjectDocs,
    deleteProjectDocs ,

} from "../controllers/projectDocs.controllers.js"


const router = Router()

router.route("/createProjectDocs/:userId").post(createProjectDocs)
router.route("/getProjectDocs/:projectDocsId").get(getProjectDocs)
router.route("/updateProjectDocs/:projectDocsId/:userId").post(updateProjectDocs)
router.route("/deleteProjectDocs/:projectDocsId").delete(deleteProjectDocs)



export default router
