import { Box, Grid, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import StarIcon from '@mui/icons-material/Star';

export default function Home() {
  const sideBarListItems = [
    {
        id: 1,
        label :"Accueil",
        icon: <StarIcon/>
    },
    {
        id: 2,
        label :"Dashboard",
        icon: <StarIcon/>
    },
    {
        id: 3,
        label :"Comptabilité",
        icon: <StarIcon/>
    },
    {
        id: 4,
        label :"Avis",
        icon: <StarIcon/>
    },
    {
        id: 5,
        label :"Gestion des menus",
        icon: <StarIcon/>
    },
    {
        id: 6,
        label :"QR Code",
        icon: <StarIcon/>
    },
  ]
  return (
    <Box>
       <Grid container spacing={4}>
        <Grid item md={3} bgcolor={'#1B0B29'}>
            {
                sideBarListItems && sideBarListItems.map((item,key) => {
                    return (
                        <ListItemButton
                            key={item.label}
                            // sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                        >
                            <ListItemIcon sx={{ color: '#FFFFFF', minWidth:"0px", marginRight:"5px"}}>
                                <StarIcon/>
                            </ListItemIcon>
                            <ListItemText
                                primary={item.label}
                                primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium', color:"#FFFFFF" }}
                            />
                        </ListItemButton>
                    )
                })
            }
        </Grid>
        <Grid item md={9} bgcolor={'beige'}>
          <Box>
            <Typography>
                Epic Music World
            </Typography>
          </Box>
        </Grid>
       </Grid>
    </Box>
  )
}
