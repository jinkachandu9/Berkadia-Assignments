//map:We use the map for the  to modify/add properties of each object, other times we might have an array of strings that we which to turn all of them lower case. 

var map1=[1,2,3]
var newMap=map1.map(i=>i*2)//When you call map on an array, it executes that callback on every element within it, returning a new array with all of the values that the callback returned.
//console.log(newMap);
//more clearly
var newMap1=map1.map(function(value,index,originalArray)//value/index/orginalArray are optional
{
	return value*2;//if we not return the values it assign as undefined
});
console.log(newMap1)
/*Advantages:
1.we not bother about creating newArray and pushing the element into it ,
2.no need to write loop ,it internally iterates
*/

//-------------------------------------------------------------------------------------------------------

//filter:Just filtering the values based on condition and returing the values to new array
var filter1=[1,2,3,4,5,6]
var newFilter=filter1.filter(i=>i%2!=0)//When you call filter on an array, it executes that callback on every element within it, returning the element which satisfy the condition to a new array
console.log("oddnumbers")
console.log(newFilter)
var newFilter1=filter1.filter(function(value,index,orginalArray)//value/index/orginalArray are optional
{
	return value%2!=0;
});
console.log(newFilter1)

//-------------------------------------------------------------------------------------------------------

//reduce:Taking the input as array and reducing into single value and callback function as new argument accumulator
//accumulates:(it accumulates all the return values. Its value is the accumulation of the previous returned accumulations

var originalArray=[1,2,3,4,5,6];
var sumValue=originalArray.reduce(function(accumulator,value,index,originalArray)//all arguments are optional and first accumulator value is first element of array
{
	return accumulator+value;//without return statement ,it takes undefined
});
console.log("output for reduce value is",sumValue);
