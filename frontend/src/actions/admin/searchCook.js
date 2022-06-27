import axios from 'axios';
import Config from '../../config';

const searchCook = (roles = '') => async (dispatch) => {
  const onSuccess = (response) => {
    dispatch({ type: 'cooks', data: response.data.user });
    console.log(response.data)
    return response;
  };

  const onError = (error) => {
    console.log(error);
    return error;
  };

  try {
    dispatch({ type: 'cooks', data: null });
    const response = await axios.post(`${Config.url}/api/v1/admin/users/search`, {
      roles,
    });
    onSuccess(response);
  } catch (error) {
    onError(error);
  }
};

export default searchCook;