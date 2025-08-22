const express=require("express");
const router=express.Router();

const User=require("../models/user")

// API endpoints for JSON responses
router.post('/signin',async(req,res)=>{
    const {email,password}=req.body;
    try{
        const token=await User.matchPasswordAndGenerateToken(email,password);
        
        // Set cookie and return JSON response
        return res.cookie("token",token, {
            httpOnly: true,
            secure: false, // Set to true in production with HTTPS
            sameSite: 'lax'
        }).json({
            success: true,
            message: "Login successful",
            token: token
        });
    }
    catch(error){
        return res.status(400).json({
            success: false,
            message: error.message || "Incorrect Email or Password"
        });
    }
});

router.post("/signup",async(req,res)=>{
    const {fullName,email,password}=req.body;
    
    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists with this email"
            });
        }

        const user = await User.create({
            fullName,
            email,
            password
        });
        
        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: {
                id: user._id,
                fullName: user.fullName,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || "Registration failed"
        });
    }
});

router.get('/logout',(req,res)=>{
    res.clearCookie("token").json({
        success: true,
        message: "Logged out successfully"
    });
});

// Legacy render routes (if you want to keep them)
router.get("/signin",(req,res)=>{
    return res.render("signin");
});
router.get("/signup",(req,res)=>{
    return res.render("signup");
});

module.exports=router;