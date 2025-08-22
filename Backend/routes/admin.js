const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Marks = require('../models/marks');
const Attendance = require('../models/attendance');
const TopPerformer = require('../models/topPerformer');
const Announcement = require('../models/announcement');

// Middleware to check if user is admin
const isAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ success: false, message: 'Not authenticated' });
  }
  if (req.user.role !== 'ADMIN') {
    return res.status(403).json({ success: false, message: 'Access denied. Admins only.' });
  }
  next();
};

// Get all students
router.get('/students', isAdmin, async (req, res) => {
  try {
    const students = await User.find({ role: 'STUDENT' }).select('-password -salt').sort({ createdAt: -1 });
    res.json({ success: true, students });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Add new student
router.post('/students', isAdmin, async (req, res) => {
  try {
    const { fullName, email, password, course, batch, phoneNumber, parentContact, address, class: studentClass, school } = req.body;
    
    // Check if student already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Student already exists with this email' });
    }
    
    // Generate student ID
    const studentCount = await User.countDocuments({ role: 'STUDENT' });
    const studentId = `STU${Date.now().toString().slice(-6)}${(studentCount + 1).toString().padStart(3, '0')}`;
    
    const student = await User.create({
      fullName,
      email,
      password,
      role: 'STUDENT',
      studentId,
      course,
      batch,
      phoneNumber,
      parentContact,
      address,
      class: studentClass,
      school
    });
    
    const studentData = await User.findById(student._id).select('-password -salt');
    res.status(201).json({ success: true, message: 'Student added successfully', student: studentData });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Add marks for student
router.post('/marks', isAdmin, async (req, res) => {
  try {
    const { studentId, subject, examType, examName, marksObtained, totalMarks, examDate, remarks } = req.body;
    
    const marks = await Marks.create({
      studentId,
      subject,
      examType,
      examName,
      marksObtained,
      totalMarks,
      examDate,
      remarks
    });
    
    await marks.populate('studentId', 'fullName studentId');
    res.status(201).json({ success: true, message: 'Marks added successfully', marks });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get all marks
router.get('/marks', isAdmin, async (req, res) => {
  try {
    const { studentId, subject, examType } = req.query;
    let query = {};
    
    if (studentId) query.studentId = studentId;
    if (subject) query.subject = subject;
    if (examType) query.examType = examType;
    
    const marks = await Marks.find(query)
      .populate('studentId', 'fullName studentId course')
      .sort({ examDate: -1 });
    
    res.json({ success: true, marks });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Add attendance
router.post('/attendance', isAdmin, async (req, res) => {
  try {
    const { attendanceData } = req.body; // Array of attendance records
    
    const attendance = await Attendance.insertMany(attendanceData);
    res.status(201).json({ success: true, message: 'Attendance added successfully', attendance });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Add top performer
router.post('/top-performers', isAdmin, async (req, res) => {
  try {
    const { studentId, examName, rank, score, totalMarks, course, year, achievement, photo } = req.body;
    
    const percentage = Math.round((score / totalMarks) * 100);
    
    const topPerformer = await TopPerformer.create({
      studentId,
      examName,
      rank,
      score,
      totalMarks,
      percentage,
      course,
      year,
      achievement,
      photo
    });
    
    await topPerformer.populate('studentId', 'fullName');
    res.status(201).json({ success: true, message: 'Top performer added successfully', topPerformer });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get all top performers
router.get('/top-performers', isAdmin, async (req, res) => {
  try {
    const topPerformers = await TopPerformer.find({ isActive: true })
      .populate('studentId', 'fullName course')
      .sort({ rank: 1 });
    
    res.json({ success: true, topPerformers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Create announcement
router.post('/announcements', isAdmin, async (req, res) => {
  try {
    const { title, content, type, targetAudience, priority, expiryDate } = req.body;
    
    const announcement = await Announcement.create({
      title,
      content,
      type,
      targetAudience,
      priority,
      expiryDate,
      createdBy: req.user._id
    });
    
    res.status(201).json({ success: true, message: 'Announcement created successfully', announcement });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get dashboard statistics
router.get('/dashboard', isAdmin, async (req, res) => {
  try {
    const totalStudents = await User.countDocuments({ role: 'STUDENT' });
    const totalMarks = await Marks.countDocuments();
    const totalTopPerformers = await TopPerformer.countDocuments({ isActive: true });
    const totalAnnouncements = await Announcement.countDocuments({ isActive: true });
    
    // Recent activities
    const recentStudents = await User.find({ role: 'STUDENT' }).select('fullName course createdAt').sort({ createdAt: -1 }).limit(5);
    const recentMarks = await Marks.find().populate('studentId', 'fullName').sort({ createdAt: -1 }).limit(5);
    
    // Course distribution
    const courseDistribution = await User.aggregate([
      { $match: { role: 'STUDENT' } },
      { $group: { _id: '$course', count: { $sum: 1 } } }
    ]);
    
    res.json({
      success: true,
      dashboard: {
        statistics: {
          totalStudents,
          totalMarks,
          totalTopPerformers,
          totalAnnouncements
        },
        recentStudents,
        recentMarks,
        courseDistribution
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Update student
router.put('/students/:id', isAdmin, async (req, res) => {
  try {
    const student = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).select('-password -salt');
    
    res.json({ success: true, message: 'Student updated successfully', student });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Delete student
router.delete('/students/:id', isAdmin, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
