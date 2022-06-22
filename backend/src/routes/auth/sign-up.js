import isEmpty from '../../utils/isEmpty';
import DAO from '../../dao';
import regexUsername from "../../utils/regexUsername";
import validator from "validator";
import argon2 from "argon2";

const signUp = async(req, res) => {
  let { username, password, email, firstName, lastName, roles, } = req.fields;


  let user;

  let errors = {};

  username = username ? username.toLowerCase() : null;
  email = email ? email.toLowerCase() : null;

  if (isEmpty(firstName)) {
    errors.firstName = 'first-name-required';
  }

  if (isEmpty(lastName)) {
    errors.lastName = 'last-name-required';
  }

  if (isEmpty(username)) {
    errors.username = 'username-required';
  } else {
    username = regexUsername(username);

    if (await DAO.Users.findUserByUsername(username)) {
      errors.username = 'username-already-in-use';
    }
  }


  if (isEmpty(email)) {
    errors.email = 'email-required';
  } else {
    if (!validator.isEmail(email)) {
      errors.email = 'invalid-email';
    } else {
        if (await DAO.Users.findUserByEmail(email)) {
          errors.email = 'email-already-in-use';
        }
      }
    }


  if (isEmpty(password)) {
    errors.password = 'password-required';
  } else {
    if (password.length < 6) {
      errors.password = 'password-too-short';
    }
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ status: "error", ...errors });
  }

  try {
    user = await DAO.Users.insertUser({
      firstName,
      lastName,
      username,
      email,
      password,
      roles: roles || 'standard',
    });
  } catch (e) {
    return res.status(500).json({ status: 'error', message: 'database write error', generic: true });
  }

  user = user.toObject();
  user.id = user._id;
  user.fullName = `${user.firstName} ${user.lastName}`;

  res.status(200).json({ status: "success", user });
  return argon2.hash(user.password, password);
};


export default signUp;