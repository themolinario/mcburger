import setAuthToken from '../utils/setAuthToken';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Config from '../config';
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter';
import login from "./login";

const signup = ({
                 username, password, email, firstName, lastName, navigate, actions
               }) => async (dispatch) => {
  const onSuccess = (response) => {
    const { token } = response.data;
    dispatch(login(username));
    localStorage.setItem('token', token);
    setAuthToken(token);
    navigate('/customer/menu', { replace: true });
    return response;
  };

  const onError = (error) => {
    if (error.response) {
      const { data } = error.response;
      if (data.username) actions.setFieldError('username', capitalizeFirstLetter(data.username));
      if (data.password) actions.setFieldError('password', capitalizeFirstLetter(data.password));
      if (data.email) actions.setFieldError('email');
      if (data.firstName) actions.setFieldError('firstName', capitalizeFirstLetter(data.firstName));
      if (data.lastName) actions.setFieldError('lastName', capitalizeFirstLetter(data.lastName));
    }
    return error;
  };

  actions.setSubmitting(true);

  try {
    const response = await axios.post(`${Config.url}/api/v1/auth/sign-up`, { username, password, email, firstName, lastName });
    onSuccess(response);
  } catch (error) {
    onError(error);
  }

  actions.setSubmitting(false);
};

export default signup;