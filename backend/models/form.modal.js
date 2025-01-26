import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
},
    {
        timestamps: true //createdAt, updatedAt
    }
);

const Form = mongoose.model('form', formSchema);
export default Form;
