const express = require('express');
const router = express.Router();
const User = require('../models/user');
const TopPerformer = require('../models/topPerformer');
const Announcement = require('../models/announcement');
const Event = require('../models/event');

// Get public announcements
router.get('/announcements', async (req, res) => {
  try {
    const currentDate = new Date();
    
    const announcements = await Announcement.find({
      isActive: true,
      targetAudience: 'ALL',
      $or: [
        { expiryDate: { $gte: currentDate } },
        { expiryDate: null }
      ]
    })
    .sort({ priority: -1, createdAt: -1 })
    .limit(5);
    
    res.json({ success: true, announcements });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get public top performers
router.get('/top-performers', async (req, res) => {
  try {
    const topPerformers = await TopPerformer.find({ 
      isActive: true 
    })
    .populate('studentId', 'fullName')
    .sort({ rank: 1 })
    .limit(20);
    
    res.json({ success: true, topPerformers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get upcoming public events
router.get('/events', async (req, res) => {
  try {
    const currentDate = new Date();
    
    const events = await Event.find({
      eventDate: { $gte: currentDate },
      isPublic: true
    })
    .sort({ eventDate: 1 })
    .limit(10);
    
    res.json({ success: true, events });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get website statistics for homepage
router.get('/stats', async (req, res) => {
  try {
    const totalStudents = await User.countDocuments({ role: 'STUDENT' });
    const totalTopPerformers = await TopPerformer.countDocuments({ isActive: true });
    const activeCourses = await User.distinct('course', { role: 'STUDENT' });
    
    res.json({
      success: true,
      stats: {
        totalStudents,
        totalTopPerformers,
        totalCourses: activeCourses.filter(course => course).length,
        yearsOfExperience: 10 // Static value, can be made dynamic
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
