const { validateToken } = require('../services/authentication');

function checkForAuthenticationCookie(cookieName) {
    return (req, res, next) => {
        const tokenCookieValue = req.cookies[cookieName];
        if (!tokenCookieValue) {
            return next();
        }

        try {
            const userPayload = validateToken(tokenCookieValue);
            req.user = userPayload;
        } catch (error) {
            // Invalid token, continue without user
            console.log('Invalid token:', error.message);
        }
        
        return next();
    };
}

// Middleware to check if user is authenticated
function requireAuth(req, res, next) {
    if (!req.user) {
        return res.status(401).json({ 
            success: false, 
            message: 'Authentication required' 
        });
    }
    next();
}

// Middleware to check if user has admin role
function requireAdmin(req, res, next) {
    if (!req.user || req.user.role !== 'ADMIN') {
        return res.status(403).json({ 
            success: false, 
            message: 'Admin access required' 
        });
    }
    next();
}

// Middleware to check if user has student role
function requireStudent(req, res, next) {
    if (!req.user || req.user.role !== 'STUDENT') {
        return res.status(403).json({ 
            success: false, 
            message: 'Student access required' 
        });
    }
    next();
}

module.exports = {
    checkForAuthenticationCookie,
    requireAuth,
    requireAdmin,
    requireStudent,
};
