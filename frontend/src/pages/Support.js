import * as React from "react";
import ResponsiveAppBarLogin from "../components/ResponsiveAppBarLogin";
import Container from "@mui/material/Container";
import '../index.css';
import MultilineTextArea from '../components/MultilineTextArea'
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';


function Support() {
  return (
    <div className="Home">
      <div>
        <ResponsiveAppBarLogin className="NavBar"/>
      </div>
      <Container className="SupportContainer" maxWidth="lg">
        <hgroup>
          <h1 id="Welcome">Hai bisogno di informazioni?</h1>
          <h2 id="Welcome2">Inviaci un messaggio</h2>
        </hgroup>
        <div>
          <MultilineTextArea />
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

export default Support;