import * as React from "react";
import Container from "@mui/material/Container";
import '../../index.css';

import ResponsiveAppBarCustomer from "../../components/ResponsiveAppBarCustomer";


function Cart() {
  return (
    <div className="CustomerMenu">
      <div>
        <ResponsiveAppBarCustomer className="NavBar"/>
      </div>
      <Container className="MenuContainer" maxWidth="lg">
        <h1>Contenuto del carrello: </h1>
        <div>

        </div>
      </Container>
    </div>

  )
}

export default Cart;