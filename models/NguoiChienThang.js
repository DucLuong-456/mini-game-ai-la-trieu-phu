const mongoose = require('mongoose')

const NguoiChienThangSchema =  new mongoose.Schema({
    name: String,
    answer: String,
    people_answer_true: Number,
    question_id: String,
    phien: String
})

module.exports = mongoose.model('winners',NguoiChienThangSchema)