import axios from 'axios';
import Config from '../../config';

const searchProducts = (title = '') => async (dispatch) => {
  const onSuccess = (response) => {
    dispatch({ type: 'products', data: response.data.products });
    console.log(response.data)
    return response;
  };

  const onError = (error) => {
    console.log(error);
    return error;
  };

  try {
    dispatch({ type: 'products', data: null });
    const response = await axios.post(`${Config.url}/api/v1/admin/products/search`, {
      title,
    });
    onSuccess(response);
  } catch (error) {
    onError(error);
  }
};

export default searchProducts;