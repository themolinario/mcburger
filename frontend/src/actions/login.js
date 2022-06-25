import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Config from '../config';
import setAuthToken from '../utils/setAuthToken';
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter';



const login = ({
                 username, password, navigate, actions
               }) => async (dispatch) => {
  const onSuccess = (response) => {
    const { token } = response.data;
    const data = jwtDecode(token);
    dispatch({ type: 'login', token, user: data});
    setAuthToken(token);
    localStorage.setItem('token', token);
    if (data.roles === 'root') {
      navigate('/customer/menu', {replace: true});
    } else {
      navigate('/customer/menu', {replace: true});
    }
    return response;
  };

  const onError = (error) => {
    if (error.response) {
      const { data } = error.response;
      if (data.username) actions.setFieldError('username', capitalizeFirstLetter(data.username));
      if (data.password) actions.setFieldError('password', capitalizeFirstLetter(data.password));
    }
    return error;
  };

  actions.setSubmitting(true);

  try {
    const response = await axios.post(`${Config.url}/api/v1/auth/login`, { username, password });
    onSuccess(response);
  } catch (error) {
    onError(error);
  }

  actions.setSubmitting(false);
};

export default login;