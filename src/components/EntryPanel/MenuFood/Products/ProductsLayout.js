import { Box, Grid } from '@mui/material'
import React from 'react'
import SideBar from '../../../../common/components/SideBar'
import Header from '../../../../common/components/Header'
import ProductsList from './ProductsList'

export default function ProductsLayout() {
  return (
    <Box>
        <Grid container>
          <Grid item md={2}>
              <SideBar />
          </Grid>
          <Grid item md={10} bgcolor={"#F0F0F0"}>
              <Header />
              <ProductsList/>
          </Grid>
        </Grid>
    </Box>
  )
}
