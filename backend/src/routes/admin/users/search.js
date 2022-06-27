import DAO from "../../../dao";

const search = async(req, res) => {
  let { roles } = req.fields;

  let user;

  try {
    user = await DAO.Users.findUsersByRoles(roles);
  } catch (e) {
    return res.status(500).json({
      username: "database-read-error",
    });
  }


  if (!user) {
    return res.status(400).json({
      username: "users-not-found",
    });
  }

  res.status(200).json({ status: "success", user});
};

export default search;