import express from "express";
import connectDB from "./db/database.js";
import noteRouter from "./routes/note.routes.js";
import dotenv from "dotenv";

dotenv.config("../.env");


export const pool = connectDB();

const app = express();

app.use(express.json());

app.use((err,req,res,next)=>{
    console.log(err);
    console.log(err.stack);

    return res.status(500).json({success:false,message:'something went wrong'})
})

app.use("/api/v1",noteRouter);

export default app;