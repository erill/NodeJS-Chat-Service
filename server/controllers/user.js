import database from "./../createDatabase.js";

class UserController {
  static getUserById(req, res) {
    const sql = "SELECT * FROM user WHERE user.user_uuid = ?";
    const params = [req.params.id];

    database.all(sql, params, (error, rows) => {
      if (error) {
        return res.status(400).json({ message: error.message });
      } else if (rows.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json(rows[0]);
    });
  }
}

export default UserController;