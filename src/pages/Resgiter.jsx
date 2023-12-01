import React, { useEffect, useState } from 'react'
import { Button } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
// sign up mui
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { MdLockOutline } from "react-icons/md";
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRegisterMutation } from '../feature/Api/authApi';
import Swal from 'sweetalert2';
import { ImHappy2 } from "react-icons/im";
import {  Modal } from 'flowbite-react';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const defaultTheme = createTheme();

const Resgiter = () => {
  const [openModal, setOpenModal] = useState(false);
  const [signUpLoader, setSignUpLoader] = useState(false)
  const [register] = useRegisterMutation();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  }
  const [formValues, setFormValues] = useState(initialValues);
  const [error, setError] = useState({})
  const handaleChange = (e) => {
    const newValues = { ...formValues, [e.target.name]: e.target.value }
    setFormValues(newValues);

  }
  const handaleSubmit = async(e) => {
    try {
      e.preventDefault();
      setSignUpLoader(true)
      setError(validate(formValues))
        const { data } = await register(formValues)
        console.log(data)
        if (data?.success) {
          setSignUpLoader(false)
          setOpenModal(true)
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong! try again",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
          setSignUpLoader(false)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const validate = (value) => {
    const messages = {};
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!regex.test(value.email)) {
      messages.email = " email is not vaild"
    }
    if (value.password.length >= 8) {
         null;
    }else{
      messages.password = "password must have at least 8 "
    }
    if (!value.password_confirmation) {
      messages.password_confirmation = "  password is not match "
    }
    if (!value.name) {
      messages.name = " username is required"
    }
    return messages;
  }

  return (
    <div className=' flex justify-center items-center mt-32' >
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <MdLockOutline />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" onSubmit={handaleSubmit} noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    value={formValues.name}
                    onChange={handaleChange}
                    name="name"
                    required
                    fullWidth
                    id="username"
                    label="username"
                  />
                  <span className=' text-red-500 text-xs font-medium text-q' >{error.name}</span>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={formValues.email}
                    onChange={handaleChange}
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                    autoComplete="email"
                  />
                  <span className=' text-red-500 text-xs font-medium text-q' >{error.email}</span>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={formValues.password}
                    onChange={handaleChange}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                  <span className=' text-red-500 text-xs font-medium text-q' >{error.password}</span>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={formValues.password_confirmation}
                    onChange={handaleChange}
                    required
                    fullWidth
                    name="password_confirmation"
                    label="password_confirmation"
                    type="password"
                    id="password_confirmation"
                    autoComplete="new-password"
                  />
                  <span className=' text-red-500 text-xs font-medium text-q' >{error.password_confirmation}</span>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                loading={signUpLoader ? true : false}
                loaderProps={{ type: 'dots' }}
                type="submit"
                fullWidth
                variant="contained"
                className=' mt-3 mb-2 text-m font-medium'
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to={`/login`} className=' text-q font-medium' variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>

      {/* /// HIDDEN AREA */}
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Body>
          <div className="text-center mt-11">
            <ImHappy2 className="mx-auto mb-4 h-14 w-14 text-[#FF006E] dark:text-gray-200" />
            <h3 className="mb-5 text-lg text-q font-semibold text-gray-500 dark:text-gray-400">
              Resgiter Successfully 
            </h3>
            <div className="flex justify-center gap-4">
              <Link to={`/login`} >
              <Button variant="filled"  className=' hover:bg-[#FF4797]' onClick={() => setOpenModal(false)} color="#A26AF0">{"Login Now"}</Button>
              
              </Link>
              <Link to={`/`} >
              <Button variant="outline" className=' hover:bg-[#FF4797] hover:text-white'  onClick={() => setOpenModal(false)}  color="#A26AF0">NO, Later</Button>
              
              </Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Resgiter
