export const getChatsAndAuthors = (messages) => {
  let chats = [];
  let unique_authors_uuids = new Set();

  messages && messages.length > 0 && messages.forEach(message => {
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

  return {
    chats,
    unique_authors_uuids
  }
}