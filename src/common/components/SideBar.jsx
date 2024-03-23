import { Box, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './styles/sidebar.css';

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
            link : "/menu-food"
        },
        {
            id: 6,
            label :"QR Code",
            icon: "qr.svg",
            link : "/home"
        },
        {
            id: 7,
            label :"Paramètre",
            icon: "settings.svg",
            link : "/settings"
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
    <Box bgcolor={'#1B0B29'} 
          sx={{ position: "fixed", height: "100%", width:"210px", zIndex:"1000" }}
    >
      <Box 
        display={'flex'} 
        alignItems={"center"} 
        alignContent={"center"}
        paddingTop={"15px"}
        marginLeft={"10px"}
      >
        <img src="images/logo_bo.svg" alt="logo_bo" /> 
        <img src="images/paul_logotype.svg" alt="logo_bo" style={{ marginLeft: "12px" }} /> 
      </Box>
      <Box marginTop={"30px"} height={"87vh"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
        <Box>
            {
                sideBarListItems && sideBarListItems.map((item, key) => {
                    if (item.id === 7) {
                        return null;
                    }
                    return (
                        <ListItemButton
                            key={item.label}
                            sx={{
                                background: item.id === activeItem ? 'linear-gradient(to right, #8419E2, #F13727)' : 'none',
                                marginTop: "10px",
                                borderRadius: "5px",
                                width: "95%",
                                // width: "100%",
                                margin: "auto",
                                marginBottom: item.id === 7 ? 'auto' : '10px',
                            }}
                            onClick={() => handleItemClick(item)}
                        // sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                        >
                            <ListItemIcon sx={{ color: '#FFFFFF', minWidth: "0px", marginRight: "5px" }}>
                                <img src={`images/sidebar/${item.icon}`} alt="icon_sidebar" srcset="" />
                            </ListItemIcon>
                            <ListItemText
                                primary={item.label}
                                primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium', color: "#FFFFFF" }}
                            />
                        </ListItemButton>
                    )
                })
            }
        </Box>
        <Box>
            {
                sideBarListItems && sideBarListItems.map((item, key) => {
                    if (item.id !== 7) {
                        return null;
                    }
                    return (
                        <ListItemButton
                            key={item.label}
                            sx={{
                                background: item.id === activeItem ? 'linear-gradient(to right, #8419E2, #F13727)' : 'none',
                                marginTop: "10px",
                                borderRadius: "5px",
                                width: "95%",
                                margin: "auto",
                                marginBottom: item.id === 7 ? 'auto' : '10px',
                            }}
                            onClick={() => handleItemClick(item)}
                        // sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                        >
                            <ListItemIcon sx={{ color: '#FFFFFF', minWidth: "0px", marginRight: "5px" }}>
                                <img src={`images/sidebar/${item.icon}`} alt="icon_sidebar" srcset="" />
                            </ListItemIcon>
                            <ListItemText
                                primary={item.label}
                                primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium', color: "#FFFFFF" }}
                            />
                        </ListItemButton>
                    )
                })
            }
        </Box>
      </Box>
    </Box>
  )
}
