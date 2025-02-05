const express= require("express");

const router =require("./routers/auth-router");

const app= express();

// app.get("/",(req,res)=>{
//     res.status(200).send("Welcome to my new Homepage");
// });

// app.get("/registration",(req,res)=>{
//     res.status(200).send("Welcome to Registration Page");
// });

app.use("/api/auth",router);

const PORT=5000;
app.listen(PORT,()=>{
    console.log(`The server is running at ${PORT}`);
});


