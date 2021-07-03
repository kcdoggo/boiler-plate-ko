/*몽구스 모듈가져오기*/
const mongoose = require('mongoose');

/*몽구스 이용해 스키마 작성*/
const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlenth:50
    },
    email:{
        type:String,
        trim:true, /*이메일 공백 없앰*/
        unique:1 /*이메일 중복없게*/
    }, 
    lastname: {
        type:String,
        maxlenth: 50
    },
    role:{
        /*유저가 관리자, 일반유저있을수있음*/
        type: Number,
        default : 0 /*넘버 임의로 안주면0,
        넘버가 0이면 일반유저*/
    },
    image:String, /*그 사람에 대한 이미지*/
    token:{/*유효성 관리*/
        type:String
    },
    tokenExp:{/*토큰 유효기간*/
        type:Number
    }
})

/*저 위의 스키마를 모델로 감싸줌.'모델이름','스키마이름'*/
const User = mongoose.model('User',userSchema)

/*모듈 다른 곳에서도 쓸 수 있게 export */
module.exports ={User}