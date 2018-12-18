//call():we can call any function, and explicitly specify what this should reference within the calling function.
var object1={num:25};
var function1=function(a,b)
{
	return this.num+a+b;
}
var value1=function1.call(object1,2,3);//first argument is the object name and remaining are the arguments
console.log(value1)

//apply():It is similar to the call() but only is that the second parameter of the apply() method accepts the arguments to the actual function as an array.

var object2={num:25};
var function2=function(a,b)
{
	return this.num+a+b;
}
var array1=[1,2,3]
var value2=function2.call(object1,array1);//first argument is the object name and remaining must be an array
console.log(value1)

//bind():The bind() method creates a new function that, when called, has its this keyword set to the provided value. 

var object3={num:25};
var function3=function(a,b)
{
	return this.num+a+b;
}
var object4=function3.bind(object3,1,2)//return's the new function instance and calling this ,will execute the function
console.log(object4())