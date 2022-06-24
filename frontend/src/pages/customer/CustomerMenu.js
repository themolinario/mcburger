import * as React from "react";
import Container from "@mui/material/Container";
import '../../index.css';
import MenuImageListCustomer from "../../components/MenuImageListCustomer";
import ResponsiveAppBarCustomer from "../../components/ResponsiveAppBarCustomer";


function CustomerMenu() {
  return (
    <div className="CustomerMenu">
      <div>
        <ResponsiveAppBarCustomer className="NavBar"/>
      </div>
      <Container className="MenuContainer" maxWidth="lg">
        <h1>Ecco il nostro Menù: </h1>
        <div>
          <MenuImageListCustomer />
        </div>
      </Container>
    </div>

  )
}

export default CustomerMenu;