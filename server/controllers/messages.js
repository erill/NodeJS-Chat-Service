import database from "./../createDatabase.js";

class MessagesController {
  static getAllMessages(req, res) {
    const sql = "SELECT * FROM message";

    database.all(sql, [], (error, rows) => {
      if (error) {
        return res.status(400).json({ message: error.message });
      }
      return res.status(200).json(rows);
    });
  };  

}

export default MessagesController;