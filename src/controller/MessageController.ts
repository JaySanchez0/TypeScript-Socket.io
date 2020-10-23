import MessageService from "../services/MessageService";
import {Express,Request,Response} from 'express';
import Message from "../model/Message";

export default class MessageController{

    private service:MessageService;

    constructor(service:MessageService,server:Express){
        this.service = service;
        this.router(server);
    }

    router(server:Express){
        server.post("/message",(req,res)=>this.addMessage(req,res));
        server.get("/message",(req,res)=>this.getMessages(req,res));
    }

    addMessage(request:Request,response:Response){
        try{
            this.service.addMessage(<Message> request.body);
            response.status(200);
            response.send("");
        }catch(e){
            response.status(400);
            response.send("");
        }
    }

    getMessages(request:Request,response:Response):void{
        response.send(this.service.getMessages());
    }

}