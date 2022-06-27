import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import {fries} from './menuImages/images';
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import UploadButton from "./UploadButton";
import Backdrop from "@mui/material/Backdrop";
import uploadImage from "../actions/admin/uploadImage";
import {useDispatch, useSelector} from "react-redux";
import config from "../config";

export default function MenuImageListAdmin() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const file = useSelector(state => state.files.file || {});
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <ImageList sx={{ width: "auto", height: "auto" }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={item.img}
            srcSet={item.img}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>Price: {item.price} <br />
             Description: {item.description}</span>}
            position="below"
          />
          <Button variant="contained" id = 'deleteBtn' endIcon={<DeleteIcon/>}>Elimina</Button>
          <Button onClick={handleToggle} variant="contained" id = 'editBtn' endIcon={<EditIcon/>}>Modifica</Button>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
          >

            <Container className="Cart" maxWidth="xs">
              <Button onClick={handleClose} variant="contained">
                X
              </Button>
              <div className="Sign-UpBox">
                <Container>
                  <div>
                    <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                      <TextField id="title" label="Nome Prodotto" variant="standard"/>
                    </Box>
                  </div>
                  <div>
                    <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                      <TextField id="description" label="Descrizione" variant="standard"/>
                    </Box>
                  </div>
                  <div>
                    <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                      <TextField id="price" label="Prezzo" variant="standard"/>
                    </Box>
                  </div>
                  <div>
                    <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                      <TextField id="discountedPrice" label="Prezzo Scontato" variant="standard"/>
                    </Box>
                  </div>
                  <div>
                    <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                      <TextField id="currency" label="Valuta" variant="standard" />
                    </Box>
                  </div>
                  <div>
                    <Box sx={{display: 'flex', alignItems: 'flex-end' , margin : 'auto'}}>
                      <UploadButton/>
                    </Box>
                  </div>
                  <div>
                      <img src={config.url + '/api/v1/files/get/' + file.id} style={{
                        width: 160,
                        height: 90,
                        objectFit: 'cover',
                        backgroundColor: 'purple'
                      }} alt="fammoc"/>
                  </div>

                  <div>
                    <Button variant="contained" id="registerButton">
                      Aggiungi
                    </Button>
                  </div>
                </Container>
              </div>
            </Container>
          </Backdrop>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: fries,
    title: 'Fries',
    price: '€3.99',
    description: 'Patatine fritte fatte in casa'
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
];