var readline=require("readline-sync");
var number=readline.question("enter the number of elements");
array=[]
for(i=0;i<number;i++)
array.push(Number(readline.question(`enter the ${i+1} term`)));
for(i=0;i<number;i++)
for(j=i+1;j<number;j++)
if(array[i]>array[j])
{
  array[i]=array[i]+array[j];
  array[j]=array[i]-array[j];
  array[i]=array[i]-array[j];
}
console.log(`sorted array is ${array}`);
/*node sort.js
enter the number of elements5
enter the 1 term4
enter the 2 term7
enter the 3 term5
enter the 4 term6
enter the 5 term2
sorted array is 2,4,5,6,7*/
