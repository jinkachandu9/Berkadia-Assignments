var readline=require("readline");
var v1=readline.createInterface(process.stdin,process.stdout);
array=[]
array[0]=0;
array[1]=1;
function fibonacci(number)
{
  if(number==0)
  {
    return 0;
  }
  else if(number==1)
  {
     return 1;
  }
  else
  {
    result=0;
  //  console.log(number-2,array.length);
    if(number-2>=array.length){
      array[number-2]=fibonacci(number-2);
    }
    //console.log(number-1,array.length);
    if(number-1>=array.length){
      array[number-1]=fibonacci(number-1);
    }
    return array[number-1]+array[number-2];
  }
}
v1.question("enter the number",function(number1)
{
      console.log(fibonacci(number1-1));
      console.log(array)
      v1.close();
});
/*
node fibonacci.js
enter the number5
3
[ 0, 1, 1, 2 ]
*/
