var client = (function(){
    return{
        getMessages:function(callback){
            $.get("/message")
            .then((data)=>callback(null,data),e=>callback(e,null));
        }
    }
})();