import mongoose from "mongoose";


const boardMemberSchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    role: {
        type: String,
        enum : ['admin', 'member', 'viewer', 'owner'],
        default: 'member'
    }
}, {_id: false});

const boardSchema = new mongoose.Schema({
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        require: true        
    },
    workspace: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Workspace',
        require: true
    },
    title : {
        type : String,
        require : true,
        trim: true
    },
    members: {
        type: [boardMemberSchema],
        default : []
    },
    visibility: {
        type: String,
        enum: ["private", 'public']
    },
    background: {
        type: String,
        default : null
    }
    
},{timestamps : true})

boardSchema.index({workspace: 1 });
boardSchema.index({'members.user': 1 });

export default mongoose.model('Board', boardSchema)