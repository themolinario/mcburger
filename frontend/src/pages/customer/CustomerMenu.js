import * as React from "react";
import Container from "@mui/material/Container";
import '../../index.css';
import MenuImageListCustomer from "../../components/MenuImageListCustomer";
import ResponsiveAppBarCustomer from "../../components/ResponsiveAppBarCustomer";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useSelector} from "react-redux";


function CustomerMenu() {
  const user = useSelector((state) => state.auth.user || {});
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
        <ResponsiveAppBarCustomer className="NavBar"/>
      </div>
      <Container className="MenuContainer" maxWidth="lg">
        <div>
          <div>
            <h1>Benvenuto, {user.firstName}</h1>
          </div>
          <Button onClick={handleToggle} variant="contained">
            <ShoppingCartIcon />
            Show Cart
          </Button>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
          >
            <Container className="Cart" maxWidth="xs">
              <div>
                <p>contenuto del carrello</p>
              </div>
            </Container>
          </Backdrop>
        </div>
        <h1>Ecco il nostro Menù: </h1>
        <div>
          <MenuImageListCustomer />
        </div>
      </Container>
    </div>

  )
}

export default CustomerMenu;