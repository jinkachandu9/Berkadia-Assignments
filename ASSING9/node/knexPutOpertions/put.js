var insertStudentTable=function(name,place)
{
var knex=require('./knexfile.js');
    knex('students').insert(
    {
        name1:name,
        place:place

    }).then(function(data,error)
    {
        if(error)console.log(error);
        else
        console.log("successfully inserted in student table");
    });
}
var insertFacultyTable=function(name,collage,place)
{
var knex=require('./knexfile.js');


    knex('faculty').insert(
    {
        name:name,
        collage:collage,
        place:place

    }).then(function(data,error)
    {
        if(error)console.log(error);
        else
        console.log("successfully inserted in employee table");

    });
};
var insertFacultyLoginTable=function(name,password)
{
var knex=require('./knexfile.js');


    knex('facultyLogin').insert(
    {
        name:name,
        password:password

    }).then(function(data,error)
    {
        if(error)console.log(error);
        else
        console.log("successfully inserted in employe table");

    });
};

var insertAdministorTable=function(login,password)
{
var knex=require('./knexfile.js');

    knex('administor').insert(
    {
        login:login,
        password:password
    }).then(function(data,error)
    {
        if(error)console.log(error);
        else
        console.log("successfully inserted in employe logins table");

    });
}
;
var insertStudentAuthentication=function(login,password)
{
var knex=require('./knexfile.js');

    knex('studentLogin').insert(
    {
        name:login,
        password:password
    }).then(function(data,error)
    {
        if(error)console.log(error);
        else
        console.log("successfully inserted in insertStudentAuthentication table");

    });
}

module.exports.insertStudentTable=insertStudentTable;
module.exports.insertFacultyTable=insertFacultyTable;
module.exports.insertAdministorTable=insertAdministorTable;
module.exports.insertStudentAuthentication=insertStudentAuthentication;
module.exports.insertFacultyLoginTable=insertFacultyLoginTable;
