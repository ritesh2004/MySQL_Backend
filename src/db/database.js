import mysql from "mysql2";

const connectDB = () => {
    const pool = mysql.createPool({
        host : process.env.HOST,
        user : process.env.USER,
        password : process.env.PASSWORD,
        database : process.env.DATEBASE_NAME
    }).promise();

    return pool;
}

export default connectDB;