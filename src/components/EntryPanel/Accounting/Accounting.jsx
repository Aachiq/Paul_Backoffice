import React from 'react'
import SideBar from '../../../common/components/SideBar'
import { Avatar, Box, Grid, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CustomTabs from '../../../common/components/CustomTabs';

export default function Accounting() {
  return (
    <Box>
      <Grid container>
        <Grid item md={2}>
          <SideBar/>
        </Grid>
        <Grid item md={10} bgcolor={"#F0F0F0"}>
          {/* <Typography variant="h3">
            Hello Acounting 
          </Typography> */}
          {/* <TextField
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
          /> */}
          <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}  bgcolor={"#FFFFFF"}>
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
          </Box>
          {/* use Tabs */}
          <CustomTabs/>
        </Grid>
      </Grid>
      {/* end Grid Container Parent */}
    </Box>
    
  )
}
