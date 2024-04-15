import jwt from "jsonwebtoken";
import { pool } from "../app.js";
import bcrypt from "bcrypt";

export const signUP = async (req,res) => {
    try {
        const { name,email,password } = req.body;
    
        if ([name,email,password].some((field)=>
            field === ""
        )){
            return res.status(401).json({success:false,message:'insufficient data'});
        }

        const [user] = await pool.query(
            `SELECT email FROM users
            WHERE email = ?`,[email]
        )

        if (user.length > 0){
            return res.status(403).json({success:false,message:'user already exists'})
        }
    
        const cryptPass = await bcrypt.hash(password,10);
    
        const [result] = await pool.query(
            `INSERT INTO users(name,email,password)
            VALUES(?,?,?)`,[name,email,cryptPass]
        );
    
        return res.status(200).json({success:true,message:'user signed up',data:{id:result.insertId,name,email}});
    } catch (error) {
        return res.status(500).json({success:false,message:error})
    }
}

export const logIn = async (req,res) => {
    try {
        const { email,password } = req.body;
    
        if (!email && !password){
            return res.status(402).json({success:false,message:'insufficient data'})
        }
    
        const [result] = await pool.query(
            `SELECT email,password FROM users
            WHERE email = ?`,[email]
        );
    
        if (result.length == 0){
            return res.status(404).json({success:false,message:'user not exists'});
        }
    
        const isPasswordCorrect = await bcrypt.compare(password,result[0].password);
    
        if (!isPasswordCorrect){
            return res.status(400).json({success:false,message:'incorrect password'});
        }
    
        const [loggedUser] = await pool.query(
            `SELECT ID,name,email FROM users
            WHERE email = ?`,[email]
        )
        
        const token = jwt.sign(
            loggedUser[0],
            process.env.JWT_TOKEN_KEY
        )
        return res
        .status(200)
        .cookie("token",token,{
            maxAge : 60*60*24*1000,
            secure : false,
            httpOnly : true
        })
        .json({success:true,message:'user logged in',data:loggedUser[0]});
    } catch (error) {
        return res.status(500).json({success:false,message:error})
    }
}