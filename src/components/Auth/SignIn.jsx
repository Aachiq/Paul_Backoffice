import React from 'react'
import GenericLogin from './../../common/components/GenericLogin';
import { Box, TextField } from '@mui/material';

export default function SignIn() {
  return (
    <div>
      <GenericLogin
        imgSrc="/images/mony_logo_auth.svg"
        mainTitle="Bienvenue"
        subTitle="Connectez-vous à Sunday pour continuer vers le dashboard."
        buttonText="Continuer"
        rediretTo="/signin-password"
      >
        <Box component="form" autoComplete="off">
          <TextField label="Adresse e-mail" sx={{width:390, background:"#F0F0F0"}}/>
        </Box>
      </GenericLogin>
    </div>
  )
}
