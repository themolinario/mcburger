import axios from 'axios';

const getUpdates = () => async (dispatch) => {
  const onSuccess = (response) => {
    dispatch({ type: 'updates', data: response.data });
    return response;
  };

  const onError = (error) => {
    console.log(error);
    return error;
  };

  try {
    dispatch({ type: 'updates', data: [] });
    const response = await axios.post('https://crumble.honeyside.it/api/updates');
    onSuccess(response);
  } catch (error) {
    onError(error);
  }
};

export default getUpdates;