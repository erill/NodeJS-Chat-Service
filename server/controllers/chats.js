import database from "./../createDatabase.js";

class ChatsController {
  static async getAllChats (req, res) {
    const sql = `SELECT m.chat_uuid, m.message_uuid, u.user_uuid, u.first_name || ' ' || u.last_name as user
      FROM message AS m 
      LEFT JOIN user as u 
      ON u.user_uuid = m.author_uuid`;

    database.all(sql, [], (error, rows) => {
      if (error) {
        return res.status(400).json({ message: error.message });
      } 
      let formattedChats = [];

      rows.forEach(row => {
        const index = formattedChats.findIndex(item => item.chat_uuid === row.chat_uuid);        
        if(index === -1) {
          formattedChats = [
            ...formattedChats, 
            {
              chat_uuid: row.chat_uuid,
              chat_messages: new Set().add(row.message_uuid),
              users: new Set().add(row.user_uuid),
            }
          ];
        } else {
          const { chat_uuid, chat_messages, users } = formattedChats[index];
          formattedChats[index] = {
            chat_uuid,
            chat_messages: chat_messages.add(row.message_uuid),
            users: users.add(row.user_uuid),
          }
        }
      });

      const result = formattedChats.map(chat => {
        const users = Array.from(chat.users).map(userId => (
          userId ? rows.find(row => row.user_uuid === userId).user : "Anonymous"
        ));

        return ({
          chat_uuid: chat.chat_uuid,
          messages_count: chat.chat_messages.size,
          users,
        })
      });

      return res.status(200).json(result);
    });
  }
}

export default ChatsController;
