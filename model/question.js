const mongoose = require("mongoose")

const QuestionSchema = new mongoose.Schema({
    id:{type:Number},
    Title:{tyep:String},
    Que:{type:String},
    Author:{type:String},
    status:{type:String},
    Likes:{type:Number,default:0},
    dislikes:{type:Number,default:0},
    share:{type:Number,default:0},
    Topic:{type:String,default:'None'}
});

module.exports = mongoose.model("Question", QuestionSchema);