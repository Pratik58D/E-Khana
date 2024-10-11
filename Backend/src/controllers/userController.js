import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";



// Create token function
const createToken = async (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '3d' });
};

// Register user
const registeruser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Checking if user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        // Email validator and strong password check
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Please enter a valid email" });
        }

        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Please enter a strong password (at least 8 characters)" });
        }

        // Encrypting or hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Creating new user
        const newuser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        });

        // Saving user to the database
        const user = await newuser.save();
        console.log(user);

        // Creating a token for the user
        const token = await createToken(user._id);

        // Returning success response
        return res.status(201).json({ success: true, token });
        
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: "Server error" });
    }
};

// Login user (yet to be implemented)
const loginuser = async (req, res) => {
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(400).json({success:false, message: 'user not found'});

        };

        const isMatchPassword = await bcrypt.compare(password,user.password);
        if(!isMatchPassword){
            return res.status(400).json({success:false, message: 'Invalid Credentials'});        
        };

        const token = await createToken(user._id)

        return res.status(200).json({success : true , token});   
        
    } catch (error) {
        console.log(error);
        res.json({success:false , message: 'Error'});
        
    }
};

export { loginuser, registeruser };
