import DAO from "../../../dao";

const remove = async (req, res) => {
  let { id } = req.fields;

  let user;

  try {
    user = await DAO.Users.findUserById(id);
  } catch (e) {
    return res.status(500).json({
      id: "database-read-error",
    });
  }

  if (!user) {
    return res.status(400).json({
      id: "id-not-found",
    });
  }

  try {
    user = await DAO.Users.removeUserById(id);
  } catch (e) {
    return res.status(500).json({
      id: "database-read-error",
    });
  }

  res.status(200).json({ status: "success", user });
};

export default remove;