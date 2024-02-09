import React, { useState } from 'react'
import GenericLogin from './../../common/components/GenericLogin';
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
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
  const [isFocus, setIsFocus] = useState(false);
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
      >
        <Box component="form" onSubmit={handleSignInSubmit} autoComplete="on">
          <TextField
            type="email"
            required
            label="Adresse e-mail" 
            name="email"
            onChange={handleChangeSignin}
            sx={{
              width:"380px", 
              '& input:focus': {
                background: '#FFFFFF' // Change background to white when input is focused
              },
              '& input': {
                background: '#F0F0F0' // Default background color
              }
            }}
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
              required
              sx={{ 
                '& input:focus': {
                  background: '#FFFFFF' // Change background to white when input is focused
                },
                '& input': {
                  background: '#F0F0F0' // Default background color
                }
              }}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              label="Password"
              name="password"
              onChange={handleChangeSignin}
              endAdornment={
                isFocus && (
                  <InputAdornment position="end">
                    {
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />  }
                      </IconButton>
                    }
                  </InputAdornment>
                )
              }
            />
          </FormControl>
          <Link to="" style={{textDecoration:"none"}}>
            <Typography marginTop={"13px"} color="#0500E3" variant='h5' fontSize={17} fontWeight={600}>
                Mot de passe oublié ?
            </Typography>
          </Link>
          <Box sx={{ marginTop: "25px", textAlign:'center' }}>
          <Button 
              type='submit'
              variant="contained"
              sx={{ 
                width:'380px',
                textTransform: 'none',
                background: 'linear-gradient(to right, #8419E2, #F13727)', 
                color: 'white',
                fontFamily:"Poppins",
                fontSize:"20px",
                fontWeight:"600",
              }} 
            >Se connecter
          </Button>  
        </Box>
        </Box>
      </GenericLogin>
    </div>
  )
}
