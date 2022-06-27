import * as React from "react";
import ResponsiveAppBarAdmin from "../../components/ResponsiveAppBarAdmin";
import Container from "@mui/material/Container";
import '../../index.css';
import HomeAdminButton from "../../components/HomeAdminButton";

function AdminHome() {
  return (
    <div className="Home">
      <div>
        <ResponsiveAppBarAdmin className="NavBar"/>
      </div>
      <Container className="HomeContainer" maxWidth="lg">
        <h1>Benvenuto, Admin</h1>
        <h2 id="Welcome2">Accedi alla gestione del Menu</h2>
        <div>
          <HomeAdminButton/>
        </div>
        <div>
        </div>
      </Container>
    </div>

  )
}

export default AdminHome;