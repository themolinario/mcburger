import * as React from "react";
import Container from "@mui/material/Container";
import '../../index.css';
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import CookSupportTable from "../../components/CookSupportTable";
import ResponsiveAppBarCook from "../../components/ResponsiveAppBarCook";


function CustomerSupport() {
  return (
    <div className="CookSupport">
      <div>
        <ResponsiveAppBarCook className="NavBar"/>
      </div>
      <Container className="SupportContainer" maxWidth="lg">
        <hgroup>
          <h1 id="Welcome">Supporto Cuoco</h1>
          <h2 id="Welcome2">Segnala imprevisto all'admin</h2>
        </hgroup>
        <div>
          <CookSupportTable/>
        </div>
        <div>
          <Button id = 'sendButton' variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </div>
      </Container>
    </div>

  )
}

export default CustomerSupport;