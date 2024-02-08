import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import AccountingOperations from '../../components/EntryPanel/Accounting/AccountingOperations';

export default function CustomTabs() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box sx={{ width: '100%', typography: 'body1', marginTop:'30px'}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList 
            centered 
            textColor="secondary"
            indicatorColor="secondary" 
            onChange={handleChange} 
          >
            <Tab label="Opérations" value="1" sx={{textTransform:"none"}} />
            <Tab label="Rapport" value="2" sx={{textTransform:"none"}} />
            <Tab label="Virement" value="3" sx={{textTransform:"none"}} />
            <Tab label="Factures" value="3" sx={{textTransform:"none"}} />
          </TabList>
        </Box>
        <TabPanel value="1">
          <AccountingOperations/>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>

  );
}