import { Box, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export default function SideBar() {
    const sideBarListItems = [
        {
            id: 1,
            label :"Accueil",
            icon: "home.svg",
            link : "/home"
        },
        {
            id: 2,
            label :"Dashboard",
            icon: "dashboard.svg",
            link : "/home"
        },
        {
            id: 3,
            label :"Comptabilité",
            icon: "accounting.svg",
            link : "/comptabilite"
        },
        {
            id: 4,
            label :"Avis",
            icon: "review.svg",
            link : "/home"
        },
        {
            id: 5,
            label :"Gestion des menus",
            icon: "book.svg",
            link : "/home"
        },
        {
            id: 6,
            label :"QR Code",
            icon: "qr.svg",
            link : "/home"
        },
      ]
    
    const [activeItem, setActiveItem] = useState(1);
    const navigate = useNavigate()

    const handleItemClick = (item) => {
        setActiveItem(item.id);
        navigate(item.link);
    };

    const location = useLocation()

    // handle not background applying when navigate
    useEffect(() => {
        const currentRouteItem = sideBarListItems.find(item => item.link === location.pathname);
        if (currentRouteItem) {
            setActiveItem(currentRouteItem.id);
        }
    }, [location.pathname, sideBarListItems]);

  return (
    <Box bgcolor={'#1B0B29'} height={"100%"}>
      <Box>
        <Typography color={"white"}>
            <img src="images/logo_bo.svg" alt="logo_bo" /> Paul
        </Typography>
      </Box>
       {
         sideBarListItems && sideBarListItems.map((item,key) => {
            return (
                <ListItemButton
                    key={item.label}
                    sx={{background: item.id === activeItem ? 'linear-gradient(to right, #8419E2, #F13727)' : 'none'}}
                    onClick={() => handleItemClick(item)}
                    // sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                >
                    <ListItemIcon sx={{ color: '#FFFFFF', minWidth:"0px", marginRight:"5px"}}>
                        <img src={`images/sidebar/${item.icon}`} alt="icon_sidebar" srcset="" />
                    </ListItemIcon>
                    <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium', color:"#FFFFFF" }}
                    />
                </ListItemButton>
            )
        })
       }
    </Box>
  )
}