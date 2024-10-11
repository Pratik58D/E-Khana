import mongoose from "mongoose";

// Define the schema for the user
const userSchema = new mongoose.Schema({
    name: {
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
        required: true
    },
    // Store cart data as an object, defaulting to an empty object
    cartData: { type: Object, default: {} }
}, 
{
    // Ensure empty objects are saved (e.g., empty cartData)
    minimize: false 
});

// Use an existing user model if it exists, or create a new one
const userModel = mongoose.models.user || mongoose.model("user", userSchema);

// Export the model for use in other files
export default userModel;
