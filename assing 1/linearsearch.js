var filename=require("readline-sync");
var number=filename.question("enter the number of element");
array=[]
for(i=0;i<number;i++)
array[i]=Number(filename.question(`enter the ${i+1} element `));
number=Number(filename.question(`enter the element to search`));
for(i=0;i<number;i++)
if(array[i]==number)
  console.log(`element ${number} found in ${i} index`);
/*  node linearsearch.js
  enter the number of element5
  enter the 1 element 1
  enter the 2 element 2
  enter the 3 element 3
  enter the 4 element 4
  enter the 5 element 5
  enter the element to search3
  element 3 found in 2 index*/
