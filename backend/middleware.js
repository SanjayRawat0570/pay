const { JWT_SECRET } = require('../config');
const jwt = require('jsonwebtoken');

const authmiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const token = authHeader.split(' ')[1];
    try{
        const decoded = jwt.verify(token, JWT_SECRET);
        if(decode.userId){
        req.userId = decoded.userId;
        next();
        } else{
            return res.status(401).json({ message: 'Unauthorized' });
        }
       
    }
    catch(error){
        return res.status(401).json({ message: 'Unauthorized' });
    }
    };
    module.exports = {
        authmiddleware
    }