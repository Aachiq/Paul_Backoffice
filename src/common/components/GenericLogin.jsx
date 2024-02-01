import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export default function GenericLogin(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoginEmail = location.pathname === '/';
    const { 
        imgSrc,
        mainTitle,
        subTitle,
        children,
        buttonText,
        rediretTo,
        isForgetPassword
     } = props;

  return (
      <Box sx={{ 
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
            height:isLoginEmail ? 425 : 460,
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            alignItems:"center",
            borderRadius:"16px",
            padding:"35px"
          }}
      >
        <Box>
          <img src={imgSrc} alt="logo_mony" />
        </Box>
        <Box>
          <Typography variant='h4' fontFamily={'Poppins'} fontSize={isLoginEmail ? 32 : 27} textAlign={'center'}>
            {mainTitle}
          </Typography>
        </Box>
        <Box>
          <Typography variant='h6' width={320} color={'#7C7C7C'} fontFamily={'Poppins'} fontSize={14} textAlign={'center'}>
            {subTitle}
          </Typography>
        </Box>
        <Box className="childrenComp">
          {children}
        </Box>
        <Box sx={{ marginTop:"25px", textAlign:'center' }}>
          <Button 
              variant="contained"
              sx={{ 
                width:'390px',
                textTransform: 'none',
                background: 'linear-gradient(to right, #8419E2, #F13727)', 
                color: 'white',
                fontFamily:"Poppins",
                fontSize:"20px",
                fontWeight:"600",
              }} 
              onClick={() => navigate(rediretTo)}
            >{buttonText}
          </Button>  
        </Box>
        {
          isForgetPassword && (
            <Typography color="#0500E3" variant='h5' fontSize={17} fontWeight={600}>
                {isForgetPassword}
            </Typography>
          )
        }
      </Box>
    </Box>
  )
}
