const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./db/db");
const router = require("./routes/transactions");
const {readdirSync} = require("fs");

const app = express();
app.use(express.json());
app.use(cors());



//routes
readdirSync("./routes").map((route) => 
    app.use("/api/v1",require("./routes/" + route))
)

const PORT = process.env.PORT;

const server = () =>{
    db();
    app.listen(PORT , () =>{
        console.log(`Server running on Port ${PORT}`);
    })
}

server();