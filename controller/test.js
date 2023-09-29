const User = require('../models/NguoiChoi')
const Question = require('../models/CauHoi')

let index =0;
const getQuestion = async(req,res)=>{
    
     const questions = await Question.find({})
     if(index < questions.length){
        //console.log(questions.length)
        // console.log(questions[index])
         res.render('pages/trochoi',{question: questions[index]});
         index++;
         //console.log(index)
     }
     else
     {
         index=0;
         res.render('pages/trochoi',{question: questions[index]});
     }
    
}

//neu >= 5 nguoi tra loi, thi dua ra nguoi tra loi dung va du doan dung
const handleGame = async(req,res)=>{
    try {
        console.log(req.body)
        const newUser = await User.create(req.body);
        //res.json(task)
        const users = await User.find({})
        if(users.length >= 5){
            const answer_true = await Question.findOne({_id: req.body.question_id}).select('answer_true')
            console.log(answer_true)
            // tim so nguoi tra loi dung cau 1
            const dsNguoiChoi = await User.find({question: req.body.question_id, answer: answer_true.answer_true})
            // //duyet nguoi tra loi cau 1, neu tra loi dung question va so nguoi tra loi dung => dua ra
            const nguoi_tra_loi_dung = await User.findOne({question: req.body.question_id, answer: answer_true.answer_true, people_answer_true: {$eq: dsNguoiChoi.length} })
            // //sau 10 phut dua ra dap an
            if(nguoi_tra_loi_dung)
                res.render('pages/winner',{msg: `Người trả lời đúng: ${nguoi_tra_loi_dung.name}`});
            else
                res.render('pages/winner',{msg: "khong co nguoi choi chien thang"}) 
        }
        else
        res.render('pages/trochoi');
         
    } catch (error) {
        res.status(500).json({msg: error})
        
    }

}


module.exports = {getQuestion,handleGame}