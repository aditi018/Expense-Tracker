const ExpenseSchema = require("../models/expenseModel");

exports.addExpense = async(req,res) => {

    const {title,amount,category,description,date} = req.body;
    const expense = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    });

    try{
        if(!title || !category || !date || !amount || !description){
            res.status(400).json({message: "All fields are required"});
        }
        if(amount<=0 || !amount == 'Number'){
            res.status(400).json({message : "Amount must be a positive number"});
        }

        await expense.save();
        res.status(200).json({message : "Expense added"});
    }catch(err){
        res.status(500).json({message : "Server Error"})
        console.log(err);
    }
}

exports.getExpense = async(req,res) => {
    try{
        const expense = await ExpenseSchema.find().sort({createdAt : -1});
        res.status(200).json(expense);
    }catch(err){
        res.status(500).json({message : "Server Error"});
    }
}

exports.deleteExpense = async(req,res) => {
    const {id} = req.params;
    try{
        const expense = await ExpenseSchema.findByIdAndDelete(id);
        res.status(200).json({message : "Expense deleted successfully"});
    }catch(err){
        res.status(500).json({message : "Server Error"});
    }
}