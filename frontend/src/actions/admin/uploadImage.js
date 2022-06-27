import axios from 'axios';
import Config from '../../config';

const uploadImage = ({
                       file,
                     }) => async (dispatch) => {

  const onSuccess = (response) => {
    dispatch({ type: 'files-uploaded', file: response.data.file });
    return response;
  };

  const onError = (error) => {
    if (error.response) {
      console.log(error.response);
    }
    dispatch({ type: 'snack', content: 'error while uploading file', severity: 'error' });
    return error;
  };

    try {
      const formData = new FormData();
      formData.append('picture', file);
      const response = await axios.post(`${Config.url}/api/v1/files/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (progressEvent) => {
          const { total, loaded } = progressEvent;
          const percent = (loaded * 100) / total;
          dispatch({ type: 'snack', content: `uploading: ${Math.floor((100 / file.length)+ percent / file.length)}%`, severity: 'info' });
        }
      });
      onSuccess(response);
    } catch (error) {
      onError(error);
    }


  dispatch({ type: 'snack', content: 'upload complete', severity: 'success' });

  window.size = 0;
};

export default uploadImage;