const express= require('express');

const router = express.Router();

const {home, registration} =require("../controllers/auth-controller");

// application.get("/",(req,res)=>{
//     res.status(200).send("Welcome to my new homepage")
// });

// router.get("/",(req,res)=>{
//     res.status(200).send("Welcome to my  new Homepage");
// });

// router.get("/registration",(req,res)=>{
//     res.status(200).send("Welcome to my  new Registration page using router");
// });

router.route("/").get(home);
router.route("/registration").get(registration);


module.exports=router;
