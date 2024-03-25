import { Box, Button, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useEffect, useState } from 'react';
import { getCategoriesService } from '../../../../common/services/api/categories/category.service';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';


const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function CategoriesList() {
    const [categoriessBo, setCategoriesBo] = useState([])
    const paginationItems = [1, 2, 3, 4, 5];
    const [activedItemPagination, setActivedItemPagination] = useState(1)

    // modal logic
    const [open, setOpen] = useState(false);
    const handleOpenCatgeoryModal = () => setOpen(true);
    const handleCloseCategoryModal = () => setOpen(false);

    //
    useEffect(() => {
        getCategoriesService()
        .then((categories) => setCategoriesBo(categories))
    },[])
    
    return (
        <Box padding={"22px"}>
            <Box>
                <Typography variant="h3" fontSize={28} fontFamily={"Poppins"} fontWeight={600} >Categories</Typography>
                <Typography variant="body2" fontSize={12} marginTop={1} fontWeight={400} fontFamily={"Poppins"}>
                    Créez, modifiez ou supprimez autant de catégories que vous le souhaitez. Une fois créés, ces catégories seront disponibles sur les différentes pages de gestion des menus.
                </Typography>
            </Box>
            <Box sx={{
                marginTop: "40px",
                padding: "20px",
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#FFFFFF",
                borderRadius: "16px"
            }}
            >
                <Button variant='outlined'
                    sx={{
                        background: 'linear-gradient(91.41deg, #8419E2 4.01%, #F13727 100%)',
                        color: 'white',
                        border: "none",
                        textTransform: "none",
                        fontSize: "16px",
                        fontWeight: "500px",
                        fontFamily: "Poppins",
                    }}
                    onClick={handleOpenCatgeoryModal}
                    >+ Nouveau catégorie
                </Button>
                <Modal
                    open={open}
                    onClose={handleCloseCategoryModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={styleModal}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Modal>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', marginRight: "15px" }}>
                        <SearchIcon fontSize="20px" />
                        <TextField id="input-with-sx" variant="standard" placeholder='rechercher'
                            sx={{ marginLeft: "5px", }}
                        />
                    </Box>
                    <Box marginRight={"15px"} padding={"0px"}>
                        <img src="/images/menuFood/products/twoArrows.svg" alt="icon-two-arrows" />
                    </Box>
                    <Typography variant="body2" fontSize={12} fontWeight={500} fontFamily={"Poppins"} marginRight={"15px"}>
                        Trier les categories
                    </Typography>
                    <img src="/images/menuFood/products/sort_icon.svg " alt="icon-two-arrows" />
                </Box>
            </Box>
            <Box
                sx={{
                    marginTop: "20px",
                    backgroundColor: "white",
                    padding: "15px",
                    borderRadius: "10px"
                }}
            >
                <Box sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "16px"
                }}
                >
                    {/* <Button variant="outlined" sx={{
                        borderRadius: "16px",
                        borderColor: "black",
                        color: "black",
                        marginX: "5px",
                        textTransform: "none",
                        fontSize: "13px"
                    }}>retour en stock</Button>
                    <Button variant="outlined" sx={{
                        borderRadius: "16px",
                        borderColor: "black",
                        color: "black",
                        marginX: "5px",
                        textTransform: "none",
                        fontSize: "13px"
                    }}>Rupture  de stock</Button> */}
                    <Button variant="outlined"
                        startIcon={<DeleteOutlineIcon />}
                        sx={{
                            borderRadius: "16px",
                            borderColor: "black",
                            color: "black",
                            marginX: "5px",
                            textTransform: "none",
                            fontSize: "13px",
                        }}>supprimer</Button>
                </Box>
                <Box marginTop={"20px"} className="table-products">
                    <TableContainer sx={{ marginTop: "5px" }}>
                        <Table aria-label="simple table">
                            <TableHead sx={{ backgroundColor: '#F0F0F0' }}>
                                <TableRow>
                                    <TableCell sx={{ color: "#7C7C7C", fontSize: "12px", fontWeight: 500, padding: "10px" }} align="left">Name</TableCell>
                                    <TableCell sx={{ color: "#7C7C7C", fontSize: "12px", fontWeight: 500, padding: "10px" }} align="left" >Photo</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {categoriessBo.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        {/* <TableCell component="th" scope="row" sx={{paddingX:"5px", paddingY:"10px" }}>
                                    <Typography sx={{fontSize:"13px"}}>
                                    {row.id}
                                    </Typography>
                                </TableCell> */}
                                        <TableCell align="left" sx={{ paddingX: "3px", paddingY: "10px" }}>
                                            <Typography sx={{ fontSize: "13px" }}>
                                                {row.name}
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="left" 
                                            sx={{ 
                                                paddingX: "3px",
                                                paddingY: "10px", 
                                                display:"flex",
                                                alignItems:"center"
                                            }}
                                         >
                                            <VisibilityOutlinedIcon/>
                                            <Typography sx={{ fontSize: "13px" }}>
                                                {/* {row.image} */}
                                                 Photo
                                            </Typography>
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
                            justifyContent: "center",
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
                                            border: "solid #E5E5E5 1px",
                                            borderRadius: "32px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            background: item === activedItemPagination ? "linear-gradient(to right, #8419E2, #F13727)" : "none",
                                            color: item === activedItemPagination ? "white" : "black",
                                            margin: "3px"
                                        }}
                                    >
                                        {item}
                                    </Box>
                                )
                            })
                        }
                        <img src="/images/single-arrow-right.svg" alt="single-arrow-right" />
                        <img src="/images/double-arrow-right.svg" alt="single-arrow-right" />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
