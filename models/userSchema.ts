import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});


export const User =  mongoose.models.User || mongoose.model("User", userSchema) 
// If the model is already created, use that model, else create a new model 