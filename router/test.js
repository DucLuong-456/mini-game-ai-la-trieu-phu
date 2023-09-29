const router = require('express').Router()
const {getQuestion,handleGame} = require('../controller/test')

router.route('/test')
    .get(getQuestion)  
    .post(handleGame)
module.exports = router