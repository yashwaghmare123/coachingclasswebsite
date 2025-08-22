const { Schema, model } = require('mongoose');

const attendanceSchema = new Schema({
  studentId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Present', 'Absent', 'Late'],
    required: true
  },
  batch: {
    type: String,
    required: true
  },
  remarks: {
    type: String
  }
}, { timestamps: true });

const Attendance = model('attendance', attendanceSchema);
module.exports = Attendance;
