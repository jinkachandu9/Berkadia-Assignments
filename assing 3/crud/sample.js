var students=require('./students.json');
var router=require('express').Router();
router.get("/",(req,res)=>
{
    res.json(students);
});
router.get("/:id",(req,res)=>
{
    console.log(students);
    let body=req.body;
    console.log("put dat");
    console.log(req.params.id);
    res.json(students.find(x=>x.id==req.params.id));
});
router.post('/',(req,res)=>
{
    let body=req.body;
    let index=students.findIndex(x=>x.id==body.id);
    if(index==-1)
    {
        students.push(body);

    }
    else
    students[index]=body;
    res.json(students);
});
router.delete('/:id',(req,res)=>
{
    let s=students.findIndex(x=>x.id==req.params.id);
    students.splice(s,1);
    res.send('success');
});
module.exports=router;