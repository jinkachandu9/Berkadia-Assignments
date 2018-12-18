var controller=require("fs");
function read(path)
{
return new Promise(function(resolve,reject)
{
    controller.readFile(path,"utf8",function(error,data)
    {
    if(error)
    {
        reject(error);
        
    }
    else{
        resolve(data);
    }
    });   
}).then(function(fromResolve)
{
    controller.appendFile("write.txt",fromResolve+"\n",function(error)
    {
        if(error)console.log("Problem in writing file");
        console.log(path+" writeen file successfully")
    });
}).catch(function(formReject)
{
    console.log(formReject);
});
}
read("file1.txt");
read("file2.txt");
read("file3.txt");