import isEmpty from "../../../utils/isEmpty";
import DAO from "../../../dao";

const edit = async(req, res) => {
  let { username, email, firstName, lastName, roles, id } = req.fields

  let user;

  let errors = {};

  username = username ? username.toLowerCase() : null;
  email = email ? email.toLowerCase() : null;

  if (isEmpty(id)) {
    errors.id = 'id-required';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ status: "error", ...errors });
  }

  try{
    user = await DAO.Users.findUserById(id);
  }catch (e) {
    return res.status(500).json({status:"error", message: 'database-read-error'});
  }

  if (!isEmpty(username)){
    user.username = username;
  }

  if (!isEmpty(email)){
    user.email = email;
  }

  user.firstName = firstName;
  user.lastName = lastName;
  user.roles = roles;

  try{
    user.save();
  }catch (e) {
    return res.status(500).json({status:"error", message: 'database-save-error'});
  }

  res.status(200).json({ status: "success", user });

};

export default edit;