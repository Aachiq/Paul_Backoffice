import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { RemoveItemLocalStorage } from '../../../common/utils/auth_helper';
import { logoutBo } from '../../../common/services/api/auth/auth.service';
import SideBar from '../../../common/components/SideBar';

export default function Home() {

  const navigate = useNavigate();
  const logout = () => {
    logoutBo()
    .then(() => {
      RemoveItemLocalStorage()
      navigate('/')
    })
  }

  return (
    <Box>
       <Grid container spacing={3}>
        <Grid item md={2}>
         <SideBar/>
        </Grid>
        <Grid item md={10} bgcolor={'beige'}>
          <Box>
            <Typography>
                Hello Home
                <Button variant='contained' onClick={logout}>signout</Button>
            </Typography>
          </Box>
        </Grid>
       </Grid>
    </Box>
  )
}
