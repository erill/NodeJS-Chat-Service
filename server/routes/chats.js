const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

const mockedData = [{
  chat_uuid: "66019eab-d2cb-4bb6-a873-aa8acf2d116d",
  messages_cound: 6,
  users: [
    "Anonymous",
    "John Doe",
    "Will Smith",
  ]
}];

const getData = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

router.get("/", async (req, res, next) => {
  const messages = await getData("http://localhost:5000/messages");

  let results = [];
  messages.forEach(message => {
    const index = results.findIndex(item => item.chat_uuid === message.chat_uuid);
    if(index === -1) {
      results = [
        ...results, 
        {
          chat_uuid: message.chat_uuid,
          chat_messages: new Set().add(message.message_uuid),
          chat_authors: new Set().add(message.author_uuid),
        }
      ];
    } else {
      const { chat_uuid, chat_messages, chat_authors } = results[index];
      results[index] = {
        chat_uuid,
        chat_messages: chat_messages.add(message.message_uuid),
        chat_authors: chat_authors.add(message.author_uuid),
      }
    }
  });



  console.log("mm", results)
  res.json(results);
});

module.exports = router;