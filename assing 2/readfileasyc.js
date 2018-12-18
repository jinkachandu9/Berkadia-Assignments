var file1=require('fs')
file1.readFile('file1.txt','utf8',function(errs,data)
{
    file1.appendFile('write.txt',data+"\n",function(error)
    {
        if(error) throw error;
        console.log("file1.txt successfully written to write.txt");
    });
});
file1.readFile('file2.txt','utf8',function(err,data)
{
    file1.appendFile('write.txt',data+"\n",function(error)
    {
        if(error) throw error;
        console.log("file2.txt succssfully written to write.txt");
    });
});
file1.readFile('file3.txt','utf8',function(err,data)
{
    file1.appendFile('write.txt',data+"\n",function(error)
    {
        if(error) throw error;
        console.log("file3.txt succssfully written to write.txt");
    });
});