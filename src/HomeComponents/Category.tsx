import React from "react";
import { Grid, Typography, Slider, useMediaQuery, useTheme } from '@mui/material';
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MonitorIcon from '@mui/icons-material/Monitor';
import LivingIcon from '@mui/icons-material/Living';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const categories = [
  { title: "Mobile", icon: <PhoneIphoneIcon sx={{color:"#59bcd1",fontSize: 35}}  />, totalAds: 1500 },
  { title: "Electronics", icon: <MonitorIcon sx={{color:"#536679",fontSize: 35}}  />, totalAds: 1500 }, 
  { title: "Vehicles", icon: <DirectionsCarFilledIcon sx={{color:"#009f7f",fontSize: 35}} />, totalAds: 1000 },
  { title: "Home and Living", icon: <LivingIcon sx={{color:"#006750",fontSize: 35}}  />, totalAds: 1500 },
  { title: "Property", icon: <MapsHomeWorkIcon sx={{color:"#f05a4e",fontSize: 35}}  />, totalAds: 1500 },
  // Add more categories here...
];

const Category = () => {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 768, // adjust as needed
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480, // adjust as needed
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  return (
    <Grid sx={{width:'70%',margin:'auto',mt:10,mb:10}} container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Browse by Category</Typography>
      </Grid>
      
      {categories.map((category, index) => (
        <Grid   key={index} item xs={6} md={4} lg={3}>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems:"center"
            }}
          >
            {/* Display category icon */}
            {category.icon}

            <div style={{marginLeft:"10px"}}>
              {/* Display category title */}
              <Typography sx={{fontSize:16}} variant="body2">{category.title}</Typography>

              {/* Display total ads */}
              <Typography sx={{m:0,p:0,color:"#707a7f"}} variant="caption">{category.totalAds} Ads</Typography>
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default Category;

// export default function Category() {
//   return (
//     <div style={{width: '80%',margin:'auto',marginTop:"70px"}}>
//         <h2>Browse Items by category</h2>
//     </div>
//   )
// }
