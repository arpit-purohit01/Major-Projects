import bcrypt from "bcrypt"
import User from "../models/userModel.js";
import genToken from "./token.js";


//signup 


export const signup = async (req, res) => {
    try {

        const { firstName, lastName, email, password } = req.body;
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json("provide all data");
        }
        const existingUser = await User.findOne({ $or: [{ email }] })
        if (existingUser) {
            return res.status(500).json("user already exists");

        }

        if (password.length < 6) {
            return res.status(400).json({
                message: "password must be at least 6 characters!"
            })
        }
        const hashedPass = await bcrypt.hash(password, 10);

        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPass
        });
        const token = genToken(user._id)

        res.cookie("token", token,{
            httpOnly: true,
            sameSite: "strict",
            secure: false,
            maxAge: 7*24*60*60*1000
        })
        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json({messege:`Signup error ${error}`});
    }
}


// login

export const login = async (req, res) => {
    try {

        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json("provide all data");
        }
        const user = await User.findOne( {email})
        if (!user) {
            return res.status(500).json("user doesn't exists");

        }

        const isMatch = bcrypt.compare(password,user.password)
        if (!isMatch){
            return res.status(500).json({messege: "incorrect password"})
        }
        const token = await genToken(user._id)

        res.cookie("token", token,{
            httpOnly: true,
            sameSite: "strict",
            secure: false,
            maxAge: 7*24*60*60*1000
        })
        return res.status(20).json(user);
    } catch (error) {
        return res.status(500).json({messege:`Login error ${error}`});
    }
}



//logout

export const logout = async (req,res) => {
    try {
        res.clearCookie("token")
        return res.status(200).json({messege: "log out successful"})
    } catch (error) {
        return res.status(500).json({messege: `log out un-successful ${error}`})
        
    }
}

//  default {login, logout, signup};