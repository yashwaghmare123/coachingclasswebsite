const { Schema, model } = require('mongoose');

const topPerformerSchema = new Schema({
  studentId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  examName: {
    type: String,
    required: true
  },
  rank: {
    type: Number,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  totalMarks: {
    type: Number,
    required: true
  },
  percentage: {
    type: Number,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  achievement: {
    type: String, // e.g., "AIR 1 in JEE Main", "State Rank 5 in NEET"
  },
  photo: {
    type: String,
    default: "/images/student-default.png"
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

const TopPerformer = model('topperformer', topPerformerSchema);
module.exports = TopPerformer;
