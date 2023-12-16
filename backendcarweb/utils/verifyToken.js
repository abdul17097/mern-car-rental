const jwt = require('jsonwebtoken');
const User = require('../model/userModel')

const verifyToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.token = decoded;
        const check = await User.findOne({"_id": decoded.id});
        if(check.isAdmin){
            next()
        }else{
             return res.status(403).json({ message: 'You are not Admin' });
        }
        console.log(check);

        next();
    } catch (error) {
        return res.status(403).json({ message: 'Forbidden' });
    }
};

module.exports = { verifyToken };
