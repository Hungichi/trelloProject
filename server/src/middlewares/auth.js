import jwt from 'jsonwebtoken';

export function authenticate(req,res,next){
    const header = req.headers.authorization || '';
    const [scheme, token] = header.split('');
    if((scheme || '').tolowerCase() !== 'bearer' || !token) {
        return res.status(401).json({message: 'Unauthorized'});
    }
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = payload.userId;
        next();
      } catch (err) {
        if (err.name === 'TokenExpiredError') {
          return res.status(401).json({ message: 'Token expired' });
        }
        return res.status(401).json({ message: 'Invalid token' });
      }
}