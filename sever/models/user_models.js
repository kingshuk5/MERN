const mongoose =require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
    },
    phone:{
        type: String,
        required:true,
    },
    password:{
        type: String,
        required:true,
    },
});


userSchema.pre("save", async function(){
    const user = this;
    if(!user.isModified("password")){
        next();
    }
    try {
        const saltValue = 10;
        const hash_password = await bcrypt.hash(user.password,saltValue);
        user.password = hash_password;
    } catch (error) {
        next(error);
    }
});



const user = new mongoose.model("user",userSchema);

module.exports = user;