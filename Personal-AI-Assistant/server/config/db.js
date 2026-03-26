import mongoose from "mongoose";
const connectDB = async () =>{
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log("db connected");
    } catch (error) {
        console.log("db error",error);
    }
}

export default connectDB;