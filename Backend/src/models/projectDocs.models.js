import mongoose, {Schema} from "mongoose";

const ProjectDocsSchema = new Schema(
    {
        content: {
            type: String,
            required: true,
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        
    },
    {timestamps: true}
)

export const ProjectDocs = mongoose.model("ProjectDocs", ProjectDocsSchema)

