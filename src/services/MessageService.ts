import Message from '../model/Message';
export default class MessageService{
    private messages:Message[];
    constructor(){
        this.messages=[];
    }

    addMessage(message:Message):void{
        this.messages.push(message);
    }

    getMessages():Message[]{
        return this.messages;
    }

}