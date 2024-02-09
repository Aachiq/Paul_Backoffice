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
       <Grid container>
        <Grid item md={2}>
          <SideBar/>
        </Grid>
        <Grid item md={10} bgcolor={"#F0F0F0"}>
          hello
          {/* <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}  bgcolor={"#FFFFFF"}>
            <Box padding={1}>
              <TextField
                id="filled-basic"
                label="Filled"
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
              <Box marginRight={4}>
                <NotificationsNoneIcon/>
              </Box>
              <Box display={"flex"}>
                <Box marginRight={1.5}>
                  <Avatar alt="user_picture" src="/images/avatar.png" />
                </Box>
                <Box display={"flex"} flexDirection={"column"} marginRight={2.5}>
                  <Typography variant='p'>Karam Noury</Typography>
                  <Typography variant='p'>Manager</Typography>
                </Box>
              </Box>
              <Box marginRight={2}>
                <img src="/images/arrow-down.svg" alt="avatar_img" />
              </Box>
            </Box>
          </Box> */}
{/* box above is te close of header */}
        </Grid>
       </Grid>
    </Box>
  )
}
