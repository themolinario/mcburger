import ResponsiveAppBarLogin from "../components/ResponsiveAppBarLogin";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";

import "../index.css";


  function Signup() {
    return (
      <div className="Sign-up">
        <div>
          <ResponsiveAppBarLogin className="NavBar"/>
        </div>
        <div className="Sign-UpBox">
          <Container>
            <div>
              <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                <TextField id="username" label="Username" variant="standard"/>
              </Box>
            </div>
            <div>
              <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                <TextField id="email" label="E-mail" variant="standard"/>
              </Box>
            </div>
            <div>
              <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                <TextField id="firstName" label="First Name" variant="standard"/>
              </Box>
            </div>
            <div>
              <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                <TextField id="lastName" label="Last Name" variant="standard"/>
              </Box>
            </div>
            <div>
              <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                <TextField id="password" type="password" label="Password" variant="standard" />
              </Box>
            </div>
            <div>
              <Button variant="contained" id="registerButton">Register</Button>
            </div>
          </Container>
        </div>
      </div>
    );
}
export default Signup;