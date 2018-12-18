//object literals 
var object={
	prop1:"hi",
	prop2:"bye"
}
console.log(object);
 
//object by method 
var object1=Object.create({},{
	prop1:{
		writeable:true,
		enumerable:true,
		configurable:true,
		value:"hi"
	}
}
);
console.log(object1)

//object by function 
var sample=function(value1,value2)
{
	this.value1=value1;
	this.value2=value2;
}
var object2=new sample("hi","bye");
console.log(object2)

//objects creation by factory method with clouser
var functionname=function(value1,value2)
{
	let v1=value1;
	let v2=value2;
	return {
		v1,v2
	}
}
var object3=new functionname("hi","bye");
console.log(object3)

//objects creation by ClassKeyword
class name{
	constructor(v1,v2){
		this.p1=v1;
		this.p2=v2;
	}
}
var object4=new name("hi","bye");
console.log(object4);