const jwt = require('jsonwebtoken');

const generteToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET_TOKEN, {
        expiresIn: "30d"
    })
}

module.exports = generteToken;