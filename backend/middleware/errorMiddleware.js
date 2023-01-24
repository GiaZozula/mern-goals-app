// middleware are functions that run during the request/response cylce (so when you make a request)

// this function is used to overwrite the default express error handler 
// pass err as an object, then req and res, and next to call any further middleware
const errorHandler = (err, req, res, next) => {
    // a ternary--> ? if the statusCode is set (as it is in the SET, with 400) then use that, : else give the 500
    const statusCode = res.statusCode ? res.statusCode : 500

    // this will then pass to status whatever was set previously or the 500
    res.status(statusCode)

    // then respond with json, which will then pass in a message text on the err object
    // the stack trace will also give additional info, but we only want it if we are in development mode (thus the ternary) 
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

module.exports = {
    errorHandler,
}