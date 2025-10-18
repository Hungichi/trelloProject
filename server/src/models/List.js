import mongoose from "mongoose"
const {Schema} = mongoose;

const listSchema = new Schema({
    board:{
        type: Schema.Types.ObjectId,
        reff: 'Board ',
        require: true
    },
    title : {
        type: String,
        trim: true,
        require: true
    },
    position: {
        type: Number,
        require: true
    }
},{timestamps: true}
);

listSchema.index({board: 1 , position: 1})

export default mongoose.model('List', listSchema);