import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    subject: {type: String,
        required: true,
        trim: true
    },
    question: String,
    options: [{
        type: String,
        required: true
    }],
    answer:{
        type: Number,
        required: true
    }
});

const Question =  mongoose.model('Question', questionSchema);
export default Question;