var express=require('express');
var app=express();
let fs=require('fs');
app.get("/",function(req,res,next)
{
    fs.readFile("/file-does-note-exit",function(error,data)
    {
        if(error)
        next(error);//Express regards the current request as being an error and will skip any remaining non-error handling routing and middleware functions.
        else
        console.log(data);
    })
})

app.listen(5000);