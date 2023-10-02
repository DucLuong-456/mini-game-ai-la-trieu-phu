const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const router = require('./router/test')
const bodyParser = require('body-parser')
//const cron = require('node-cron');
const cors = require('cors')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())
app.use('/',router)
app.set('view engine', 'ejs');

// var task =cron.schedule('*/1 * * * *', async() => {
//     // Gửi yêu cầu HTTP đến endpoint mong muốn
//     await axios.get('/test')
//       .then(response => {
//         // Xử lý phản hồi thành công
//         console.log('Yêu cầu đã được gửi thành công');
//       })
//       .catch(error => {
//         // Xử lý lỗi
//         console.error('Lỗi khi gửi yêu cầu:', error);
//       });
//   });
// task.start()
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
