import React from "react";
import { Grid, Typography, Slider, useMediaQuery, useTheme } from '@mui/material';
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MonitorIcon from '@mui/icons-material/Monitor';
import LivingIcon from '@mui/icons-material/Living';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShirt,faCat,faUserGraduate,faWheatAwn, faPersonDress,faFutbol,faIndustry,faBasketShopping,faGlobe } from '@fortawesome/free-solid-svg-icons';  
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined'; 

const categories = [
  { title: "Mobile", icon: <PhoneIphoneIcon sx={{color:"#59bcd1",fontSize: 35}}  />, totalAds: 1500 },
  { title: "Electronics", icon: <MonitorIcon sx={{color:"#536679",fontSize: 35}}  />, totalAds: 1500 }, 
  { title: "Vehicles", icon: <DirectionsCarFilledIcon sx={{color:"#009f7f",fontSize: 35}} />, totalAds: 1000 },
  { title: "Home and Living", icon: <LivingIcon sx={{color:"#006750",fontSize: 35}}  />, totalAds: 1500 },
  { title: "Property", icon: <MapsHomeWorkIcon sx={{color:"#f05a4e",fontSize: 35}}  />, totalAds: 1500 },
  { title: "Boys' Fashion and Grooming", icon: <FontAwesomeIcon style={{color:"#4998e4",fontSize: 30}}  icon={faShirt} />, totalAds: 1500 },
  { title: "Pets and animals", icon: <FontAwesomeIcon style={{color:"#bc9e68",fontSize: 35}}  icon={faCat} />, totalAds: 1500 },
  { title: "Girls fashion and", icon: <FontAwesomeIcon style={{color:"#f05a4e",fontSize: 45}}  icon={faPersonDress} />, totalAds: 1500 },
  { title: "Hobbies, sports and children", icon: <FontAwesomeIcon icon={faFutbol} style={{color:"#7f727b",fontSize: 35}} />, totalAds: 1500 },
  { title: "Business and Industry", icon: <FontAwesomeIcon icon={faIndustry} style={{color:"#ecb661",fontSize: 35}} />, totalAds: 1500 },
  { title: "Daily essentials", icon: <FontAwesomeIcon icon={faBasketShopping} style={{color:"#76abc6",fontSize: 35}} />, totalAds: 1500 },
  { title: "education", icon: <FontAwesomeIcon icon={faUserGraduate} style={{color:"#2e4a74",fontSize: 35}} />, totalAds: 1500 },
  { title: "agricultural products", icon: <FontAwesomeIcon icon={faWheatAwn} style={{color:"#b19662",fontSize: 35}} />, totalAds: 1500 },
  { title: "service", icon: <DesignServicesOutlinedIcon sx={{color:"#979391",fontSize: 35}} />, totalAds: 1500 },
  { title: "job", icon: <WorkOutlinedIcon sx={{color:"#074f7a",fontSize: 35}} />, totalAds: 1500 },
  { title: "Job abroad", icon: <FontAwesomeIcon icon={faGlobe} style={{color:"#2e4a74",fontSize: 35}} />, totalAds: 1500 },
  
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
        <Grid  key={index} item xs={12} md={4} lg={3}>
          <div
            style={{
              textAlign: "left",
              display: "flex",
              justifyContent: "start",
              alignItems:"center",
              marginBottom: '40px',
              cursor:"pointer"
            }}
          >
            {/* Display category icon */}
            {category.icon}

            <div style={{marginLeft:"10px", textAlign:'left'}}>
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
