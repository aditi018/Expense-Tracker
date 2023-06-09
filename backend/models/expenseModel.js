const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        maxLength : 50,
    },
    amount : {
        type:Number,
        required:true,
        trim:true,
    },
    type:{
        type:String,
        deafult: "Expense",
    },
    description:{
        type:String,
        required:true,
        trim:true,
        maxlength:50,
    },
    date:{
        type:String,
        required:true,
        trim:true,
    },
    category:{
        type:String,
        required:true,
        trim:true,
        maxLength:20,
    }
},{timestamps:true});

module.exports = mongoose.model("Expense",ExpenseSchema);