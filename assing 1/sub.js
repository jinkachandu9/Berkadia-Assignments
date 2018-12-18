var readline=require("readline");
var v1=readline.createInterface(process.stdin,process.stdout);
var count=0,sum=0;
v1.question("enter the first number",function(number1)
{
  v1.question("enter the second number",function(number2)
  {
    console.log(`substraction of ${number1} and ${number2} is ${Number(number1)-Number(number2)}`);
    v1.close();
  });
});
/*
node sub.js
enter the first number5
enter the second number7
substraction of 5 and 7 is -2
*/
