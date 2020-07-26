const userId = "ba405586-3a7f-484b-b5c0-5d1cf5cd9c0e";
export const messageUrl = "http://localhost:5000/messages";
export const userUrl = `http://localhost:5000/user/${userId}`;

export const user = {
  user_uuid: userId,
  first_name: "John",
  last_name: "Doe"
};

export const messages = [{
  message_uuid: "123",
  chat_uuid: "456",
  author_uuid: userId,
  text: "Hi!"
}];