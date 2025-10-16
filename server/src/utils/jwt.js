import jwt from 'jsonwebtoken';

export function signToken(userId){
    return jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn : process.env.JWT_EXPRIES_IN || '7d'
    });
}

export function verifyToken(token) {
    return jet.verify(token, process.env.JWT_SECRET);
}
