var file1=require("fs");
function merge(filename)
{
    file1.readFile(filename,'utf8',function(err,data)
    {
        file1.appendFile('write.txt',data+"\n",function(error)
        {
            if(error) throw error;
            console.log(filename+"succssfully written to write.txt");
        });
    });
}
merge('file1.txt');
merge('file2.txt');
merge('file3.txt');

