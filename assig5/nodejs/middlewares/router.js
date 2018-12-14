//router MiddleWare
//Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of express.Router().
var express=require('express');
let app=express();
let condition=true;
var router=express.Router();
function authentication(req,res,next)
{
    console.log("If condition fails whole router stops");
    if(condition==true)
    {
    next();
    }
};
router.use(authentication);
router.get("/",function(req,res,next){
    res.send("I am getting data from router");
});
app.use("/router",router);
 app.listen("5000",()=>console.log("port:5000"));
