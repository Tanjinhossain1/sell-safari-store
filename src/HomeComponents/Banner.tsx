import { Box, Paper, Toolbar, Typography } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField'; 
import SearchIcon from '@mui/icons-material/Search';  
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Banner() {
  return (
    <Box
        component="main"
        sx={{
          p: 3,
          background: "linear-gradient(100deg, #f5642d 50%, #f48623 100%)",
          boxShadow: "none",
          border: 0,
          width:'100%',
        }}
      >
        
        <Toolbar />
        <Box
       sx={{
        position: 'relative',
        color: '#fff', // Text color
        textAlign: 'center',
        lineHeight: '1.5',
        padding: '40px', // Adjust padding as needed
        backgroundImage: 'url(/main-home.png)', // Reference the image in the public directory
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '10px', // Rounded corners for the background
        width:'100%',
        height:'60vh'
      }}>
        <Box sx={{ width:'100%',alignContent:'center'}}>
            <Paper elevation={1} sx={{borderRadius:15,px:1, width:"140px",mx:'auto',mt:20,backgroundColor:"#ffa200",color:"white",display:'flex',justifyContent:'center',alignItems:"center"}}>
              <LocationOnIcon sx={{m:0,mr:1,fontSize:15,color:"white",p:0}} /> 
              <Typography sx={{fontSize:13}}> All Bangladesh</Typography>
            </Paper>
        </Box>
         <div className="search-container">
  <input type="text" className="input-for-search" placeholder="Search for items" />
  <button className="search-button">
    <SearchIcon sx={{ fontSize: 30 }} />
  </button>
</div>
        </Box>
      </Box>
  )
}
