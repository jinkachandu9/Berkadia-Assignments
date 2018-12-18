var file=require('fs');
var readingfile;
readingfile=file.readFileSync("file1.txt",'utf8');
file.writeFileSync("write.txt",readingfile+"\n");
readingfile=file.readFileSync("file2.txt",'utf8');
file.appendFileSync("write.txt",readingfile+"\n");
readingfile=file.readFileSync("file3.txt","utf8");
file.appendFileSync("write.txt",readingfile+"\n");