const { Schema, model } = require('mongoose');

const announcementSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['General', 'Exam', 'Holiday', 'Important', 'Event'],
    default: 'General'
  },
  targetAudience: {
    type: String,
    enum: ['All', 'NEET', 'JEE', 'MHT-CET', 'PCM', 'PCB', 'FOUNDATION'],
    default: 'All'
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High', 'Urgent'],
    default: 'Medium'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  expiryDate: {
    type: Date
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  }
}, { timestamps: true });

const Announcement = model('announcement', announcementSchema);
module.exports = Announcement;
