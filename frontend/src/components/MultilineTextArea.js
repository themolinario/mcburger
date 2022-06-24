import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields() {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: 'auto' },
      }}
      noValidate
      autoComplete="off"
    >
     <div>
      <TextField
        id="msgTextArea"
        label="Messaggio"
        multiline
        maxRows={10}
        value={value}
        onChange={handleChange}
      />
     </div>
    </Box>
  )
}