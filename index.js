const express=require("express");
const mongoose=require("mongoose");
const User=require("./model/users");
const jwt = require("jsonwebtoken")
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
console.log(User)
function isLogin(req, res, next){
    let token=req.headers.authorization
    console.log(token);
    if(!token){
        return res.json({
            success:false,
            message:"please login"
        })
    }
    let decode=jwt.verify(token,"okkkkk")
    console.log(decode)
    if(!decode)({
        success:false,
        message:"invaid token"
    })
}next()
}

app.get("/health", (req, res)=>{
    res.json({
        status:"Okay",
        message:"Server is running okay"
    })
})
app.get("/home",isLogin,(req,res)=>{
    let username;
    res.json({
        success:true,
        message:"welcome"+username
    })
})
app.post("/api/users/signUp",async(req, res)=>{
   try{
     let{name, email, password}=req.body;
    let userExist= await User.findOne({email:email});
    if(userExist){
        return res.json({
            success:false,
            message:"User already exist"
        })
    }
    let newUser=new User({
        name:name,
        email:email,
        password:password,
    });

    await newUser.save();
   return res.json({
    success:true,
    message:"User registered successfully, please login to continue "
   }) 
   }catch (error){
    console.log(error.message);
    res.json({
        error:{
            message:error.message
        }
    })
   }
})


app.post("/api/auth/login", async(req, res)=>{
    try{
        let{email,password}=req.body;
    let userExist=await User.findOne({email:email});
    if(!userExist){
        return res.json({
            success:false,
            message:"You are not registered. Please signup"
        })
    }
    if(password!==userExist.password){
        return res.json({
            success:false,
            message:"Invalid password"
        })
    }
    let token = jwt.sign({"user":userExist},"okkkkk");
    return res.json({
        sucess:true,
        message:"Login successfully",
        token:token
    })
    }catch (error){
        console.log(error.message)
        res.json({
            message:error.message
        })
    }
})




mongoose.connect('mongodb://127.0.0.1:27017/g26_db')
  .then(() => console.log('Connected!'))
  .catch((err)=>{
    console.log(err);
  
  })
app.listen(3000, ()=>{
    console.log("Server started");
})