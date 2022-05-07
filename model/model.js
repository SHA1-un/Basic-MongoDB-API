const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    question: {
        required: true,
        type: String
    },
    answer: {
        required: true,
        type: String
    }
}); // Here, we define the structure of the model. aka the schema

module.exports = mongoose.model('Data', dataSchema); // Here, we simply export the schema