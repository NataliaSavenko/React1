import mongoose from "mongoose";

const schema=new mongoose.Schema({

    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    comment: {type: String, required: true},
    rate: {type: Number}
})

const Comment=mongoose.model('Comment', schema)

export default Comment