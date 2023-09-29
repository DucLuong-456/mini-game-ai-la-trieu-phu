const mongoose = require('mongoose')

const cauhoiSchema =  new mongoose.Schema({
    question: {
        type: String,
        default: "cau1"
    },
    answers: [],
    answer_true: String
})

module.exports = mongoose.model('cauhoi',cauhoiSchema)