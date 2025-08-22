const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Marks = require('../models/marks');
const Attendance = require('../models/attendance');

// Middleware to check if user is student
const isStudent = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ success: false, message: 'Not authenticated' });
  }
  if (req.user.role !== 'STUDENT') {
    return res.status(403).json({ success: false, message: 'Access denied. Students only.' });
  }
  next();
};

// Get student profile
router.get('/profile', isStudent, async (req, res) => {
  try {
    const student = await User.findById(req.user._id).select('-password -salt');
    res.json({ success: true, student });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get student marks
router.get('/marks', isStudent, async (req, res) => {
  try {
    const marks = await Marks.find({ studentId: req.user._id }).sort({ examDate: -1 });
    res.json({ success: true, marks });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get student attendance
router.get('/attendance', isStudent, async (req, res) => {
  try {
    const { month, year } = req.query;
    let query = { studentId: req.user._id };
    
    if (month && year) {
      const startDate = new Date(year, month - 1, 1);
      const endDate = new Date(year, month, 0);
      query.date = { $gte: startDate, $lte: endDate };
    }
    
    const attendance = await Attendance.find(query).sort({ date: -1 });
    
    // Calculate attendance statistics
    const totalDays = attendance.length;
    const presentDays = attendance.filter(a => a.status === 'Present').length;
    const absentDays = attendance.filter(a => a.status === 'Absent').length;
    const lateDays = attendance.filter(a => a.status === 'Late').length;
    const attendancePercentage = totalDays > 0 ? Math.round((presentDays / totalDays) * 100) : 0;
    
    res.json({
      success: true,
      attendance,
      statistics: {
        totalDays,
        presentDays,
        absentDays,
        lateDays,
        attendancePercentage
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get student dashboard data
router.get('/dashboard', isStudent, async (req, res) => {
  try {
    const studentId = req.user._id;
    
    // Get recent marks
    const recentMarks = await Marks.find({ studentId }).sort({ examDate: -1 }).limit(5);
    
    // Get attendance for current month
    const currentDate = new Date();
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    
    const monthlyAttendance = await Attendance.find({
      studentId,
      date: { $gte: startOfMonth, $lte: endOfMonth }
    });
    
    const totalDays = monthlyAttendance.length;
    const presentDays = monthlyAttendance.filter(a => a.status === 'Present').length;
    const attendancePercentage = totalDays > 0 ? Math.round((presentDays / totalDays) * 100) : 0;
    
    // Calculate average marks
    const averageScore = recentMarks.length > 0 
      ? Math.round(recentMarks.reduce((sum, mark) => sum + mark.percentage, 0) / recentMarks.length)
      : 0;
    
    res.json({
      success: true,
      dashboard: {
        recentMarks,
        attendancePercentage,
        averageScore,
        totalTests: recentMarks.length,
        monthlyAttendance: {
          present: presentDays,
          total: totalDays
        }
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Update student profile
router.put('/profile', isStudent, async (req, res) => {
  try {
    const { fullName, phoneNumber, parentContact, address, school } = req.body;
    const updatedFields = {
      fullName,
      phoneNumber,
      parentContact,
      address,
      school
    };

    // Remove undefined fields
    Object.keys(updatedFields).forEach(key => updatedFields[key] === undefined && delete updatedFields[key]);

    const user = await User.findByIdAndUpdate(
      req.user._id,
      updatedFields,
      { new: true }
    ).select('-password -salt');
    
    res.json({ success: true, message: 'Profile updated successfully', user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
