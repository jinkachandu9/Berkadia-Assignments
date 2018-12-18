//indexOf:To find the index of (character / if string(first letter of string))


var string1="I am in berkadia";
console.log(string1)
var index=string1.indexOf("i");
console.log(index,"index of i in I am in berkadia");

//lastIndex:To find the index of character from lastChild

var lastIndex=string1.lastIndexOf("i");
console.log(lastIndex,"last index of i in I am in berkadia");

//-------------------------------------------------------------------------------------------------------

//substr and slice:breaking the string into small part noting but slicing

var subString=string1.substr(8,3);//Arguments has starting index and length
console.log("substring from index 8 and length 3 is ",subString)

var subString1=string1.slice(11,15)//Arguments has starting index and ending index
console.log("substring from index 11 to 15 is ",subString1)

//-------------------------------------------------------------------------------------------------------

//split: converting the string into array by spliting 

var splitArray=string1.split(" ")//spliting the string by spacing
console.log(splitArray)

//join():It is used to add the elements by some string mentioned in parameters

var newString4=splitArray.join("+");
console.log(newString4)

//-------------------------------------------------------------------------------------------------------

//fromCharCode:create the string based on unicode given as parameters

var newString=String.fromCharCode(97,98,99,100,101);//number of arguments are flexible and it works even no arguments
console.log("string from unicode",newString);

//-------------------------------------------------------------------------------------------------------
//toUpperCase:convert the string into uppercase and toLowerCase is used to convert into lowercase

var newString1=string1.toUpperCase()
console.log(newString1)

var newString2=newString1.toLowerCase();
console.log(newString2)

//-------------------------------------------------------------------------------------------------------

//search:It search for string or regularExpression
//If found return the index ,not found return -1

var newValue=string1.search("aio")
console.log(newValue)

//-------------------------------------------------------------------------------------------------------

//length:To find the length of string /array

var newLength=string1.length
console.log("length of ",string1,newLength);

var array=[1,2,3]
console.log("length of ",array,array.length)

//-------------------------------------------------------------------------------------------------------

//The JavaScript trim() method removes white space from both ends of a string, but not anywhere in between.

var string5="         i am not trim         "
console.log(string5);
console.log(string5.trim());

//-------------------------------------------------------------------------------------------------------

//reverse():It is used to reverse the array 

var array2=["a","b","c"]
console.log("before reversing",array2);
console.log("after reversing ",array2.reverse());