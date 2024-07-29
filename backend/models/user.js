import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    mobNo: {
        type: String,
        required: true,
        unique: true,
        maxLength: 10,
        minLength: 10
    },
    gender:{
        type:String,
        required:true,
        enum: ["male","female"]
    },
    profilePic:{
        type:String,
        default:""
    }
}, {timestamps: true});

const User = mongoose.model("User", userSchema)
export default User;  //exporting the model to be used in other files.