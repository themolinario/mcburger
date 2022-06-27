import * as React from "react";
import ResponsiveAppBarLogin from "../components/ResponsiveAppBarLogin";
import Container from "@mui/material/Container";
import '../index.css';
import { useNavigate } from "react-router-dom";
import HomeButton from "../components/HomeButton";

function Home() {
  return (
    <div className="Home">
      <div>
        <ResponsiveAppBarLogin className="NavBar"/>
      </div>
      <Container className="HomeContainer" maxWidth="lg">
        <h1 id="Welcome">Benvenuto su McBurger!</h1>
        <h2 id="Welcome2">Scopri il nostro Menu:</h2>
        <div>
          <HomeButton/>
        </div>
      </Container>
      <Container className="HomeContainer" maxWidth="lg">
        <h2 id="Welcome3"><a href="/login">Accedi</a> oppure <a href="/signup">Registrati</a> per usufruire dei servizi offerti da Mc Burger </h2>
        <h3 id="Welcome3"><a href="/support">Contattaci</a> per informazioni</h3>
      </Container>
      <div>
        <Container className="HomeContainer" maxWidth="lg">
          <footer id="Welcome4">
           Copyright Mc Burger© 2022. All rights reserved
          </footer>
        </Container>
      </div>
    </div>


  )
}

export default Home;