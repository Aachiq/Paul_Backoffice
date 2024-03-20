import { Box, Chip, FormControl, InputLabel, MenuItem, Select, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { getOperationsByStatusService, getOperationsService, getStatusService } from '../../../common/services/api/operations/operation.service';
import { formatDate } from '../../../common/utils/formaters';

export default function AccountingOperations() {

  const paginationItems = [1,2,3,4,5];
  const [operations, setOperations] = useState([]);
  const [statusArray, setStatusArray] = useState([
    {
        id:0,
        label:"Tous"
    }
  ]);
    const [activedItemPagination, setActivedItemPagination] = useState(1);
    
    // select logic
    const [statusValue, setStatusValue] = React.useState();

    // const handleChangeFilterByStatus = (event) => {
    //     setStatusValue(event.target.value);
    //     getOperationsByStatusService(event.target.value)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data.operations);
    //         setOperations(data.operations)
    //         console.log(operations)
    //     })
    //     .catch((err) => console.log(err))
    // };

    useEffect(() => {
        getOperationsService()
        .then((res) => res.json())
        .then((data) => setOperations(data.operations))
        .catch((err) => console.log(err))

        getStatusService()
        .then((res) => res.json())
        .then((data) => setStatusArray([
            ...statusArray,
            ...data.statusOperations
        ]))
        .catch((err) => console.log(err)) 
    },[])

    const getStatusBackgorundColor = (status) => {
        let statusColor = "";
        switch(status){
            case "Réussi": 
                statusColor = "#90F487";
                break; 
            case "Échoué": 
                statusColor = "#FF7B7B";
                break; 
            case "En attente": 
                statusColor = "#FFBC39";
                break; 
            case "Remboursement partiel": 
                statusColor = "#E787FF";
                break; 
            case "Remboursement intégral": 
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
                <SearchIcon fontSize="20px" />
                <TextField id="input-with-sx" variant="standard" placeholder='Search by date' 
                    sx={{marginLeft:"5px",}}
                />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <SearchIcon fontSize="20px" />
                <TextField id="input-with-sx" variant="standard" placeholder='Search by amount' 
                    sx={{marginLeft:"5px",}}
                />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <SearchIcon fontSize="20px" />
                <TextField id="input-with-sx" variant="standard" placeholder='Search by card' 
                    sx={{marginLeft:"5px",}}
                />
            </Box>
            
            <Box>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">Status</InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={statusValue}
                        label="Status"
                        // onChange={handleChangeFilterByStatus}
                    >
                        {/* <MenuItem value={0}>
                           Tous
                        </MenuItem> */}
                        {
                            statusArray && statusArray.map((item, key) => {
                                return (
                                    <MenuItem key={item.label} value={item.id}>
                                        {item.label}
                                    </MenuItem>
                                )
                            })
                        }
                    </Select>
                </FormControl>
            </Box>
        </Box>
        {/*end header tab & start table */}
        <TableContainer sx={{marginTop:"20px"}}>
            <Table aria-label="simple table">
                <TableHead sx={{backgroundColor: '#F0F0F0'}}>
                    <TableRow>
                        <TableCell sx={{color:"#7C7C7C", fontSize:"12px", fontWeight:500, padding:"10px"}} align="left">Table</TableCell>
                        <TableCell sx={{color:"#7C7C7C", fontSize:"12px", fontWeight:500, padding:"10px"}} align="left" >Date</TableCell>
                        <TableCell sx={{color:"#7C7C7C", fontSize:"12px", fontWeight:500, padding:"10px"}} align="left" >Méthode de paiment</TableCell>
                        <TableCell sx={{color:"#7C7C7C", fontSize:"12px", fontWeight:500, padding:"10px"}} align="left" >Pourboire</TableCell>
                        <TableCell sx={{color:"#7C7C7C", fontSize:"12px", fontWeight:500, padding:"10px"}} align="left" >Sous-total</TableCell>
                        <TableCell sx={{color:"#7C7C7C", fontSize:"12px", fontWeight:500, padding:"10px"}} align="left" >Total</TableCell>
                        <TableCell sx={{color:"#7C7C7C", fontSize:"12px", fontWeight:500, padding:"10px"}} align="left" >Status</TableCell>
                        <TableCell sx={{color:"#7C7C7C", fontSize:"12px", fontWeight:500, padding:"10px"}} align="left" >Status-Pos</TableCell>
                        <TableCell sx={{color:"#7C7C7C", fontSize:"12px", fontWeight:500, padding:"10px"}} align="left" >Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                { operations.map((row) => (
                    <TableRow
                       key={row.tabNum}
                       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row" sx={{paddingX:"5px", paddingY:"10px" }}>
                            <Typography sx={{fontSize:"13px", fontWeight:"500"}}>
                              {row.tabNum}
                            </Typography>
                        </TableCell>
                        <TableCell align="left" sx={{paddingX:"3px", paddingY:"10px" }}>
                            <Typography sx={{fontSize:"13px", fontWeight:"500"}}>
                              {formatDate(row.date_operation)}
                            </Typography>
                        </TableCell>
                        <TableCell align="left" sx={{ paddingX: "3px", paddingY: "10px"}}>
                             <Box display="flex" alignItems="center">
                                <img src={`/images/accounting/${row.tabNum % 2 === 0 ? 'visa-icon' : 'master-card-icon'}.svg`} alt="icon-payment-method" />
                                <Typography sx={{fontSize:"13px", fontWeight:"500"}}>
                                  <Box as="span" marginX={"3px"}>***</Box>
                                  {row.payment_method}
                                </Typography>
                             </Box>
                        </TableCell>
                        <TableCell align="left" sx={{paddingX:"3px", paddingY:"10px" }}>
                            <Typography sx={{fontSize:"13px", fontWeight:"500"}}>
                                {row.pourboire + " Dh"}
                            </Typography>
                        </TableCell>
                        <TableCell align="left" sx={{paddingX:"3px", paddingY:"10px" }}>
                            <Typography sx={{fontSize:"13px", fontWeight:"500"}}>
                                {row.subTotal + " Dh"}
                            </Typography>
                        </TableCell>
                        <TableCell align="left" sx={{paddingX:"3px", paddingY:"10px" }}>
                             <Typography sx={{fontSize:"13px", fontWeight:"500"}}>
                                {row.total + " Dh"}
                            </Typography>
                        </TableCell>
                        <TableCell align="left" sx={{paddingX:"3px", paddingY:"10px" }}>
                            <Stack direction="row" spacing={1}>
                                <Chip label={row.status.label} sx={{
                                        backgroundColor: getStatusBackgorundColor(row.status.label),
                                        fontSize:"13px",
                                        fontWeight:"500"
                                    }} 
                                />
                                { (row.status.label === "Échoué" || row.status.label === "En attente") && <img src="/images/accounting/icon-failed-status.svg" alt="icon-failed-status" /> }
                            </Stack> 
                        </TableCell>
                        <TableCell align="left" sx={{paddingX:"5px", paddingY:"10px" }}>
                            <Stack direction="row" spacing={1}>
                                <Chip label={row.status_pos} sx={{
                                        backgroundColor: row.status_pos === "Notifié" ? "#90F487" : "#FDFF9B",
                                        fontSize:"13px",
                                        fontWeight:"500"
                                    }} 
                                />
                            </Stack> 
                        </TableCell>
                        <TableCell align="left" sx={{paddingX:"5px", paddingY:"10px" }}>
                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                <img src="/images/accounting/action-icon-1.svg" alt="action-icon-1" />
                                <img src="/images/accounting/action-icon-2.svg" alt="action-icon-2" 
                                     style={{marginLeft:"10px", marginRight:"10px"}}
                                />
                                <img src="/images/accounting/action-icon-3.svg" alt="action-icon-3" />
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
