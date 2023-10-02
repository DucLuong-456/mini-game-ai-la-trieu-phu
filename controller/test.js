const User = require('../models/NguoiChoi')
const Question = require('../models/CauHoi')


const getgiaodien = async(req,res)=>{
    res.render('pages/trochoi')
}
// let index =0;
// const getQuestion = async(req,res)=>{
    
//      const questions = await Question.find({})
//      if(index < questions.length){
//          res.json({question: questions[index],status: false});
//          index++;
//      }
//      else
//      {
//         return  res.json({question: "Trò chơi kết thúc!", status: true});
//      }
    
// }

const getQuestion = async(req,res)=>{
    
     const questions = await Question.find({})
        res.json({questions,status: false});
         
    //return  res.json({question: "Trò chơi kết thúc!", status: true});
     
    
}

//neu >= 5 nguoi tra loi, thi dua ra nguoi tra loi dung va du doan dung
const createUser = async(req,res)=>{
    try {
        console.log(req.body)
        const newUser = await User.create(req.body);
        res.redirect('/abc')
         
    } catch (error) {
        res.status(500).json({msg: error})
        
    }
}

 const handleGame = async(req,res)=>{
        const answer_true = await Question.findOne({_id: req.params.id}).select('answer_true')
            
            // tim so nguoi tra loi dung cau 1(minh dang luu la id)
            const dsNguoiChoi = await User.find({ answer: answer_true.answer_true})
            //console.log(dsNguoiChoi)
            // //duyet nguoi tra loi cau 1, neu tra loi dung question va so nguoi tra loi dung => dua ra
            const nguoi_tra_loi_dung = await User.findOne({answer: answer_true.answer_true, people_answer_true: {$eq: dsNguoiChoi.length} })
            // //sau 1 phut dua ra dap an
            if(nguoi_tra_loi_dung)
                res.json({msg: `Người trả lời đúng và dự đoán chính xác số người đúng: ${nguoi_tra_loi_dung.name}`})
            else
                res.json({msg: "Không có người chiến thắng!"}) 
    
    }




module.exports = {getQuestion,createUser,handleGame,getgiaodien}