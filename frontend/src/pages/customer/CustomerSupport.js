import * as React from "react";
import ResponsiveAppBarCustomer from "../../components/ResponsiveAppBarCustomer";
import Container from "@mui/material/Container";
import '../../index.css';


function CustomerSupport() {
  return (
    <div className="Home">
      <div>
        <ResponsiveAppBarCustomer className="NavBar"/>
      </div>
      <Container className="SupportContainer" maxWidth="lg">

        <div>

        </div>
        <div>

        </div>
      </Container>
    </div>

  )
}

export default CustomerSupport;