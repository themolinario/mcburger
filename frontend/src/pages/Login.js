import ResponsiveAppBarLogin from "../components/ResponsiveAppBarLogin";
import TextField from "@mui/material/TextField";
import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "../index.css";
import Container from '@mui/material/Container';

function Login() {
  return (
    <div className="Login">
      <div>
        <ResponsiveAppBarLogin className="NavBar"/>
      </div>
      <div className="LoginBox">
        <Container>
          <div>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <TextField id="username" label="Username or email: " variant="standard" />
            </Box>
          </div>
          <div>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <TextField id="password" type="password" label="Password: " variant="standard" />
            </Box>
          </div>
          <div>
            <Button variant="contained" id="loginButton">Login</Button>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Login;
