import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

export default function QuickLinks() {
  return (
    <Box sx={{ width: "68%", m: "auto",mb:5 }}>
        <Typography style={{fontWeight:600,marginBottom:"10px"}}>Quick Links</Typography>
        <Grid gap={1} container>
            <Grid xs={12} md={2.9}>
            <Paper  sx={{p:2,bgcolor:"#f3f6f5",borderRadius:2,cursor:"pointer"}} elevation={1}  >
                <Typography sx={{fontWeight:600}}>58,469 ads in Electronics</Typography>
                <Typography sx={{color:"gray",fontSize:14,fontWeight:200}}>
                Desktop Computers | Laptops
                </Typography>
                <Typography sx={{color:"gray",fontSize:14,fontWeight:200}}>
               | TVs | Cameras, Camcorders &
                </Typography>
                <Typography sx={{color:"gray",fontSize:14,fontWeight:200}}>
                Accessories | Audio & Sound
                </Typography>
                <Typography sx={{color:"gray",fontSize:14,fontWeight:200}}>
              System
                </Typography>
            </Paper>
            </Grid>

            <Grid xs={12} md={2.9}>
            <Paper  sx={{p:2,bgcolor:"#f3f6f5",borderRadius:2,cursor:"pointer"}} elevation={1}  >
                <Typography sx={{fontWeight:600}}>17,368 ads in Property</Typography>
                <Typography sx={{color:"gray",fontSize:14,fontWeight:200}}>
                Apartments For Sale | Land
                </Typography>
                <Typography sx={{color:"gray",fontSize:14,fontWeight:200}}>
               | Apartment Rentals
                </Typography>
                <Typography sx={{color:"gray",fontSize:14,fontWeight:200}}>
                | Commercial Property Rentals
                </Typography>
                <Typography sx={{color:"gray",fontSize:14,fontWeight:200}}>
                | Room Rentals
                </Typography>
            </Paper>
            </Grid>

            <Grid xs={12} md={2.9}>
            <Paper  sx={{p:2,bgcolor:"#f3f6f5",borderRadius:2,cursor:"pointer"}} elevation={1}  >
                <Typography sx={{fontWeight:600}}>630 ads in Jobs</Typography>
                <Typography sx={{color:"gray",fontSize:14,fontWeight:200}}>
                Sales Executive | Marketing
                </Typography>
                <Typography sx={{color:"gray",fontSize:14,fontWeight:200}}>
                Executive | Delivery Rider
                </Typography>
                <Typography sx={{color:"gray",fontSize:14,fontWeight:200}}>
                | Customer Service Jobs
                </Typography>
                <Typography sx={{color:"gray",fontSize:14,fontWeight:200}}>
                | Supervisor
                </Typography>
            </Paper>
            </Grid>

            <Grid xs={12} md={2.9}>
            <Paper  sx={{p:2,bgcolor:"#f3f6f5",borderRadius:2,cursor:"pointer",pb:4.5}} elevation={1}  >
                <Typography sx={{fontWeight:600}}>35,320 ads in Vehicles</Typography>
                <Typography sx={{color:"gray",fontSize:14,fontWeight:200}}>
                Cars | Motorbikes | Bicycles
                </Typography> 
                <Typography sx={{color:"gray",fontSize:14,fontWeight:200}}>
                | Trucks | Auto Parts &
                </Typography>
                <Typography sx={{color:"gray",fontSize:14,fontWeight:200}}>
                Accessories
                </Typography>
            </Paper>
            </Grid>
        </Grid>
    </Box>
  )
}
