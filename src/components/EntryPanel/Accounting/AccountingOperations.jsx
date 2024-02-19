import { Box, Chip, FormControl, InputLabel, MenuItem, Paper, Select, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';

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
        status:"Échoué",
        statusPos:"Notifié",
    },
    {
        tableNum:3,
        date:"22/03/2023",
        paymentMethod:"virement",
        porboire:25.00,
        SousTotal:100,
        total:200,
        status:"Échoué",
        statusPos:"Non Notifié",
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
        status:"Échoué",
        statusPos:"Notifié",
    },
    {
        tableNum:6,
        date:"22/03/2023",
        paymentMethod:"virement",
        porboire:25.00,
        SousTotal:100,
        total:200,
        status:"Remboursement partiel ",
        statusPos:"Notifié",
    },
    {
        tableNum:7,
        date:"22/03/2023",
        paymentMethod:"virement",
        porboire:25.00,
        SousTotal:100,
        total:200,
        status:"Remboursement partiel ",
        statusPos:"Notifié",
    },
    {
        tableNum:8,
        date:"22/03/2023",
        paymentMethod:"virement",
        porboire:25.00,
        SousTotal:100,
        total:200,
        status:"Remboursement partiel ",
        statusPos:"Notifié",
    },
    {
        tableNum:9,
        date:"22/03/2023",
        paymentMethod:"virement",
        porboire:25.00,
        SousTotal:100,
        total:200,
        status:"Remboursement partiel ",
        statusPos:"Notifié",
    },
    {
        tableNum:10,
        date:"22/03/2023",
        paymentMethod:"virement",
        porboire:25.00,
        SousTotal:100,
        total:200,
        status:"Remboursement intégral ",
        statusPos:"Notifié",
    },
  ]
  const paginationItems = [1,2,3,4,5];
  const [activedItemPagination, setActivedItemPagination] = useState(1);
  // select logic
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const getStatusBackgorundColor = (status) => {
        let statusColor = "";
        switch(status){
            case "Réussi": 
                statusColor = "#90F487";
                break; 
            case "Échoué": 
                statusColor = "#FF7B7B";
                break; 
            case "Remboursement partiel ": 
                statusColor = "#E787FF";
                break; 
            case "Remboursement intégral ": 
                statusColor = "#75F7FF";
                break; 
            default:
                break ;
        }
        return statusColor;
    }
  return (
    <Box 
        sx={{
            backgroundColor:"white",
            border:"solid #E5E5E5 0.5px",
            borderRadius: "10px",
            padding:"18px"
        }}
    >
        <Box sx={{display:"flex", justifyContent:"space-between"}}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {/* <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> */}
                <SearchIcon fontSize="20px" />
                <TextField id="input-with-sx" variant="standard" placeholder='Search' 
                    sx={{marginLeft:"5px"}}
                />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {/* <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> */}
                <SearchIcon fontSize="20px" />
                <TextField id="input-with-sx" variant="standard" placeholder='Search' 
                    sx={{marginLeft:"5px"}}
                />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {/* <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> */}
                <SearchIcon fontSize="20px" />
                <TextField id="input-with-sx" variant="standard" placeholder='Search' 
                    sx={{marginLeft:"5px"}}
                />
            </Box>
            
            <Box>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">Status</InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        {/* <MenuItem value="" selected>
                            <em>None</em>
                        </MenuItem> */}
                        <MenuItem value={10}>Tous</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Box>
        {/*end header tab & start table */}
        <TableContainer sx={{marginTop:"20px"}}>
            <Table sx={{ minWidth: 700 }} aria-label="simple table">
                <TableHead sx={{backgroundColor: '#F0F0F0'}}>
                    <TableRow>
                        <TableCell sx={{color:"#7C7C7C", fontSize:"12px", fontWeight:500}}>Table</TableCell>
                        <TableCell sx={{color:"#7C7C7C", fontSize:"12px", fontWeight:500, padding:"8px"}} align="left" >Date</TableCell>
                        <TableCell sx={{color:"#7C7C7C", fontSize:"12px", fontWeight:500, padding:"8px"}} align="left" >Méthode de paiment</TableCell>
                        <TableCell sx={{color:"#7C7C7C", fontSize:"12px", fontWeight:500, padding:"8px"}} align="left" >Pourboire</TableCell>
                        <TableCell sx={{color:"#7C7C7C", fontSize:"12px", fontWeight:500, padding:"8px"}} align="left" >Sous-total</TableCell>
                        <TableCell sx={{color:"#7C7C7C", fontSize:"12px", fontWeight:500, padding:"8px"}} align="left" >Total</TableCell>
                        <TableCell sx={{color:"#7C7C7C", fontSize:"12px", fontWeight:500, padding:"8px"}} align="left" >Status</TableCell>
                        <TableCell sx={{color:"#7C7C7C", fontSize:"12px", fontWeight:500, padding:"8px"}} align="left" >Status-Pos</TableCell>
                        <TableCell sx={{color:"#7C7C7C", fontSize:"12px", fontWeight:500, padding:"8px"}} align="left" >Actions</TableCell>
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
                        <TableCell align="right">{row.porboire + "Dh"}</TableCell>
                        <TableCell align="right">{row.SousTotal + "Dh"}</TableCell>
                        <TableCell align="right">{row.total + "Dh"}</TableCell>
                        <TableCell align="right">
                            <Stack direction="row" spacing={1}>
                                <Chip label={row.status} sx={{
                                        backgroundColor: getStatusBackgorundColor(row.status)
                                    }} 
                                />
                                { row.status === "Échoué" && <img src="/images/accounting/icon-failed-status.svg" alt="icon-failed-status" /> }
                            </Stack> 
                        </TableCell>
                        <TableCell align="right">
                            <Stack direction="row" spacing={1}>
                                <Chip label={row.statusPos} sx={{
                                        backgroundColor: row.statusPos === "Notifié" ? "#90F487" : "#FDFF9B"
                                    }} 
                                />
                            </Stack> 
                        </TableCell>
                        <TableCell align="right">
                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                <img src="/images/accounting/action-icon-1.svg" alt="action-icon-1" 
                                    //  style={{marginX:"5px"}}
                                />
                                <img src="/images/accounting/action-icon-2.svg" alt="action-icon-2" 
                                     style={{marginLeft:"10px", marginRight:"10px"}}
                                />
                                <img src="/images/accounting/action-icon-3.svg" alt="action-icon-3" 
                                    //  style={{marginX:"5px"}}
                                />
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
