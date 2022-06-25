import * as React from "react";
import ResponsiveAppBarAdmin from "../../components/ResponsiveAppBarAdmin";
import Container from "@mui/material/Container";
import '../../index.css';
import Button from "@mui/material/Button";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CooksList from "../../components/CooksList";


function AdminUserHandle() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div className="AdminUserHandle">
      <div>
        <ResponsiveAppBarAdmin className="NavBar"/>
      </div>
      <Container className="HomeContainer" maxWidth="lg" >

        <Button onClick={handleToggle} variant="contained" color="success">
          Aggiungi cuoco
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
                    <TextField id="username" label="Username" variant="standard"/>
                  </Box>
                </div>
                <div>
                  <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                    <TextField id="email" label="E-mail" variant="standard"/>
                  </Box>
                </div>
                <div>
                  <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                    <TextField id="firstName" label="Nome" variant="standard"/>
                  </Box>
                </div>
                <div>
                  <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                    <TextField id="lastName" label="Cognome" variant="standard"/>
                  </Box>
                </div>
                <div>
                  <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                    <TextField id="password" type="password" label="Password" variant="standard" />
                  </Box>
                </div>
                <div>
                  <Button variant="contained" id="registerButton">Aggiungi</Button>
                </div>
              </Container>
            </div>
          </Container>
        </Backdrop>
        <div>
          <CooksList />
        </div>
      </Container>
    </div>

  )
}

export default AdminUserHandle;