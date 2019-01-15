var knex=require('../knexPutOpertions/knexfile')
var bookshelf=require('bookshelf')(knex);
var students=bookshelf.Model.extend({
    tableName:"students"
});
var studentLogin=bookshelf.Model.extend({
    tableName:"studentLogin"
});
var faculty=bookshelf.Model.extend({
    tableName:"faculty"
});
var facultyLogin=bookshelf.Model.extend({
    tableName:"facultyLogin"
});
var administor=bookshelf.Model.extend({
    tableName:"administor"
});
module.exports.students=students;
module.exports.faculty=faculty;
module.exports.studentLogin=studentLogin;
module.exports.facultyLogin=facultyLogin;
module.exports.administor=administor;