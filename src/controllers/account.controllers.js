import { pool } from "../app.js";

export const createAccount = async (req,res) => {
    try {
        const user = req.user;
        await pool.query(
            `INSERT INTO account(userID)
            VALUES(?)`,[user.ID]
        )
        return res.status(200).json({success:true,message:'account created successfully'});
    } catch (error) {
        return res.status(500).json({success:false,message:error});
    }
}

export const sendAmount = async (req,res) => {
    try {
        const user = req.user;
        const { amount,receiver } = req.body;
        
    } catch (error) {
        
    }
}