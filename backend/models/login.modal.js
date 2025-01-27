import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const LoginForm = mongoose.model('users', loginSchema);
export default LoginForm;
