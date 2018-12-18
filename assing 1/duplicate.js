var readline=require("readline-sync");
var number=readline.question("enter the number of elements");
array=[]
wodarray=[]//WITHOUTDUPLICATEARRAY
duplicatearray=[]
for(i=0;i<number;i++)
{
  temp=readline.question(`enter the ${i+1} term`);
  array.push(temp);
}
for(i=0;i<number;i++)
{if(wodarray.includes(array[i])==false)
wodarray.push(array[i]);
else {
  duplicatearray.push(array[i]);
}
}
console.log(`array ${array} without duplicate is ${wodarray}`);
console.log(`${duplicatearray}`);
/*
enter the number of elements5
enter the 1 term1
enter the 2 term2
enter the 3 term1
enter the 4 term2
enter the 5 term1
array 1,2,1,2,1 without duplicate is 1,2
1,2,1
*/
