import jwtDecode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';


const token = localStorage.getItem('token');
if (token) setAuthToken(token);

const user = token ? jwtDecode(token) : null;

const initialState = {
  token,
  user: {
    ...user,
    name: user ? `${user.firstName} ${user.lastName}` : null,
  },
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        loading: action.loading,
      };
    case 'login':
      return {
        ...state,
        token: action.token,
        user: {
          ...action.user,
          name: action.user ? `${action.user.firstName} ${action.user.lastName}` : null,
        },
      };
    case 'logout':
      return {
        ...state,
        token: null,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;