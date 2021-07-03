
const express = require('express')
const app = express()
const port = 5000

const bodyParser = require('body-parser');
const config = require('./config/key');

const {User} = require("./models/User");

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());


const mongoose = require('mongoose');
const { json } = require('body-parser');
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true, useFindAndModify: false }). then(()=> console.log('MongoDB Connected'))
    .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('so annoying')
})

app.post('/register',(req,res)=>{


    const user = new User(req.body);

    user.save((err,userInfo)=>{ //에러있다면 성공하지 못했다고 전달
        if(err) return res.json({success:false, err})
        return res.status(200).json({ //성공했다면 json 형식으로
            success:true
        })
    })

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})