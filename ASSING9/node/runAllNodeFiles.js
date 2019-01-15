var express=require('express');
var app=express();
var bookShelf=require('./bookshelfReadOperations/read');
var bodyparser=require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true}));
var server=require('./knexPutOpertions/put');
// var insertStudentTable=require('./insertStudentDetails');
// var insertStudentLoginDetails=require('./insertStudentLoginDetails');
// var insertFacultyLoginDetails=require('./insertEmployeeLoginDetails');
// var insertEmployeeDetails=require('./insertEmployeeDetails');
var bookShelf1=require('./bookshelfReadOperations/read');
var bookShelfAuthentication=require('./bookshelfReadOperations/checkAuthentication');
var bookShelfFaultyAuthentication=require('./bookshelfReadOperations/checkFacultyAuthentication')
var bookShelfAdminAuthentication=require('./bookshelfReadOperations/checkAdminAuthentication');
var inner=require('./innerJoins');
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  })
app.use('/authentication',bookShelfAuthentication);
app.use('/readStudents',bookShelf1);
app.use('/authentication/faculty',bookShelfFaultyAuthentication);
app.use('/authentication/admin',bookShelfAdminAuthentication);
app.use('/getData',bookShelf);
app.use('/inner',inner);

app.post('/students/:name/:place',function(req,res)
{  
    server.insertStudentTable(req.params.name,req.params.place);
})
app.post('/studentsLogins/:name/:password',function(req,res)
{  
    server.insertStudentAuthentication(req.params.name,req.params.password);
});
app.post('/facultyLogins/:name/:password',function(req,res)
{  
    server.insertFacultyLoginTable(req.params.name,req.params.password);
})
app.post('/faculty/:name/:collage/:place',function(req,res)
{  
    server.insertFacultyTable(req.params.name,req.params.collage,req.params.place);
});
app.listen(3200);
