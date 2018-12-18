var readline=require("readline");
var v1=readline.createInterface(process.stdin,process.stdout);
function factorial(number)
{
  if(number==1)
  return 1
  return number*factorial(number-1);
}
v1.question("enter the positive number",function(number1)
{
      console.log(factorial(number1));
      v1.close();
});
/*
node facto.js
enter the positive number5
120
*/
