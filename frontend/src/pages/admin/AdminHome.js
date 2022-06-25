import * as React from "react";
import ResponsiveAppBarAdmin from "../../components/ResponsiveAppBarAdmin";
import Container from "@mui/material/Container";
import '../../index.css';
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function AdminHome() {
  const navigate = useNavigate();
  return (
    <div className="Home">
      <div>
        <ResponsiveAppBarAdmin className="NavBar"/>
      </div>
      <Container className="HomeContainer" maxWidth="lg">
        <h1 id="Welcome">Benvenuto su McBurger!</h1>
        <h2 id="Welcome2">Accedi alla gestione del Menu</h2>
        <div>
          <Button id="MenuButton" variant="contained" color="secondary" onClick={() => {
            navigate('/admin/menu');
          }}>Menu</Button>
        </div>
        <div>

        </div>
      </Container>
    </div>

  )
}

export default AdminHome;