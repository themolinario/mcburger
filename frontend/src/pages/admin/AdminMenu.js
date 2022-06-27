import * as React from "react";
import Container from "@mui/material/Container";
import '../../index.css';
import Button from "@mui/material/Button";

import ResponsiveAppBarAdmin from "../../components/ResponsiveAppBarAdmin";
import AddIcon from '@mui/icons-material/Add';
import MenuImageListAdmin from "../../components/MenuImageListAdmin";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import UploadButton from "../../components/UploadButton";
import config from "../../config";
import {useSelector} from "react-redux";


function AdminMenu() {
  const file = useSelector(state => state.files.file || {});

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div className="CustomerMenu">
      <div>
        <ResponsiveAppBarAdmin className="NavBar"/>
      </div>
      <Container className="MenuContainer" maxWidth="lg">
        <div>
          <Button onClick={handleToggle} variant="contained" color= "success" endIcon={<AddIcon/>}>
            Aggiungi elemento al Menu
          </Button>
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

                  <Box>
                    <img src={config.url + '/api/v1/files/get/' + file.id} style={{
                      width: 160,
                      minWidth: 160,
                      height: 160,
                      minHeight: 160,
                      backgroundColor: 'purple',
                      objectFit: 'cover'
                    }} alt="fammoc"/>
                  </Box>


                  <div>
                    <Button variant="contained" id="registerButton">Aggiungi</Button>
                  </div>
                </Container>
              </div>
            </Container>
          </Backdrop>
        </div>
        <h1>Ecco il nostro Menù: </h1>
        <div>
            <MenuImageListAdmin/>
        </div>
      </Container>
    </div>

  )
}

export default AdminMenu;