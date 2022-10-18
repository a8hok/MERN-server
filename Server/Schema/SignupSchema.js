import mongoose from "mongoose";

const NewStudents = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    userimage: {
        data: Buffer,
        contentType: String
    }
})

export const NewStudentDetails = mongoose.model("newuser-acadamy",NewStudents)