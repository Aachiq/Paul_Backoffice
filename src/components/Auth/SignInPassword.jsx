import React from 'react'
import GenericLogin from '../../common/components/GenericLogin'
import { Box, TextField, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

export default function SignInPassword() {
    const navigate = useNavigate()
  return (
    <div>
     <GenericLogin
        imgSrc="/images/mony_logo_auth.svg"
        mainTitle="Saisissez votre mot de passe"
        subTitle="Saisissez le mot de passe associé à Monny pour continuer vers le dashboard"
        buttonText="Connexion"
      >
        <Box component="form" autoComplete="off">
          <TextField label="Adresse e-mail" sx={{width:390, background:"#F0F0F0", marginBottom:"10px"}}/>
          <TextField label="Adresse e-mail" sx={{width:390, background:"#F0F0F0", marginTop:"10px"}}/>
        </Box>
        <Link to="/signin-forget-password" style={{textDecoration:"none"}}>
            <Typography color="#0500E3" variant='h6' fontSize={17} fontWeight={600} marginTop={2}>
                Mot de passe oublié ?
            </Typography>
        </Link>
      </GenericLogin>
    </div>
  )
}
