let express=require('express');
let app=express();
let BodyParser=require('body-parser');
app.use(BodyParser.json({limit:1000}));
app.use('/student',require('./sample'));
app.get('/',function(req,res)
{
 //   res.body(BodyParser);
    res.send("bahulballi");
});
app.listen(5000,()=>console.log("listening on 5000"));