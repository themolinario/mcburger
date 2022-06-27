import axios from 'axios';
import Config from '../../config';
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';

const addProduct = ({
                      picture, gallery, title, description, price, discountedPrice, currency, actions, setOpen
                 }) => async (dispatch) => {
  actions.setSubmitting(true);

  const onSuccess = (response) => {
    const { product } = response.data;
    setOpen(false);
    actions.setFieldValue('title', '');
    actions.setFieldValue('description', '');
    actions.setFieldValue('price', '');
    actions.setFieldValue('discountedPrice', '');
    actions.setFieldValue('currency', '');
    dispatch({ type: 'snack', content: `prodotto @${product.username} aggiunto`, severity: 'success' });
    return response;
  };

  const onError = (error) => {
    if (error.response) {
      const { data } = error.response;
      if (data.title) actions.setFieldError('title', capitalizeFirstLetter(data.title));
      if (data.description) actions.setFieldError('description');
      if (data.price) actions.setFieldError('price');
      if (data.discountedPrice) actions.setFieldError('discountedPrice');
      if (data.currency) actions.setFieldError('currency');
    } else {
      dispatch({ type: 'snack', content: 'error while creating product', severity: 'error' });
    }
    return error;
  };

  actions.setSubmitting(true);

  try {
    const response = await axios.post(`${Config.url}/api/v1/admin/products/add`, {
      picture, gallery, title, description, price, discountedPrice, currency
    });
    onSuccess(response);
  } catch (error) {
    onError(error);
  }

  actions.setSubmitting(false);
};

export default addProduct;