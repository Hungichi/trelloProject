import User from '../models/User.js';
import {signToken} from '../utils/jwt.js';
import {ok, created, badRequest, unauthorized} from '../utils/response.js';
import {validationResult} from 'express-validator';

export const register = async (req, res) => {
    try{
    const {name, email, password} = req.body 

    const existingUser = await User.findOne(email)
    if(existingUser){
        return conflict(res, 'User already exists');
    }
    const newUser = await User.create({
        email,
        name,
        password,
    });
    
    const token = signToken(newUser._id);
    return created(res, {user: newUser, token}, 'User registered successfully');
    } catch (error) {
        return internalServerError(res, error.message);
    }
};

export const login = async (req, res) => {
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return badRequest(res, 'Validation failed', errors.array());
        }

        const {email, password} = req.body;
        const user = await User.findOne({email}).select('+password');
        if(!user){
            return res.status(401).json({message: 'Invalid credentials'});
        }
        const isPasswordValid = await user.comparePassword(password)
        if (!isPasswordValid){
            return unauthorized(res,'Invalid password');
        }

        const token = signToken(user._id);

        const userResponse = {
            id : user._id,
            name :user.name,
            email :user.email,
            avatar : user.avatar,
            token : token,
        }

        return ok(res, userResponse, 'Login successful');
    } catch (error) {
        console.error('Login error:', error);
        return internalServerError(res, error.message);
    }
}

export const getProfile = async (req,res) =>{
    try{
        const userId = req.userId 
        const user = await User.findById(userId);
        if(!user){
            return notFound(res, 'User not found');
        }
        const userProfile = {
            id : user._id,
            name :user.name,
            email :user.email,
            avatar : user.avatar,
            starredBoards : user.starredBoards,
        }

        return ok (res, userProfile, 'User profile fetched successfully');
    }catch(error){
        console.error('Get profile error:', error);
        return internalServerError(res, error.message);
    }
}

export const logout = async (req, res) => {
    try {
        return ok(res, null, 'Logout successful');
    } catch (error) {
        console.error('Logout error:', error);
        return internalServerError(res, 'Logout failed');
    }
}