var readline=require("readline-sync");
var number=readline.question("enter the number of elements in array");
for(i=0;i<number;i++)
{
    temp=readline.question(`enter the ${Number(i)+1} elements`);
    if(i==0)
    min=max=temp;
    else {
      if(min>temp)
      min=temp;
      else if(max<temp)
      max=temp;
    }
}
console.log(`maxium element is ${max} and min element is ${min}`);
/*
node minmax.js
enter the number of elements in array5
enter the 1 elements1
enter the 2 elements2
enter the 3 elements3
enter the 4 elements4
enter the 5 elements5
maxium element is 5 and min element is 1
*/
