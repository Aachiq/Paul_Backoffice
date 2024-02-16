import React from 'react'
import SideBar from '../../../common/components/SideBar'
import { Box, Grid} from '@mui/material'
import CustomTabs from '../../../common/components/CustomTabs';
import Header from '../../../common/components/Header';

export default function Accounting() {
  return (
    <Box>
      <Grid container>
        <Grid item md={2}>
          <SideBar/>
        </Grid>
        <Grid item md={10} bgcolor={"#F0F0F0"}>
          {/* use Headr Component */}
          <Header/>
          {/* use Tabs Component */}
          <CustomTabs/>
        </Grid>
      </Grid>
      {/* end Grid Container Parent */}
    </Box>
    
  )
}
