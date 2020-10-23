var app =(function(){
    var showMessages=(err,data)=>{
        if(err!=null){
            alert("Error");
            return;
        }
        data.forEach((item)=>{
            $("#ms").append($("<li>"+item.sender+": "+item.msg+"</li>"));
        });
    }
    return{
        getMessages:function(){
            client.getMessages(showMessages);
        }
    }
})();