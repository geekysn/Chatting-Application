import jwt from "jsonwebtoken";
import User from "../models/user.js";

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ error: "You're Unauthorized to access this page" });
        }

        const verify = jwt.verify(token, process.env.JWT_SECRET);
        // console.log('JWT Payload:', verify); // Debugging the payload

        if (!verify) {
            return res.status(401).json({ error: "You're Unauthorized to access this page" });
        } 

        const user = await User.findById(verify.userId).select("-password");
        // console.log('Fetched User:', user); // Debugging the fetched user

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log("Error in protectRoute middleware: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export default protectRoute;
