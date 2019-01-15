var express=require('express');
var app=express();
var Booking=require('./bookshelf');
tablename='students';
app.get('/students',function(req,res){
    Booking.students
       .fetchAll()
       .then(function(bookings) 
       {
         res.send({bookings});
       });
});
app.get('/faculty',function(req,res){
  Booking.faculty
     .fetchAll()
     .then(function(bookings) 
     {
       res.send({bookings});
     });
});

module.exports=app;