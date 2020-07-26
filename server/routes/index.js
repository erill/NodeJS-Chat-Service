import express from "express";
const routes = express.Router();

import MessagesController from "./../controllers/messages.js";
import UserController from "./../controllers/user.js";
import ChatsController from "./../controllers/chats.js";

routes.get("/messages", MessagesController.getAllMessages);
routes.get("/user/:id", UserController.getUserById);
routes.get("/chats", ChatsController.getAllChats);

export default routes;