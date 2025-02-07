const user = require("../models/user_models");


const home =async(req,res)=>{
    try{
        res.status(200)
        .send("Welcome to my home page using controllers");
    } catch (error){
        console.log(error);
    }
}
const registration =async(req,res)=>{
    try{
        const {username,email,phone,password}=req.body;
        const userExists =await user.findOne({email:email});
        if(userExists){
            return res.status(400).json({error:"Email already exists"});
        }else{
            user.create({username,email,phone,password});
            res.status(200).json({msg:"User registered successfully"});
        }


        // res.status(200)
        // .send("Welcome to my registration page using controllers");
        // .json({msg:req.body});
        // console.log(req.body)

    } catch (error){
        console.log(error);
    }
}


module.exports ={home ,registration};