//Immediately Invokable Function Expressions:self-executing anonymous function,
(function()
{
	console.log("HI i am executing myself");
})();
/*
We use this to avoid global scope to function and variables inside it.

IIFE are name-less .so,it is impossible to call this function

In the above example, once the code is executed, following events occur:

A function Instance is created.
Function is Executed.
Function created is discarded.


IIFE has two parts:
1.function Expressions
2.function Invocation : ()invoking the function 

*/
//We can pass the arguments to IIFE 
name="jinka chandu";
job="berkadia";
(function(name,job)
{
	console.log("My name is",name," and i am working in ",job);
})(name,job);


