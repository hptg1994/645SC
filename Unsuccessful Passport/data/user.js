const mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    username : String,
    password : String,
    NickName : String,
    Question : [String],
    Answer : [String],
    Comment : [String]
})

module.exports = mongoose.model('User',UserSchema);