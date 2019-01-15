var express=require('express');
var app=express();
var Booking=require('./bookshelf');
app.get('/:name/:password',function(req,res)
{
    return new Booking.facultyLogin({'name':req.params.name,'password':req.params.password})
      .fetch()
      .then(function(bookings) 
      {
          console.log(req.params.name,req.params.password);
          console.log({bookings})
         res.json({ bookings });
      })
});
module.exports=app;