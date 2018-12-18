var socket=io.connect("http://localhost:4000/");

var message=document.getElementById("message");
var output=document.getElementById("output");
var handle=document.getElementById("handle");
var send=document.getElementById("send");
send.addEventListener('click',function()
{
    socket.emit('chat',{
        message:message.value,
        handle:handle.value
    });
});
socket.on('chat',function(data)
{
    output.innerHTML+="\n"+data.handle+":"+data.message;
})