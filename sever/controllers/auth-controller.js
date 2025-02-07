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
        res.status(200)
        // .send("Welcome to my registration page using controllers");
        .json({msg:req.body});
        console.log(req.body)

    } catch (error){
        console.log(error);
    }
}


module.exports ={home ,registration};