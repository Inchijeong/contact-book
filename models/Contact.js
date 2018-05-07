var mongoose = require("mongoose");

// DB schema 생성
var contactSchema = mongoose.Schema({
    name:{type:String, required:true, unique:true},
    email:{type:String},
    phone:{type:String}
});
// model 생성
var Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;