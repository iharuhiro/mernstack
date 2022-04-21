// models/Student.js
 
const mongoose = require('mongoose');
 
const StudentSchema = new mongoose.Schema({
    studentID: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    course: {
        type: String
    },
    year: {
        type: String
    }
});
 
module.exports = Student = mongoose.model('student', StudentSchema);