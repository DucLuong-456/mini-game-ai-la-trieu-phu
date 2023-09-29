const mongoose = require('mongoose')

//v6 mongodb default options on connect
const connectDB = (url)=>{
    mongoose
        .connect(url)
        .then(()=> console.log('Connect to DB success..'))
        .catch((err)=>{console.log('connect fail')})
}

module.exports = connectDB
        