const mongoose = require('mongoose')

// function to connect to mongoDB, uses an async function because all mongoDB methods return a promise
// cyan and underline are from the colors package
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(error);
        // exit the process with a failure/error, so pass a 1
        process.exit(1)
    }
}

module.exports = connectDB