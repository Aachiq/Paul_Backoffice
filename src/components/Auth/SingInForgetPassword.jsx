import { Box, TextField } from '@mui/material'
import React from 'react'
import GenericLogin from '../../common/components/GenericLogin'

export default function SingInForgetPassword() {
  return (
    <div>
      <GenericLogin
        imgSrc="/images/mony_logo_auth.svg"
        mainTitle="Saisissez votre mot de passe"
        subTitle="Recevoir un lien pour réinitialiser le mot de passe"
        buttonText="Envoyer"
        rediretTo="/signin-password"
        isForgetPassword="retour à la page de connexion"
      >
        <Box component="form" autoComplete="off">
          <TextField label="Adresse e-mail" sx={{width:390, background:"#F0F0F0"}}/>
        </Box>
      </GenericLogin>
    </div>
  )
}
