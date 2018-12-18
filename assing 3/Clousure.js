/*	Closure in JavaScript :
		a closure gives you access to an outer function's scope from an inner function.
	Types:
		1.even after the outer function has returned, the inner function still has access to the outer function’s variables.
		2.Closures store references to the outer function’s variables
	
*/
//1.even after the outer function has returned, the inner function still has access to the outer function’s variables.
var outside=function()
{
		var variable=10
	var inside=function()
	{
	
		return variable
	};
	return inside
};
var object=new outside();
console.log("output1=",object());

//Closures store references to the outer function’s variables 
var outside1=function()
{
	var variable=10
	return {
		getId1:function()
		{
			return variable;
		},
		setId1:function(variable)
		{
			this.variable=variable;
		}
		
	}
}
var object=new outside1();
console.log("output2=",object.getId1())
object.setId1(20)
console.log("updated value is=",object.getId1())