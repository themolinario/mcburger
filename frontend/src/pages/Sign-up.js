import ResponsiveAppBarLogin from "../components/ResponsiveAppBarLogin";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import {useNavigate} from "react-router-dom";
import * as Yup from 'yup';
import { Formik } from 'formik';
import signup from '../actions/sign-up';
import {useDispatch} from "react-redux";
import "../index.css";



function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="Sign-up">
      <div>
        <ResponsiveAppBarLogin className="NavBar"/>
      </div>
      <div className="Sign-UpBox">
        <Formik
          initialValues={{
            username:  '',
            password:  '',
            email:  '',
            firstName:  '',
            lastName:  '',
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string().max(255).required('Devi immettere lo username!'),
            password: Yup.string().max(255).required('Devi immettere la password!'),
            email: Yup.string().max(255).required('Devi immettere email!'),
            firstName: Yup.string().max(255).required('Devi immettere il tuo nome!'),
            lastName: Yup.string().max(255).required('Devi immettere il tuo cognome!')
          })}
          onSubmit={(values, actions) => {
            dispatch(signup({
              username: values.username,
              password: values.password,
              email: values.email,
              firstName: values.firstName,
              lastName: values.lastName,
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
                <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                  <TextField id="username" label="Username" variant="standard" value={values.username} onBlur={handleBlur}
                             onChange={handleChange} error={Boolean(touched.username && errors.username)}/>
                </Box>
              </div>
              <div>
                <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                  <TextField id="email" label="E-mail" variant="standard" value={values.email} onBlur={handleBlur}
                             onChange={handleChange} error={Boolean(touched.email && errors.email)}/>
                </Box>
              </div>
              <div>
                <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                  <TextField id="firstName" label="First Name" variant="standard" value={values.firstName} onBlur={handleBlur}
                             onChange={handleChange} error={Boolean(touched.firstName && errors.firstName)}/>
                </Box>
              </div>
              <div>
                <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                  <TextField id="lastName" label="Last Name" variant="standard" value={values.lastName} onBlur={handleBlur}
                             onChange={handleChange} error={Boolean(touched.lastName && errors.lastName)}/>
                </Box>
              </div>
              <div>
                <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                  <TextField id="password" type="password" label="Password" variant="standard" value={values.password} onBlur={handleBlur}
                             onChange={handleChange} error={Boolean(touched.password && errors.password)}/>
                </Box>
              </div>
              <div>
                <Button variant="contained" id="registerButton" onClick={handleSubmit} disabled={isSubmitting}>Register</Button>
              </div>
            </Container>
          )}
        </Formik>
      </div>
    </div>
  );
}
export default Signup;