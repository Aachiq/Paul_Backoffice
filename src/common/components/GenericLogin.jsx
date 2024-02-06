import { Box, Button, Typography } from '@mui/material';
import React from 'react'

export default function GenericLogin(props) {
  const { 
      imgSrc,
      mainTitle,
      subTitle,
      children,
      buttonText,
      handleSignInSubmit,
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
            padding:"25px"
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
        <Box sx={{ marginTop: isForgetPassword ? "43px" : "25px", textAlign:'center' }}>
          <Button 
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
              onClick={handleSignInSubmit}
            >{buttonText}
          </Button>  
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
