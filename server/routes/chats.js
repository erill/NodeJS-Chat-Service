const express = require("express");
const router = express.Router();
const { fetchData } = require("./../helpers/fetchData");

let chats = [];
let unique_authors_uuids = new Set();

const getChatsWithMessagesAndAuthors = (messages) => {
  messages.forEach(message => {
    const index = chats.findIndex(item => item.chat_uuid === message.chat_uuid);
    unique_authors_uuids.add(message.author_uuid);
    
    if(index === -1) {
      chats = [
        ...chats, 
        {
          chat_uuid: message.chat_uuid,
          chat_messages: new Set().add(message.message_uuid),
          chat_authors: new Set().add(message.author_uuid),
        }
      ];
    } else {
      const { chat_uuid, chat_messages, chat_authors } = chats[index];
      chats[index] = {
        chat_uuid,
        chat_messages: chat_messages.add(message.message_uuid),
        chat_authors: chat_authors.add(message.author_uuid),
      }
    }
  });
}

router.get("/", async (req, res, next) => {
  const messages = await fetchData("http://localhost:5000/messages");
  getChatsWithMessagesAndAuthors(messages);
  
  // Get user names
  let promises = [];
  for(let id of unique_authors_uuids) {
    promises = [...promises, fetchData(`http://localhost:5000/user/${id}`)];
  }

  Promise.all(promises)
    .then(response_users => {
      const result = chats.map(chat => {
        let users_list = [];
        
        for(let user_uuid of chat.chat_authors) {
          const user = response_users.find(user => user.user_uuid === user_uuid);
          users_list = [
            ...users_list,
            user ? `${user.first_name} ${user.last_name}` : "Anonymous"
          ];
        }

        return {
          chat_uuid: chat.chat_uuid,
          messages_count: chat.chat_messages.size,
          users: users_list, 
        }
      });

      res.json(result);

    })
    .catch(error => console.log(error));
});

module.exports = router;