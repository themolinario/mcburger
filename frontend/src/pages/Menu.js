import * as React from "react";
import ResponsiveAppBarLogin from "../components/ResponsiveAppBarLogin";
import Container from "@mui/material/Container";
import '../index.css';
import MenuImageList from "../components/MenuImageList";


function Menu() {
  return (
    <div className="Home">
      <div>
        <ResponsiveAppBarLogin className="NavBar"/>
      </div>
      <Container className="MenuContainer" maxWidth="lg">
        <h1>Ecco il nostro Menù: </h1>
        <div>
          <MenuImageList />
        </div>
      </Container>
    </div>

  )
}

export default Menu;