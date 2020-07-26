import { fetchData } from "./../helpers/fetchData.js";
import { getChatsAndAuthors } from "./../helpers/getChatsAndAuthors.js";

class ChatsController {
  static async getAllChats (req, res) {
    const messages = await fetchData("http://localhost:5000/messages");
    const { chats, unique_authors_uuids } = getChatsAndAuthors(messages);

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

        return res.status(200).json(result);

      })
      .catch(error => res.json(error));
  }
}

export default ChatsController;
