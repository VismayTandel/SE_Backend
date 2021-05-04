const express = require('express')
const mongoose = require('mongoose')
const Answer = require('./model/answer.js')
const Question = require('./model/question.js')
const Project = require('./model/project.js')

const app = express();
const db = "mongodb+srv://Vismay:nlsES0uop6G2zJ4H@cluster0.w3tty.mongodb.net/SE?retryWrites=true&w=majority";
mongoose.connect(db , {useNewUrlParser:true,useUnifiedTopology:true})
    .then((result)=> console.log('Connected to database'))
    .catch((err)=>console.log(err));

app.listen(3000);

app.post('/AddQuestion',(req,res)=>{
    const que =  new Question();
    que.id = req.body.id;
    que.Title = req.body.Title;
    que.Que = req.body.Que;
    que.Author = req.body.Author;
    que.status = req.body.status;
    que.save()
        .then((result) => {res.send(result)})
        .catch((err) => {console.log(err)});
})

app.post('/AddAnswer',(req,res)=>{
    const ans =  new Answer();
    ans.id = req.body.id;
    ans.Author = req.body.Author;
    ans.Comment = req.body.Comment;
    ans.save()
        .then((result) => {res.send(result)})
        .catch((err) => {console.log(err)});
})

app.post('/AddProject',(req,res)=>{
    const pro =  new Project();
    pro.id = req.body.id;
    pro.Author = req.body.Author;
    pro.Title = req.body.Title;
    pro.Description = req.body.Description;

    pro.save()
        .then((result) => {res.send(result)})
        .catch((err) => {console.log(err)});
})

app.get('/GetQuestion',(req,res)=>{
    Question.find()
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
})

app.get('/GetAnswer',(req,res)=>{
    Answer.find()
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
})

app.get('/GetProject',(req,res)=>{
    Project.find()
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
})
