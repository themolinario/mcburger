import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import uploadImage from "../actions/admin/uploadImage";
import {useDispatch} from "react-redux";

const Input = styled('input')({
  display: 'none',
});

export default function UploadButton() {
  const dispatch = useDispatch();
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="label" id = "uploadBtn">
          Aggiungi immagine
          <input
            type="file"
            name="files"
            onChange={(e) => {
              dispatch(uploadImage({ file: e.target.files[0] }))
            }}
            hidden
          />
        </Button>
      </label>
    </Stack>
  );
}