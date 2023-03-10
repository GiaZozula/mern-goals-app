const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000;

connectDB()

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// when the front end is hit, send it to the goalRoutes file
app.use('/api/goals', require('./routes/goalRoutes'))

// this overwrites the default express errorHandler
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`));