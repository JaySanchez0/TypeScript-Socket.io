import {Server,Socket} from 'socket.io';
import MessageService from '../services/MessageService';
export default class MessageWebSocketController{

    private service:MessageService;

    private socketServer:Server;

    private client:Socket;

    constructor(service:MessageService,socketServer:Server,client:Socket){
        this.service = service;
        this.client=client;
        this.socketServer=socketServer;
        this.events();
    }

    events(){
        this.client.on("message",(data)=>this.addMenssage(data));
    }

    addMenssage(data:any){
        try{
            this.service.addMessage(data);
            this.socketServer.emit("message",data);
        }catch(e){
            console.log(e);
        }
    }


}