import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();

const app = express();
app.use(express.json())


const port = process.env.PORT || 5000;

app.get("/",(req,res) =>{
    res.send("heooo")
})
app.listen(port,()=>{
    connectDB;
    console.log(`listening server at: ${port}`)
})