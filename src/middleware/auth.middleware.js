import { pool } from "../app.js";
import jwt from "jsonwebtoken";

const verifyUser = async (req,res,next) => {
    const { token } = req.cookies;

    if (!token){
        return res.status(400).json({success:false,message:'log in first'})
    }

    const user = jwt.verify(token,process.env.JWT_TOKEN_KEY);

    req.user = user;
    next()
}

export default verifyUser;