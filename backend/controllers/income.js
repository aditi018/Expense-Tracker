const IncomeSchema = require("../models/incomeModel");



exports.addIncome = async(req,res) => {
    const {title,amount,category,description,date} = req.body;

    const income = IncomeSchema({
        title,
        amount,
        
        category,
        description,date
    })

    try{
        if(!title || !category || !description || !date || !amount){
            return res.statue(400).json({message:"All fields are required"});
        }
        if(amount<=0 || !amount == 'Number' ){
            return res.status(400).json({
                message : "amount must be a positive number"
            })
        }

        await income.save();
        res.status(200).json({message:"income Added"});

    }catch(err){
        res.status(500).json({message : "Server Error"});
    }
}


exports.getIncomes = async(req,res) => {
    try{
        const incomes = await IncomeSchema.find().sort({createdAt : -1});
        res.status(200).json(incomes);
    }catch(err){
        res.status(500).json({message : "Server Error"});
    }
}

exports.deleteIncome = async(req,res) => {
    const {id} = req.params;
    try{
        const income = await IncomeSchema.findByIdAndDelete(id);
        res.status(200).json({message : "Income deleted"});
    }catch(err){
        res.status(500).json({message : "Server Error"});
    }
}