import * as React from "react";
import ResponsiveAppBarLogin from "../components/ResponsiveAppBarLogin";
import Container from "@mui/material/Container";
import '../index.css';
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="Home">
      <div>
        <ResponsiveAppBarLogin className="NavBar"/>
      </div>
      <Container className="HomeContainer" maxWidth="lg">
        <h1 id="Welcome">Benvenuto su McBurger!</h1>
        <h2 id="Welcome2">Scopri il nostro Menu:</h2>
        <div>
          <Button id="MenuButton" variant="contained" color="secondary" onClick={() => {
            navigate('./Menu');
          }}>Menu</Button>
        </div>
        <div>
          
        </div>
      </Container>
    </div>

  )
}

export default Home;