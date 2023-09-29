const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const router = require('./router/test')
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.json())
app.use('/',router)
app.set('view engine', 'ejs');



const PORT = 3000
const start = async()=>{
    try {
        const URI="mongodb+srv://ducluong1032002:1234@cluster0.s7xq57e.mongodb.net/trochoidovui?retryWrites=true&w=majority"
        await connectDB(URI)
        app.listen(PORT,()=>{console.log('server is listening on port '+ PORT)})
    } catch (error) {
        console.log(error)
    }
}

start();
