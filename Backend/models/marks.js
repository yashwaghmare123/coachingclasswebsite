const { Schema, model } = require('mongoose');

const marksSchema = new Schema({
  studentId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  subject: {
    type: String,
    required: true,
    enum: ['Physics', 'Chemistry', 'Biology', 'Mathematics']
  },
  examType: {
    type: String,
    required: true,
    enum: ['Weekly Test', 'Monthly Test', 'Mock Test', 'Unit Test', 'Final Exam']
  },
  examName: {
    type: String,
    required: true
  },
  marksObtained: {
    type: Number,
    required: true
  },
  totalMarks: {
    type: Number,
    required: true
  },
  percentage: {
    type: Number
  },
  grade: {
    type: String,
    enum: ['A+', 'A', 'B+', 'B', 'C+', 'C', 'D', 'F']
  },
  examDate: {
    type: Date,
    required: true
  },
  remarks: {
    type: String
  }
}, { timestamps: true });

// Calculate percentage and grade before saving
marksSchema.pre('save', function(next) {
  this.percentage = Math.round((this.marksObtained / this.totalMarks) * 100);
  
  if (this.percentage >= 90) this.grade = 'A+';
  else if (this.percentage >= 80) this.grade = 'A';
  else if (this.percentage >= 70) this.grade = 'B+';
  else if (this.percentage >= 60) this.grade = 'B';
  else if (this.percentage >= 50) this.grade = 'C+';
  else if (this.percentage >= 40) this.grade = 'C';
  else if (this.percentage >= 33) this.grade = 'D';
  else this.grade = 'F';
  
  next();
});

const Marks = model('marks', marksSchema);
module.exports = Marks;
