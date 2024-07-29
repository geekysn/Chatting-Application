import User from "../models/user.js"
import bcrypt from "bcryptjs"
import generateToken from "../utils/generateToken.js";

export const signup = async (req,res)=>{
    try {
        const body = req.body;
        const { fullName, username, password, confirmPassword, mobNo, gender } = body;

        if(password !== confirmPassword){
            return res.status(400).json({error:"Password and Confirm Password does not match"});
        }

        const user = await User.findOne({mobNo});
        if(user){
            return res.status(400).json({error:"User already exists"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, 10);

        const boyProfilePic = `https://api.dicebear.com/9.x/personas/svg?seed=Felix`
        const girlProfilePic = `https://api.dicebear.com/9.x/open-peeps/svg?seed=Aneka`

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            mobNo,
            gender,
            profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
        })
        if(newUser){
            generateToken(newUser._id, res);
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                mobNo: newUser.mobNo,
                profilePic: newUser.profilePic
            });
        }
        else{
            res.status(400).json({error:"Failed to create user | Invalid user data"});
        }
    } 
    catch (error) {
        console.log(error.message);
        res.status(500).json({error:"Internal server error"});
    }
}

export const signin = async (req,res)=>{
    try {
        const { mobNo, password } = req.body;
        const user = await User.findOne({mobNo});
        if(!user){
            return res.status(400).json({error:"User does not exist"});
        }
        const isValidPassword = await bcrypt.compare(password, user?.password || "");
        if(!isValidPassword){
            return res.status(400).json({error:"Invalid password"});
        }
        generateToken(user._id, res);
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            mobNo: user.mobNo,
            profilePic: user.profilePic
        });
    } 
    catch (error) {
        console.log("Error in signin controller ",error.message);
        res.status(500).json({error:"Internal server error"});
    }
}

export const logout = (req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message: "Logged Out successfully"})
    } 
    catch (error) {
        console.log("Error in logout controller ", error.message);
        res.status(500).json({error:"Internal server error"});
    }
}