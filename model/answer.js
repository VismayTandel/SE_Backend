const mongoose = require("mongoose")

const AnswerSchema = new mongoose.Schema({
    id:{type:Number},
    Author:{type:String},
    Comment:{type:String}
});

module.exports = mongoose.model("Answer", AnswerSchema);
