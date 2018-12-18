//Async function:
var outerFunction=async function()
{
	var promises1=new Promise(function(resolve,reject)
	{
	setTimeout(function()
	{               
		console.log("I must execute first");
	},5000);
	});
	var  temp=await promises1;
	console.log("I must wait 5 seconds to execute");
}
outerFunction()
console.log("I not bother about asyn function ,I will execute");