const JWT = require('jsonwebtoken');

const secret = "SuperMan123@"; // In production, use environment variable

function createTokenForUser(user) {
    const payload = {
        _id: user._id,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
        profileImageURL: user.profileImageURL,
    };
    const token = JWT.sign(payload, secret);
    return token;
}

function validateToken(token) {
    const payload = JWT.verify(token, secret);
    return payload;
}

module.exports = {
    createTokenForUser,
    validateToken,
};
