//rowser-compatible JavaScript is in comments
let numbers=[2,3,4,5,6,7,8,9];//var number=[2,4,5,6,7,8,9]
numbers.map(n=>n**2)//numbers.map(function(n){ Math.pow(n,2)})
var [a,,b]=[1,2,3]//var _ref=[1,2,3],a=_ref[0],b=_ref[2];
var foo=function(i)
{
    console.log(i);
}
foo([...numbers]);//foo([].concat(x))
//output:[ 2, 3, 4, 5, 6, 7, 8, 9 ]
