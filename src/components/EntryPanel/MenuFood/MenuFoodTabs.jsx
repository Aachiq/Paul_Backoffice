import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Tab } from "@mui/material";
import { useState } from "react";
import MenuFoodAllItems from "./MenuFoodAllItems";

export default function MenuFoodTabs() {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
  
    return (
      <Box 
       sx={{  
          typography: 'body1', 
          marginTop:'30px',
          backgroundColor:"white",
          padding:"20px"
       }}
      >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList 
              centered 
              textColor="secondary"
              indicatorColor="secondary" 
              onChange={handleChange} 
            >
              <Tab label="Tout" value="1" sx={{textTransform:"none"}} />
              <Tab label="Actif" value="2" sx={{textTransform:"none"}} />
              <Tab label="Inactif" value="3" sx={{textTransform:"none"}} />
              <Tab label="Supprimé" value="3" sx={{textTransform:"none"}} />
            </TabList>
          </Box>
          <TabPanel value="1">
            <MenuFoodAllItems/>
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
  
    );
}
