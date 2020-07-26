import sqlite3 from "sqlite3";
import { messages, users } from "./helpers/mockedData.js";

const verbose = sqlite3.verbose();
const DBSOURCE = "database.sqlite";

let database = new verbose.Database(DBSOURCE, (error) => {
  if (error) {
    // Cannot open database
    throw error;
  } else {

    database.run(`CREATE TABLE user (user_uuid TEXT PRIMARY KEY, first_name text, last_name text)`,
    (error) => {
      if (error) {
        // Table already created
      } else {
        // Table just created, creating some rows
        const insert = 'INSERT INTO user (user_uuid, first_name, last_name) VALUES (?,?,?)';
        users.forEach(user => 
          database.run(insert, [user.user_uuid, user.first_name, user.last_name])
        );
      }
    });  

    database.run(`CREATE TABLE message (message_uuid TEXT PRIMARY KEY, chat_uuid TEXT KEY, author_uuid TEXT KEY, text text)`,
    (error) => {
      if (error) {
        // Table already created
      } else {
        // Table just created, creating some rows
        const insert = 'INSERT INTO message (message_uuid, chat_uuid, author_uuid, text) VALUES (?,?,?,?)';
        messages.forEach(message => 
          database.run(insert, [message.message_uuid, message.chat_uuid, message.author_uuid, message.text])
        );
      }
    });
  }
});


export default database;