import { pool } from "../app.js";

export const createNote = async (req,res) => {
    const { title,content } = req.body;
    const [result] = await pool.query(
        `INSERT INTO notes(title,content)
        VALUES(?,?)`,[title,content]
    )
    // console.log(result.insertId,result.title,result.content);
    return res.status(200).json({success:true,message:'created note',data:{Id:result.insertId,title,content}})
}

export const getNotes = async (req,res) => {
    const [result] = await pool.query(
        `SELECT * FROM notes`
    )
    // console.log(result.insertId,result.title,result.content);
    return res.status(200).json({success:true,message:'created note',data:result})
}

export const getNote = async (req,res) => {
    const { id } = req.params;
    const [result] = await pool.query(
        `SELECT * FROM notes
        WHERE ID = ?`,[id]
    )
    // console.log(result.insertId,result.title,result.content);
    return res.status(200).json({success:true,message:'created note',data:result})
}