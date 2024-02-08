import { Box, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function AccountingOperations() {

  const operationsData = [
    {
        tableNum:1,
        date:"22/03/2023",
        paymentMethod:"virement",
        porboire:25.00,
        SousTotal:100,
        total:200,
        status:"Réussi",
        statusPos:"Notifié",
    },
    {
        tableNum:2,
        date:"22/03/2023",
        paymentMethod:"virement",
        porboire:25.00,
        SousTotal:100,
        total:200,
        status:"Réussi",
        statusPos:"Notifié",
    },
    {
        tableNum:3,
        date:"22/03/2023",
        paymentMethod:"virement",
        porboire:25.00,
        SousTotal:100,
        total:200,
        status:"Réussi",
        statusPos:"Notifié",
    },
    {
        tableNum:4,
        date:"22/03/2023",
        paymentMethod:"virement",
        porboire:25.00,
        SousTotal:100,
        total:200,
        status:"Réussi",
        statusPos:"Notifié",
    },
    {
        tableNum:5,
        date:"22/03/2023",
        paymentMethod:"virement",
        porboire:25.00,
        SousTotal:100,
        total:200,
        status:"Réussi",
        statusPos:"Notifié",
    },
  ]
  const paginationItems = [1,2,3,4,5];
  const [activedItemPagination, setActivedItemPagination] = useState(1);
  return (
    <Box 
        sx={{
            backgroundColor:"white",
            border:"solid #E5E5E5 0.5px",
            borderRadius: "10px",
            padding:"20px"
        }}
    >
        <Box sx={{display:"flex", justifyContent:"space-between"}}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src="/images/search_icon.svg" alt="searhc_icon" />
                <TextField id="input-with-sx" label="search by date" variant="standard" />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src="/images/search_icon.svg" alt="searhc_icon" />
                <TextField id="input-with-sx" label="search by amount" variant="standard" />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src="/images/search_icon.svg" alt="searhc_icon" />
                <TextField id="input-with-sx" label="search by cart" variant="standard" />
            </Box>
            <Box>
                <FormControl sx={{width:"200px"}}>
                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        // value={age}
                        // onChange={handleChange}
                    >
                        <MenuItem value={10} selected>Tous</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Box>
        {/*end header tab & start table */}
        <TableContainer sx={{marginTop:"20px"}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{backgroundColor: '#F0F0F0'}}>
                    <TableRow>
                        <TableCell>Table</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Méthode de paiment</TableCell>
                        <TableCell align="right">Pourboire</TableCell>
                        <TableCell align="right">Sous-total</TableCell>
                        <TableCell align="right">Total</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Status-Pos</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                { operationsData.map((row) => (
                    <TableRow
                       key={row.tableNum}
                       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.tableNum}
                    </TableCell>
                        <TableCell align="right">{row.date}</TableCell>
                        <TableCell align="right">{row.paymentMethod}</TableCell>
                        <TableCell align="right">{row.porboire}</TableCell>
                        <TableCell align="right">{row.SousTotal}</TableCell>
                        <TableCell align="right">{row.total}</TableCell>
                        <TableCell align="right">{row.status}</TableCell>
                        <TableCell align="right">{row.statusPos}</TableCell>
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