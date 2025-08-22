const express = require('express');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser');
const cors = require('cors');
const path=require('path');
const userRoute=require('./routes/user');
const studentRoute=require('./routes/student');
const adminRoute=require('./routes/admin');
const publicRoute=require('./routes/public');
const { checkForAuthenticationCookie } = require('./middlewares/authentication');

// Connect to MongoDB (if needed)
mongoose.connect('mongodb://localhost:27017/coachingweb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'));
const app = express();

// CORS configuration for frontend
app.use(cors({
    origin: 'http://localhost:5173', // React dev server URL
    credentials: true
}));

app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use('/api/user',userRoute);
app.use('/api/student',studentRoute);
app.use('/api/admin',adminRoute);
app.use('/api/public',publicRoute);

// Test route to check authentication
app.get('/api/me', (req, res) => {
    if (req.user) {
        res.json({ 
            success: true, 
            user: req.user,
            message: 'User authenticated' 
        }); 
    } else {
        res.return({ 
            success: false, 
            message: 'User not authenticated' 
        });
    }
});

app.get('/', (req, res) => {
    res.json({ 
        message: 'Coaching Web API Server Running',
        endpoints: {
            // Authentication
            register: 'POST /api/user/signup',
            login: 'POST /api/user/signin',
            logout: 'GET /api/user/logout',
            profile: 'GET /api/me',
            
            // Public endpoints
            publicAnnouncements: 'GET /api/public/announcements',
            publicTopPerformers: 'GET /api/public/top-performers',
            publicEvents: 'GET /api/public/events',
            websiteStats: 'GET /api/public/stats',
            
            // Student endpoints (requires login)
            studentProfile: 'GET /api/student/profile',
            studentMarks: 'GET /api/student/marks',
            studentAttendance: 'GET /api/student/attendance',
            studentDashboard: 'GET /api/student/dashboard',
            
            // Admin endpoints (requires admin login)
            adminDashboard: 'GET /api/admin/dashboard',
            manageStudents: 'GET/POST/PUT/DELETE /api/admin/students',
            manageMarks: 'GET/POST /api/admin/marks',
            manageAttendance: 'POST /api/admin/attendance'
        }
    });
});

app.post('/', (req, res) => {
    res.send(`Hello, ${req.body.name || 'World'}!`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
