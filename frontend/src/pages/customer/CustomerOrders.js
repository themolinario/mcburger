import * as React from "react";
import Container from "@mui/material/Container";
import '../../index.css';

import ResponsiveAppBarCustomer from "../../components/ResponsiveAppBarCustomer";


function Ordini() {
  return (
    <div className="CustomerMenu">
      <div>
        <ResponsiveAppBarCustomer className="NavBar"/>
      </div>
      <Container className="MenuContainer" maxWidth="lg">
        <h1>Le tue ordinazioni:  </h1>
        <div>

        </div>
      </Container>
    </div>

  )
}

export default Ordini;