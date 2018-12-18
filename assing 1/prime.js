var readline=require("readline");
var v1=readline.createInterface(process.stdin,process.stdout);
v1.question("enter the number",function(number1)
{
    for(count=2;count<=Math.sqrt(number1);count=count+1)
      if(number1%count==0)
      {
        console.log(`${number1} is not a prime`);
        process.exit(0);
      }
      console.log(`${number1} is  a prime`);
      v1.close();
});
/*
node prime.js
enter the number5
5 is  a prime
*/
