// Third-party middleware
// Use third-party middleware to add functionality to Express apps.
var express = require('express')
var app = express()
var cookieParser = require('cookie-parser')

// load the cookie-parsing middleware
app.use(cookieParser())
app.listen(5000);