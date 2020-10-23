var cli = (function(){
    var con = io();
    con.on("message",(data)=>{
        $("#ms").append($("<li>"+data.sender+": "+data.msg+"</li>"));
    });
    return {
        addMessage:()=>{
            con.emit("message",{sender:$("#sender").val(),msg:$("#msg").val()});
        }
    }
})();