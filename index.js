
const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://cdoggo:@boilerplate.no86a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true, useFindAndModify: false }). then(()=> console.log('MongoDB Connected'))
    .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('so annoying')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
