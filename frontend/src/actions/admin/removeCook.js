import axios from 'axios';
import Config from '../../config';
import searchCook from "./searchCook";

const removeCook = ({
                      id, actions, setOpen
                    }) => async (dispatch) => {
  actions.setSubmitting(true);

  const onSuccess = (response) => {
    dispatch(searchCook('cook'));
    const { result } = response.data;
    dispatch({ type: 'cooks-deleted', user: result });
    dispatch({ type: 'snack', content: `cuoco @${result.username} eliminato`, severity: 'success' });
    setOpen(false);

    return response;
  };

  const onError = (error) => {
    if (error.response) {
      console.log(error.response);
    }
    dispatch({ type: 'snack', content: 'error while deleting user', severity: 'error' });
    return error;
  };

  try {
    const response = await axios.post(`${Config.url}/api/v1/admin/users/remove`, {
      id,
    });
    onSuccess(response);
  } catch (error) {
    onError(error);
  }

  actions.setSubmitting(false);
};

export default removeCook;