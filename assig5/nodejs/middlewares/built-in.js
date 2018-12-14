//express.static serves static assets such as HTML files, images, and so on.
var express=require('express');
var app=express();
app.use(express.static('files'));
app.listen(5000);