import mongoose from "mongoose";
const {Schema} = mongoose

const cardSchema = new Schema({
    list: {
        type : Schema.Types.ObjectId,
        ref: 'List',
        require: true
    },
    title: {
        type: String,
        require: true,
        trim: true
    },
    description: {
        type: String,
        default: ''
    },
    position: {
        type: Number,
        require: true
    },
    members : [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    labels: [{
        name: String,
        color: String 
    }],
    dueDate: {
        type: Date,
        default: null
    },
    cover:{
        type: String, default : null 
    }


},{timestamps: true});

cardSchema.index({list : 1, position: 1});
cardSchema.index({'members' : 1 });

export default mongoose.model('Card', cardSchema);
