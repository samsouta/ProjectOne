import React, { useContext, useState } from 'react'
import { Input } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../feature/Api/authApi';
import { useDispatch } from 'react-redux';
import { addUser } from '../context/authSlice';
import { stateContext } from '../context/stateContext';
import { MdLockOutline } from "react-icons/md";
import { Button } from '@mantine/core';
// login
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Swal from 'sweetalert2';

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

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const Login = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const initialValues = {
    email: " ",
    password: "",
  }
  const [formValues, setFormValues] = useState(initialValues);
  const [error, setError] = useState({});
  const [loginLoader, setLoginLoader] = useState(false)
  const nav = useNavigate();
  const { setShowLogInSuccess } = useContext(stateContext)
  const dispatch = useDispatch()
  const [login] = useLoginMutation();

  const handaleChange = (e) => {
    const newValues = { ...formValues, [e.target.name]: e.target.value };
    setFormValues(newValues);
  }
  const validate = (value) => {
    const messages = {};
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!regex.test(value.email)) {
      messages.email = " incorrect email"
    }
    if (value.password.length >= 8) {
      null
    } else {
      messages.password = " incorrect password"
    }
    return messages;

  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      setError(validate(formValues))
      setLoginLoader(true)
      const { data } = await login(formValues)
      console.log(data)
      if (data?.success) {
        setLoginLoader(false) 
        setShowLogInSuccess(true)
        setTimeout(() => {
          setShowLogInSuccess(false)
        }, 1000);
        dispatch(addUser({ user: data?.user, token: data?.token }))
        nav(`/`)
        setTimeout(() => {
          window.location.reload();
        }, 2000); 
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Login Failed! try again",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
        setLoginLoader(false)
      }
      console.log(data)
    } catch (error) {
      console.log(error)
    }

  };

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
            <h1 className=' text-q font-bold text-2xl' >
              Sign in
            </h1>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                value={formValues.email}
                onChange={handaleChange}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <span className=' text-red-500 text-xs font-medium text-q' >{error.email}</span>
              <TextField
                value={formValues.password}
                onChange={handaleChange}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <span className=' text-red-500 text-xs font-medium text-q block' >{error.password}</span>

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                loading={loginLoader ? true : false}
                loaderProps={{ type: 'dots' }}
                type="submit"
                fullWidth
                variant="contained"
                className=' mt-4 mb-5'
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link className=' text-q font-medium' variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to={`/resgiter`} className=' cursor-pointer text-q font-medium' variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                  <Link>

                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>


    </div>
  )
}

export default Login
