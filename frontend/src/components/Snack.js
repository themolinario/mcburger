import React from 'react';
import { Alert, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

const CustomAlert = (props) => <Alert elevation={6} variant="filled" {...props} />;

const Snack = () => {
  const dispatch = useDispatch();
  const snack = useSelector((state) => state.snack);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch({ type: 'snack-out' });
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={snack.open}
      autoHideDuration={snack.autoHideDuration}
      onClose={handleClose}
    >
      <div>
        <CustomAlert onClose={() => dispatch({ type: 'snack-out' })} severity={snack.severity}>
          {snack.content}
        </CustomAlert>
      </div>
    </Snackbar>
  );
};

export default Snack;
