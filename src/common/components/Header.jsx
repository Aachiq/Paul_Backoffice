import { Avatar, Box, IconButton, InputAdornment, Menu, MenuItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { RemoveItemLocalStorage } from '../utils/auth_helper';
import { logoutBo } from '../services/api/auth/auth.service';

export default function Header() {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        console.log(event.currentTarget)
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        logoutBo()
        .then(() =>{
            RemoveItemLocalStorage("userBo_infos");
            navigate('/')
        })
        .catch()
    }

  return (
    <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}  bgcolor={"#FFFFFF"}>
        <Box padding={2}>
             <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {/* <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> */}
                <SearchIcon fontSize="20px" />
                <TextField id="input-with-sx" variant="standard" placeholder='Search' 
                    sx={{marginLeft:"5px", backgroundColor:"#F0F0F0"}}
                />
            </Box>
        </Box>
        <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            sx={{cursor: "pointer"}}
        >
            <Box marginRight={4}>
                <img src="/images/notif_icon.svg" alt="" />
            </Box>
            <Box display={"flex"} className='header-section-auth'>
                <Box marginRight={1.5}>
                    <Avatar alt="user_picture" src="/images/avatar.png" />
                </Box>
                <Box display={"flex"} flexDirection={"column"} marginRight={2.5}>
                    <Typography variant='p' sx={{ typography: 'subtitle2' }}>Karam Noury</Typography>
                    <Typography variant='p' color={"#7C7C7C"}>Manager</Typography>
                </Box>
            </Box>
            <Box 
                marginRight={2}  
                id="auth-menu"
                aria-controls={open ? 'auth-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
             <img src="/images/arrow-down.svg" alt="avatar_img" />
            </Box>
        </Box>
        <Menu
            id="auth-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'auth-menu',
            }}
            sx={{marginTop:"20px"}}
        >
        <MenuItem onClick={handleLogout} sx={{background:"white"}}>Se déconnecter</MenuItem>
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
      </Menu>
    </Box>
  )
}
