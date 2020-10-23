import express,{Express} from 'express';
import io from 'socket.io';
import http from 'http';
import MessageController from './controller/MessageController';
import MessageService from './services/MessageService';
import MessageWebSocketController from './websocket/MessageWebSocketController';

let server:Express = express();

server.use(express.static("src/resources/static"));

let httpServer = http.createServer(server);

let serverSocket:io.Server = io(httpServer);

let service:MessageService = new MessageService();

let messageController:MessageController = new MessageController(service,server);

serverSocket.on("connection",(client:io.Socket)=>{
    let messageSocket:MessageWebSocketController = new MessageWebSocketController(service,serverSocket,client);
});


var port:string = process.env.PORT || "80";

httpServer.listen(parseInt(port),"0.0.0.0",()=>{
    console.log("Listen");
});