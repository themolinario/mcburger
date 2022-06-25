import ResponsiveAppBarLogin from "../components/ResponsiveAppBarLogin";
import TextField from "@mui/material/TextField";
import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "../index.css";
import Container from '@mui/material/Container';
import {useDispatch} from "react-redux";
import login from "../actions/login";
import {useNavigate} from "react-router-dom";
import * as Yup from 'yup';
import { Formik } from 'formik';


function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="Login">
      <div>
        <ResponsiveAppBarLogin className="NavBar"/>
      </div>
      <div className="LoginBox">
        <Formik
          initialValues={{
            username:  '',
            password:  ''
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string().max(255).required('Devi immettere lo username!'),
            password: Yup.string().max(255).required('Devi immettere la password!')
          })}
          onSubmit={(values, actions) => {
            dispatch(login({
              username: values.username,
              password: values.password,
              navigate,
              actions
            }));
          }}
        >
          {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
        <Container>
          <div>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <TextField id="username" label="Username or email: " variant="standard" value={values.username} onBlur={handleBlur}
                         onChange={handleChange} error={Boolean(touched.username && errors.username)} />
            </Box>
          </div>
          <div>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <TextField id="password" type="password" label="Password: " variant="standard" value={values.password} onBlur={handleBlur}
                         onChange={handleChange} error={Boolean(touched.password && errors.password)}/>
            </Box>
          </div>
          <div>
            <Button variant="contained" id="loginButton" onClick={handleSubmit} disabled={isSubmitting}>Login</Button>
          </div>
        </Container>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
