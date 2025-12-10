import mongoose from "mongoose";
import { User } from "../models/user.models.js"; 
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";
import { ProjectDocs } from "../models/projectDocs.models.js";

const createProjectDocs = asyncHandler(async(req, res) => {
    const { content } = req.body

    if(!content) throw new ApiError(404, "content info is requreid")
    
    const { userId } = req.params
    if(!userId) throw new ApiError(404, "userid is required")

    const user  = await User.findById(userId)

    
    if(!user) throw new ApiError(404, "user is required")
        
    const projectDocs = await ProjectDocs.create({
        content,
        createdBy: user._id
    })

    if(!projectDocs) throw new ApiError(404, "failed to create projectDocs")

    return res.status(200).json(
        new ApiResponse(
            200, 
            projectDocs,
            "projectDocs created successfully"
        )
    )

})


const getProjectDocs = asyncHandler(async(req, res) => {

    const { projectDocsId } = req.params
    if(!projectDocsId) throw new ApiError(402, "projectDocs Id is required")
  

    const projectDocs = await ProjectDocs.findById(projectDocsId)

    
    if(!projectDocs) throw new ApiError(402, "projectDocs is required")

    return res.status(200).json(
        new ApiResponse(
            200,
            projectDocs,
            "projectDocs fetch successfully!"
                
        )
    )

})



const updateProjectDocs  = asyncHandler(async(req, res) => {

    const {
        content
    }  = req.body

    if(!content ) throw new ApiError(404, "update Board info is requreid")

    const { userId } = req.params
    if(!userId) throw new ApiError(404, "userid is required")

    const user  = await User.findById(userId)
    if(!user) throw new ApiError(404, "user is required")

    const { projectDocsId } = req.params
    if(!projectDocsId) throw new ApiError(402, "projectDocs Id is required")

    const existingBoard = await ProjectDocs.findById(projectDocsId)
    if(!existingBoard) throw new ApiError(402, "existingBoard is required")

    const projectDocs = await ProjectDocs.findByIdAndUpdate(
        projectDocsId,
        {
            content,
            createdBy : user._id,  
        },
        {
            new: true
        }
    )
    if(!projectDocs) throw new ApiError(402, "projectDocs is required")

    return res.status(200).json(new ApiResponse(
        200, 
        projectDocs, 
        "board update successfully"
    ))


})


const deleteProjectDocs  = asyncHandler(async(req, res) => {

    const { projectDocsId } = req.params
    if(!projectDocsId) throw new ApiError(402, "projectDocs Id is required")

    const deleteProjectDocs = await ProjectDocs.findByIdAndDelete(projectDocsId)
    if(!deleteProjectDocs) throw new ApiError(402, "deleteProjectDocs is required")

    return res.status(200).json(new ApiResponse(
        200, 
        deleteProjectDocs, 
        "delete board successfully"
    ))

})


export {
    createProjectDocs,
    getProjectDocs,
    updateProjectDocs,
    deleteProjectDocs,
}