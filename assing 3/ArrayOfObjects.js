//Array of objects

var Person=function(name,no)
{
	this.name=name;
	this.no=no;
};
var object1=new Person("chandu","22");
var object2=new Person("ganesh","12");
var object3=new Person("murali","15");
var arrayOfObjects=[object1,object2,object3];


//for LOOP :basic loop which can access the element by the index 

console.log("Array of objects with for loop:")
for(i=0;i<3;i++)
	console.log(arrayOfObjects[i]);

//-------------------------------------------------------------------------------------------------------

//forEach :This is array method which can directly access the elements 

//It is only used in array,sets and maps

//we simply have to specify a callback function. This callback will be executed on each element in the array

console.log("Array of objecects in foreach loop");
arrayOfObjects.forEach(function(element)
{
	console.log(element);
});

//-------------------------------------------------------------------------------------------------------

//forIn: Example1 and explanation:

console.log("Array of object in forin loop");
for(element in arrayOfObjects){
	console.log(arrayOfObjects[element]);
//At each iteration index is assigned to element	
}

//Example2 and explanation:
var student1={name:"chandu",number:22};
for(element1 in student1)
{
	console.log(student1[element1]);
//At each iteration string is key is assigned in the element1
}
//forEach is only for array,sets and maps but forIn is also for objects too

//-------------------------------------------------------------------------------------------------------

//The forof:statement creates a loop iterating over iterable objects, including: built-in String, Array, Array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables

//most important is that it is used for object specific iterator (predefined:array ,strings,maps and userdefined)
s
console.log("maps iterations by for-of");
var map1=new Map([["chandu","22"],["ram","25"]]);
for([key,value] of map1)
{
	console.log(`${key} has value ${value}`)
}