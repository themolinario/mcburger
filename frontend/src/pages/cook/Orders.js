import * as React from "react";
import ResponsiveAppBarCook from "../../components/ResponsiveAppBarCook";
import Container from "@mui/material/Container";
import '../../index.css';
import CookOrdersTable from "../../components/CookOrdersTable";


function Orders() {
  return (
    <div className="Orders">
      <div>
        <ResponsiveAppBarCook className="NavBar"/>
      </div>
      <Container className="OrdersContainer" maxWidth="lg">
        <hgroup>
          <h1 id="Welcome">Benvenuto nella Hub dei Cuochi!</h1>
          <h2 id="Welcome2">Da qui puoi gestire gli ordini:</h2>
        </hgroup>
        <div>
          <CookOrdersTable/>
        </div>
      </Container>
    </div>

  )
}

export default Orders;