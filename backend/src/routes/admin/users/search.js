import DAO from "../../../dao";
import Utils from "../../../utils";

const search = async(req, res) => {
  let { username } = req.fields;

  username = Utils.regexUsername(username);
  let user;

  try {
    user = await DAO.Users.findUserByUsername(username);
  } catch (e) {
    return res.status(500).json({
      username: "database-read-error",
    });
  }

  if (!user) {
    try {
      user = await DAO.Users.findUserByEmail(email);
    } catch (e) {
      return res.status(500).json({
        username: "database-read-error",
      });
    }
  }


  if (!user) {
    return res.status(400).json({
      username: "user-not-found",
    });
  }

  res.status(200).json({ status: "success", user});
};

export default search;