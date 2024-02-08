import React, { useState } from 'react'
import GenericLogin from './../../common/components/GenericLogin';
import { Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { setLocalStorage } from '../../common/utils/auth_helper';
import { loginBo } from '../../common/services/api/auth/auth.service';

export default function SignIn() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // handleClick password icon
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const handleChangeSignin = (event) => {
   setLoginData({...loginData, [event.target.name]: event.target.value})
  }

  const handleSignInSubmit = (event) => {
    event.preventDefault();
    loginBo(loginData)
    .then((res) => res.json())
    .then((data) => {
       setLocalStorage(data);
       navigate('/home')
    })
    .catch((err) => console.log(err))
  }

  return (
    <div>
      <GenericLogin
        imgSrc="/images/mony_logo_auth.svg"
        mainTitle="Bienvenue"
        subTitle="Connectez-vous à Monny pour accèder à votre dashboard."
        buttonText="Se connecter"
        handleSignInSubmit={handleSignInSubmit}
      >
        <Box component="form" autoComplete="on">
          <TextField
            label="Adresse e-mail" 
            name="email"
            sx={{
              width:"380px", 
              '& input:focus': {
                background: '#FFFFFF' // Change background to white when input is focused
              },
              '& input': {
                background: '#F0F0F0' // Default background color
              }
            }}
            onChange={handleChangeSignin}
          />
          <FormControl 
            sx={{ 
              width: "380px",
              marginTop: "25px", 
              '& input:focus': {
                background: 'red' // Change background to white when input is focused
              },
              '& input': {
                background: '#F0F0F0' // Default background color
              }
            }} 
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              sx={{ 
                '& input:focus': {
                  background: '#FFFFFF' // Change background to white when input is focused
                },
                '& input': {
                  background: '#F0F0F0' // Default background color
                }
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              name="password"
              onChange={handleChangeSignin}
            />
          </FormControl>
        </Box>
        <Link to="/signin-forget-password" style={{textDecoration:"none"}}>
            <Typography marginTop={"13px"} color="#0500E3" variant='h5' fontSize={17} fontWeight={600}>
                Mot de passe oublié ?
            </Typography>
        </Link>
      </GenericLogin>
    </div>
  )
}
