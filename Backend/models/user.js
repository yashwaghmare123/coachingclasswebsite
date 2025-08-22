const { Schema, model } = require('mongoose');
const { createHmac, randomBytes } = require('node:crypto');
const { createTokenForUser } = require('../services/authentication');

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  salt: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  profileImageURL: {
    type: String,
    default: "/images/user.png",
  },
  role: {
    type: String,
    enum: ["STUDENT", "ADMIN"],
    default: "STUDENT"
  },
  // Student specific fields
  studentId: {
    type: String,
    unique: true,
    sparse: true // Only for students
  },
  course: {
    type: String,
    enum: ["NEET", "JEE", "MHT-CET", "PCM", "PCB", "FOUNDATION"],
  },
  batch: {
    type: String,
  },
  enrollmentDate: {
    type: Date,
    default: Date.now
  },
  phoneNumber: {
    type: String,
  },
  parentContact: {
    type: String,
  },
  address: {
    type: String,
  },
  // Academic info
  class: {
    type: String,
  },
  school: {
    type: String,
  }
}, { timestamps: true });

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified('password')) return next();

  const salt = randomBytes(16).toString("hex");

//   const salt ="someRandomSalt" ;
  const hashedPassword = createHmac('sha256', salt)
    .update(user.password)
    .digest("hex");

  user.salt = salt;
  user.password = hashedPassword;
  next();
});
userSchema.static('matchPasswordAndGenerateToken',async function(email,password){
const user=await this.findOne({email});
// if(!user) return false;
if(!user) throw new Error('User not found');

const salt=user.salt;
const hashedPassword=user.password;
const userProvidedHash= createHmac('sha256', salt)
    .update(password)
    .digest("hex");
    if(hashedPassword!==userProvidedHash) throw new Error('Incorrect password');
    // return hashedPassword===userProvidedHash;
    // return {...user,password:undefined,salt:undef ined};
    // return user;
    const token=createTokenForUser(user);
    return token;
});
const User = model('user', userSchema);
module.exports = User;
