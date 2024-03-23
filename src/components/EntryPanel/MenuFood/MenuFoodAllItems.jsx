import { Box, Chip, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useEffect } from 'react';
import { useState } from 'react';
import { getAllMenusFood } from '../../../common/services/api/menus_food/menu_food.service';

export default function MenuFoodAllItems() {

    const operationsData = [
        {
            id:1,
            name:"Menu midi",
            status:"Actif",
            visibility:"Lun;Mar;Mer;Jeu;Ven 11:00 à 15:00",
            updatedAt:"02/12/24 à 15:43",
        },
        {
            id:2,
            name:"Menu midi",
            status:"Actif",
            visibility:"Lun;Mar;Mer;Jeu;Ven 11:00 à 15:00",
            updatedAt:"02/12/24 à 15:43",
        },
        {
            id:3,
            name:"Menu soir",
            status:"Actif",
            visibility:"Lun;Mar;Mer;Jeu;Ven 11:00 à 15:00",
            updatedAt:"02/12/24 à 15:43",
        },
        {
            id:4,
            name:"Menu Weekend",
            status:"Inactif",
            visibility:"Lun;Mar;Mer;Jeu;Ven 11:00 à 15:00",
            updatedAt:"02/12/24 à 15:43",
        },
        {
            id:5,
            name:"Menu Weekend",
            status:"Inactif",
            visibility:"Lun;Mar;Mer;Jeu;Ven 11:00 à 15:00",
            updatedAt:"02/12/24 à 15:43",
        },
        {
            id:6,
            name:"Brunch",
            status:"Actif",
            visibility:"Lun;Mar;Mer;Jeu;Ven 11:00 à 15:00",
            updatedAt:"02/12/24 à 15:43",
        },
        {
            id:7,
            name:"Brunch",
            status:"Archivé",
            visibility:"Lun;Mar;Mer;Jeu;Ven 11:00 à 15:00",
            updatedAt:"02/12/24 à 15:43",
        },
        {
            id:8,
            name:"Brunch",
            status:"Actif",
            visibility:"Lun;Mar;Mer;Jeu;Ven 11:00 à 15:00",
            updatedAt:"02/12/24 à 15:43",
        },
      ]
      const paginationItems = [1,2,3,4,5];
      const [activedItemPagination, setActivedItemPagination] = useState(1);
      const [menusFood, setMenusFood] = useState([])

      useEffect(() => {
        getAllMenusFood()
        .then((res) => res.json())
        .then((data) => setMenusFood(data.menusFood))
        .catch((err) => console.log(err))
      })

    return (
        <Box>
            <TableContainer sx={{marginTop:"5px"}}>
            <Table aria-label="simple table">
                <TableHead sx={{backgroundColor: '#F0F0F0'}}>
                    <TableRow>
                        <TableCell sx={{color:"#7C7C7C", fontSize:"12px", fontWeight:500, padding:"10px"}} align="left">Name</TableCell>
                        <TableCell sx={{color:"#7C7C7C", fontSize:"12px", fontWeight:500, padding:"10px"}} align="left" >Visibility</TableCell>
                        <TableCell sx={{color:"#7C7C7C", fontSize:"12px", fontWeight:500, padding:"10px"}} align="left" >Modifié </TableCell>
                        <TableCell sx={{color:"#7C7C7C", fontSize:"12px", fontWeight:500, padding:"10px"}} align="left" >Status</TableCell>
                        <TableCell sx={{color:"#7C7C7C", fontSize:"12px", fontWeight:500, padding:"10px"}} align="left" >Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                { operationsData.map((row) => (
                    <TableRow
                       key={row.id}
                       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        {/* <TableCell component="th" scope="row" sx={{paddingX:"5px", paddingY:"10px" }}>
                            <Typography sx={{fontSize:"13px"}}>
                              {row.id}
                            </Typography>
                        </TableCell> */}
                        <TableCell align="left" sx={{paddingX:"3px", paddingY:"10px" }}>
                            <Typography sx={{fontSize:"13px"}}>
                              {row.name}
                            </Typography>
                        </TableCell>
                        <TableCell align="left" sx={{paddingX:"3px", paddingY:"10px" }}>
                            <Typography sx={{fontSize:"13px"}}>
                                {row.visibility}
                            </Typography>
                        </TableCell>
                        <TableCell align="left" sx={{paddingX:"3px", paddingY:"10px" }}>
                            <Typography sx={{fontSize:"13px"}}>
                                {row.updatedAt}
                            </Typography>
                        </TableCell>
                        <TableCell align="left" sx={{paddingX:"3px", paddingY:"10px" }}>
                             <Typography sx={{fontSize:"13px"}}>
                                {row.status}
                            </Typography>
                        </TableCell>
                        <TableCell align="left" sx={{paddingX:"5px", paddingY:"10px" }}>
                            <Box 
                                sx={{
                                    cursor: "pointer"
                                }}
                            >
                                <img src="/images/MenuFood/actionMenuFood.png" alt="action-icon-1" />
                            </Box>
                        </TableCell>
                    </TableRow>
                ))}
                <TableRow></TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        <Box className="paginationSection" 
             sx={{ 
                display: "flex",
                justifyContent:"center",
                marginTop: "20px"
            }}
        >
            <img src="/images/double-arrow-left.svg" alt="" />
            <img src="/images/single-arrow-left.svg" alt="" />
            {
               paginationItems && paginationItems.map((item) => {
                    return (
                        <Box 
                            sx={{ 
                                width: "32px",
                                height: "32px",
                                border:"solid #E5E5E5 1px",
                                borderRadius: "32px",
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center",
                                background: item === activedItemPagination ? "linear-gradient(to right, #8419E2, #F13727)" : "none",
                                color: item === activedItemPagination ? "white" : "black",
                                margin:"3px"
                            }}
                        >
                          {item}
                        </Box>  
                    )
                }) 
            }   
            <img src="/images/single-arrow-right.svg" alt="" />
            <img src="/images/double-arrow-right.svg" alt="" />
        </Box>
        </Box>
    )
}
