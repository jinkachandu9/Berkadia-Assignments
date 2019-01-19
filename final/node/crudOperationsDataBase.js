var express=require('express');
var app=express();
var bodyparser=require('body-parser');
var cors=require('cors');
app.use(bodyparser.json());
var mysql=require('mysql');
var Connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'charispursuj7',
    database:'assessment',
    multipleStatements:true
});

Connection.connect(function(error)
{
    if(error)
    console.log(error);
    else
    console.log("connected");
})
app.get('/:id',function(req,res)
{
    Connection.query('select * from questionsanswer where sno=?',[req.params.id],function(error,rows,fields)
    {
        if(error)
        console.log(error);
        else
        res.send(rows);
    });
});
// app.delete('/:id',function(req,res)
// {
//     Connection.query('delete from students where roll_no=?',[req.params.id],function(error,rows,fields)
//     {
//         if(error)
//         console.log(error);
//         else
//         console.log("deleted sucessfully");
//     })
// });
// app.post('/',function(req,res)
// {
//     var values=Object.values(req.body[0]);
//     Connection.query('insert into students(roll_no,name,subject) values (?,?,?)',[values[0],values[1],values[2]],function(error)
//     {
//         if(error)
//         console.log(error);
//     })
// })
app.listen(3000);