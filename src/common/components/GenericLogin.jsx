import { Box, Button, Typography } from '@mui/material';
import React from 'react'

export default function GenericLogin(props) {
  const { 
      imgSrc,
      mainTitle,
      subTitle,
      children,
      isForgetPassword,
    } = props;

  return (
      <Box 
        sx={{ 
          backgroundColor: "black",
          height: "100vh",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
        }}
      >
      <Box 
        sx={{
            backgroundColor:"white",
            width:"380px",
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            alignItems:"center",
            borderRadius:"16px",
            paddingX:"25px",
            paddingY:"27px",
          }}
      >
        <Box>
          <img src={imgSrc} alt="logo_mony" />
        </Box>
        <Box marginTop={3}>
          <Typography variant='h4' fontFamily={'Poppins'} fontSize={isForgetPassword ? "22px":"28px"} textAlign={'center'} fontWeight={600}>
            {mainTitle}
          </Typography>
        </Box>
        <Box marginTop={3}>
          <Typography variant='h6' width={320} color={'#7C7C7C'} fontFamily={'Poppins'} fontSize={"14px"} textAlign={'center'}>
            {subTitle}
          </Typography>
        </Box>
        <Box marginTop={3} className="childrenComp">
          {children}
        </Box>
       {
        isForgetPassword && (
          <Typography variant='h6' fontFamily={'Poppins'} color={'#0500E3'} fontSize={"16px"} marginTop={1.5} fontWeight={600}>
            retour à la page de connexion
          </Typography>
        )
       }
      </Box>
    </Box>
  )
}
