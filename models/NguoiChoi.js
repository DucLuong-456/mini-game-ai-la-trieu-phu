const mongoose = require('mongoose')

const nguoichoiSchema =  new mongoose.Schema({
    name: String,
    answer: String,
    people_answer_true: Number,
    question_id: String
})

module.exports = mongoose.model('nguoichoi',nguoichoiSchema)