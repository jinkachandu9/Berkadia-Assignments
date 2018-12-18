var base=function()
{
}
base.prototype.passing=function()
{
	if(this.marks>=36)
		console.log("passed the examinations");
	else 
		console.log("failed in the examination");
}
var child=function(name,marks)
{
	this.name=name;
	this.marks=marks;
}
var base1=new base();

child.prototype=base1;//acquiring the base1 class properties
var child1=new child("chandu1",45);
child1.passing();
var child2=new child("ram",32);
child2.passing();