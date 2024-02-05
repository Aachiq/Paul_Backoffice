import React from 'react'
import GenericLogin from './../../common/components/GenericLogin';
import { Box, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signin-password')
  }
  return (
    <div>
      <GenericLogin
        imgSrc="/images/mony_logo_auth.svg"
        mainTitle="Bienvenue"
        subTitle="Connectez-vous à Monny pour accèder à votre dashboard."
        buttonText="Continuer"
        handleClick={handleClick}
      >
        <Box component="form" autoComplete="off">
          <TextField label="Adresse e-mail" sx={{width:"380px", background:"#F0F0F0"}}/>
          <TextField type='password' label="Password" sx={{width:"380px", background:"#F0F0F0",  marginTop:"10px"}}/>
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
