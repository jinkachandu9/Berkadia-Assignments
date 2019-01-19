var express=require('express');
var app=express();
var bodyparser=require('body-parser');
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
});
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.get('/',function(req,res)
{
    Connection.query('select * from questionsAnswer inner join user on questionsAnswer.sno=user.correctanswer',function(error,rows,fields)
    {
        if(error)
        console.log(error);
        else
        res.send(rows);
    });
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
app.post('/:sno/:answer',function(req,res)
{
  
    Connection.query('insert into user(correctAnswer,userAnswer) values (?,?)',[req.params.sno,req.params.answer],function(error)
    {
        if(error)
        console.log(error);
        else
        console.log("inserted");
    })
})
app.listen(3200);