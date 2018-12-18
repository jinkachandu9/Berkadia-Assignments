
//undefined: any variable does not initiated are called undefined 

var undefinedVariable;
console.log(undefinedVariable)
console.log(typeof(undefinedVariable))

//null:It can be assigned to a variable to represent no value. It is an assignment value.
var objectVariable=null;
console.log(objectVariable)
console.log(typeof(objectVariable))

//undeclared:variable which we can't be declared
//browers throws an error if not declared
if(typeof(undeclaredVariable)=='undefined')
{
	console.log("undeclaredVariable is undefined");
}
