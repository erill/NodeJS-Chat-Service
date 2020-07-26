import { messages } from "./mockedData.js";

class MessagesController {
  static getAllMessages(req, res) {
    return res.status(200).json(messages);
  };  
}

export default MessagesController;