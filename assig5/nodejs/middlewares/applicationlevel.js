//Middleware: It is a functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. 
var express=require('express');
var app=express();
//Application Level MiddleWare
let condition=true;
function authentication(req,res,next)
{
    console.log("If condition fails whole application stops");
    if(condition==true)
    {
    next();
    }
};
app.use(authentication);
app.get("/",function(req,res,next)
{
    res.send("I am getting data from app ");
});
app.listen(5000);

