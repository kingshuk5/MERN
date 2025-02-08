require("dotenv").config();
const express= require("express");
const cors = require("cors");

const router =require("./routers/auth-router");

const app= express();
app.use(cors());


const connectDB=require("./utils/db");



// app.get("/",(req,res)=>{
//     res.status(200).send("Welcome to my new Homepage");
// });

// app.get("/registration",(req,res)=>{
//     res.status(200).send("Welcome to Registration Page");
// });
app.use(express.json())
app.use("/api/auth",router);

const PORT=5000;

connectDB().then(() => {
    app.listen(PORT,()=>{
        console.log(`The server is running at ${PORT}`);
    });
});

