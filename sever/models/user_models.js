const mongoose =require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

userSchema.methods.generateToken = async function(){
    // const user = this;
    try {
        return jwt.sign({
            userid: this._id.toString(),
            email: this.email,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "20d",
        });
        // const token = jwt.sign({_id:user._id},process.env.JWT_SECRET);
        // user.tokens = user.tokens.concat({token});
        // await user.save();
        // return token;
    } catch (error) {
        console.log(error);
    }
};



const user = new mongoose.model("user",userSchema);

module.exports = user;