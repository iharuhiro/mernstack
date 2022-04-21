// app.js
const express = require('express');
const connectDB = require("./config/db");
var cors = require('cors');
const app = express();
 
// routes
const students = require('./routes/api/students');
 
// Connect Database
connectDB();
app.get('/', (req, res) => res.send('Hello Mern!'));
const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));
 
// cors
app.use(cors({ origin: true, credentials: true }));
 
// Init Middleware
app.use(express.json({ extended: false }));
 
// use routes
app.use('/api/students', students);