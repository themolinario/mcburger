import * as React from "react";
import ResponsiveAppBarAdmin from "../../components/ResponsiveAppBarAdmin";
import Container from "@mui/material/Container";
import '../../index.css';
import Button from "@mui/material/Button";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CooksList from "../../components/CooksList";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import { Formik } from 'formik';
import addCook from "../../actions/admin/addCook";



function AdminUserHandle() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div className="AdminUserHandle">
      <div>
        <ResponsiveAppBarAdmin className="NavBar"/>
      </div>
      <Container className="HomeContainer" maxWidth="lg" >

        <Button onClick={handleToggle} variant="contained" color="success">
          Aggiungi cuoco
        </Button>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >

          <Container className="Cart" maxWidth="xs">
            <Button onClick={handleClose} variant="contained">
              X
            </Button>
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
                  firstName: Yup.string().max(255).required('Devi immettere il nome!'),
                  lastName: Yup.string().max(255).required('Devi immettere il cognome!')
                })}
                onSubmit={(values, actions) => {
                  dispatch(addCook({
                    username: values.username,
                    password: values.password,
                    email: values.email,
                    firstName: values.firstName,
                    lastName: values.lastName,
                    actions,
                    setOpen
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
                    <TextField id="firstName" label="Nome" variant="standard" value={values.firstName} onBlur={handleBlur}
                               onChange={handleChange} error={Boolean(touched.firstName && errors.firstName)}/>
                  </Box>
                </div>
                <div>
                  <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                    <TextField id="lastName" label="Cognome" variant="standard" value={values.lastName} onBlur={handleBlur}
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
                  <Button variant="contained" id="registerButton" onClick={() => {
                    handleSubmit();
                    alert('cuoco aggiunto con successo!')
                  }} disabled={isSubmitting}>Aggiungi</Button>
                </div>
              </Container>
                )}
              </Formik>
            </div>
          </Container>
        </Backdrop>
        <div>
          <CooksList />
        </div>
      </Container>
    </div>

  )
}

export default AdminUserHandle;