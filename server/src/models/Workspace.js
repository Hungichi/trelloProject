import mongoose from "mongoose";

const workspaceMemberSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    role:{
        type: String,
        enum: ['owner', 'member', 'admin', 'viewer'],
        default: 'member',
    },
    joinedAt: {
        type: Date,
        default: Date.now,
    },
    
},{_id: false})

const workspaceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        default: '',
        trim: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    members: {
        type:[workspaceMemberSchema],
        default: []
    },
    visibility: {
        type: String,
        enum: ["private", "public"],
        default: "private",
    },
}, {timestamps: true});

workspaceSchema.index({ name: 'text' });
workspaceSchema.index({ owner: 1 });
workspaceSchema.index({ 'members.user': 1 });

export default mongoose.model("Workspace", workspaceSchema);