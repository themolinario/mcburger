import DAO from "../../dao";

const user = async (req, res) => {
  const response = await DAO.Users.findUserById(req.user.id);
  res.status(200).json(response);
};

export default user;