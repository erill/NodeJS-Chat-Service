const users = [{
  user_uuid: "ba405586-3a7f-484b-b5c0-5d1cf5cd9c0e",
  first_name: "John",
  last_name: "Doe"
}, {
  user_uuid: "ce0d0300-716b-4ba8-8f2f-d01d1c2576a4",
  first_name: "Jan",
  last_name: "Nowak"
}, {
  user_uuid: "9aa4dc78-cdc5-11ea-87d0-0242ac130003",
  first_name: "Joe",
  last_name: "Foo"
}, {
  user_uuid: "9e3cd552-cdc5-11ea-87d0-0242ac130003",
  first_name: "Jan",
  last_name: "Kowalski"
}, {
  user_uuid: "a1392364-cdc5-11ea-87d0-0242ac130003",
  first_name: "Sam",
  last_name: "Brown"
}, {
  user_uuid: "b1672364-cdc5-11ea-87d0-0242ac130003",
  first_name: "Sam",
  last_name: "Brown"
}];

const messages = [{
  message_uuid: "3b777c22-5f7d-4552-8294-7363c68f6682",
  chat_uuid: "802e9b88-60f2-43a1-b8b9-bad33afb0f7b",
  author_uuid: "ba405586-3a7f-484b-b5c0-5d1cf5cd9c0e",
  text: "Hi!"
}, {
  message_uuid: "ed557979-5007-4d2c-a3ab-1d58b5603b83",
  chat_uuid: "c4ad5026-b85c-45fa-8670-82af54623aab",
  author_uuid: "ce0d0300-716b-4ba8-8f2f-d01d1c2576a4",
  text: "See you later!"
}, {
  message_uuid: "c358e40f-ab91-4fcb-a779-5096416cc811",
  chat_uuid: "802e9b88-60f2-43a1-b8b9-bad33afb0f7b",
  author_uuid: "ba405586-3a7f-484b-b5c0-5d1cf5cd9c0e",
  text: "How's going?"
}, {
  message_uuid: "2203b590-705e-46c5-9b7d-698c67ecfaa4",
  chat_uuid: "802e9b88-60f2-43a1-b8b9-bad33afb0f7b",
  author_uuid: "3017eb96-a211-417b-ab96-6d7286cc0d5c",
  text: "Hey, very well!"
}];

module.exports = {
  users,
  messages,
}