"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CallToAction from '@/Components/CallToAction';
// import Photos from '@/Components/photos';
import OverView from '@/Components/OverView';
import Images from '@/Components/Images';
import Videos from '@/Components/Videos';

const amenityOverView = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <div className="container mx-auto py-12">
      <h1 className="text-center my-12 text-4xl font-bold text-[#c69840]">Media Gallery</h1>
      </div>
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value} >
        <Box className="flex justify-center" sx={{ borderBottom: 0, borderColor: 'divider' }} >
          <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: '#c69840',
            },
          }}>
             <Tab
              label="Images"
              value="1"
              sx={{
                '&.Mui-selected': {
                  color: '#c69840',
                  borderBottomColor: '#c69840',
                },
                '&:hover': {
                  color: '#c69840',
                  borderBottomColor: '#c69840',
                  opacity: 1,
                },
              }}
            />
            <Tab
              label="Videos"
              value="2"
              sx={{
                '&.Mui-selected': {
                  color: '#c69840',
                  borderBottomColor: '#c69840',
                },
                '&:hover': {
                  color: '#c69840',
                  borderBottomColor: '#c69840',
                  opacity: 1,
                },
              }}
            />
          </TabList>
        </Box>
        <TabPanel value="1">
            <div>
                <Images/>
            </div>
        </TabPanel>
        <TabPanel value="2">
          <Videos/>
        </TabPanel>
      </TabContext>
    </Box>
    </>
  );
}
export default amenityOverView;