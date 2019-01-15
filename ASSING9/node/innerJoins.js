var express=require('express');
var app=express();
var mysql=require('mysql');
var mysqlObject=mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'charispursuj7',
    database:'eamcet'
});
app.get('/',function(req,res)
{
    mysqlObject.query("select * from faculty inner join students on students.place=faculty.place",function(error,rows,fields)
    {
        if(error)
        console.log(error);
        else{
            res.send(rows);
         console.log(JSON.stringify(rows));
        }
    });
}); 
module.exports=app;
