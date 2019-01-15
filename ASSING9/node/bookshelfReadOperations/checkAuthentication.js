var express=require('express');
var app=express();
var Booking=require('./bookshelf');
tablename='studentLogin';
app.get('/:name/:password',function(req,res)
{
    return new Booking.studentLogin({'name':req.params.name,'password':req.params.password})
      .fetch()
      .then(function(bookings) 
      {
          console.log({bookings})
         res.json({ bookings });
      })
});
module.exports=app;