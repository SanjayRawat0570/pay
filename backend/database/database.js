const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://sanjayrawat0570:7Sxaoj2LRCWDZyNO@cluster0.gxm0w.mongodb.net/pay")

const userSchema = mongoose.Schema({
    username : String,
    password : string ,
    firstname : String,
    lastname : String,
}) 

const User = mongoose.model('User', userSchema);
MediaSourceHandle.exports = {
    User
}
