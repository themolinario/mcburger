import * as React from "react";
import ResponsiveAppBarLogin from "../components/ResponsiveAppBarLogin";
import Container from "@mui/material/Container";
import '../index.css';

function Home() {
  return (
    <div className="Home">
      <div>
        <ResponsiveAppBarLogin className="NavBar"/>
      </div>
      <Container className="HomeContainer" maxWidth="lg">
        <h1>Benvenuto su McBurger!</h1>
        <h2>Scopri il nostro Menu:</h2>
        <div>

        </div>
      </Container>
    </div>

  )
}

export default Home;