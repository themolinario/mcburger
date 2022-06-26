import setAuthToken from '../utils/setAuthToken';

const logout = ({ navigate }) => (dispatch) => {
  dispatch({ type: 'logout' });
  setAuthToken(null);
  localStorage.removeItem('token');
  navigate('/', { replace: true });
};

export default logout;