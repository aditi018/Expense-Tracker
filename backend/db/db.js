const mongoose = require("mongoose");
require("dotenv").config();

const db = async() => {
    try{
        mongoose.set('strictQuery',false);
        await mongoose.connect(process.env.MONGO_URL);
    }catch(err){
        console.log("Connection error",err);
    }

    console.log("Connected to the database...");
}

module.exports = db;