//setTimeout method:In this ,function executes after time mentioned (milliseconds)
var myVar = setTimeout(function()
{
	console.log("After 3 seconds");
},3000);
//setInterval method:In this,function executes infinitely 
var myVar1 =setInterval(function()
{
	var i=0
	console.log("numbers from 0 to 10");
	while(i!=10)
	{
		console.log(i);
		i+=1;
	}
	clearInterval(myVar1)
});
//we can say setImmediate() is not exactly immediate, but the queue containing the callbacks of this, will be executed once in every iteration
var callback1=setTimeout(function()
{
	console.log("callback1 is called");
	
	var Immediate1=setImmediate(function()
	{
		console.log("Completed the callback1");
	})
	console.log("in callback1");

},5000)
var callback2=setTimeout(function()
{
	console.log("callback2 is called");
	var Immediate1=setImmediate(function()
	{
		console.log("Completed the callback2");
	})
},6000)
var callback3=setTimeout(function()
{
	console.log("callback3 is called");
	var Immediate1=setImmediate(function()
	{
		console.log("Completed the callback3");
	})
},5000)