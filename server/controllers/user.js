import { users } from "./mockedData.js";

class UserController {
  static getUserById(req, res) {
    const { id } = req.params;
    const user = users.find(row => row.user_uuid === id);

    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  }
}

export default UserController;