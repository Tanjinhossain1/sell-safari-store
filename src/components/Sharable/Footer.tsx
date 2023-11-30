import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Container, Divider, Grid, Link, Typography } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <footer  style={{  padding: '20px 0' }}> 
        <hr style={{border: '1px solid #149777',height:'1px'}} />
      <Container sx={{ width: isSm ? "100%":"70%", m: "auto" }}>
        <Grid sx={{mb:5}} container spacing={3}>
          {/* Column 1 */}
          <Grid item xs={12} sm={6} md={2.5}>
            <Typography variant="h6">About Us</Typography>
            <Typography variant="body2">
              We are the most Biggest Seller in the World
            </Typography>
            <Typography sx={{fontWeight:600,mt:2,color:'#424e4e'}}>Stay connected with us</Typography>
            <Typography sx={{fontWeight:600,mt:1,color:'#3b5999',display:'flex',textAlign:'start'}}>
                <FacebookIcon sx={{color:'#3b5999',mr:1,fontSize:24}} /> 
                <Typography sx={{fontWeight:600,fontSize:13}}>Link Our FaceBook Page</Typography>
                </Typography>
          </Grid>
           
          {/* Column 2 */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Typography variant="h6">Learn more</Typography>
            <Typography sx={{mt:2}} variant="body2">
              <Link sx={{textDecoration:"none"}} href="#">Sell First</Link>
              <br />
              <Link sx={{textDecoration:"none"}} href="#">Membership</Link>
              <br />
              <Link sx={{textDecoration:"none"}} href="#">Banner ads</Link>
              <br />
              <Link sx={{textDecoration:"none"}} href="#">Ad Promotion</Link>
              <br />
              <Link sx={{textDecoration:"none"}} href="#">BikesGuide</Link>
              <br />
              {/* Add more links as necessary */}
            </Typography>
          </Grid>

          {/* Column 3 */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Typography variant="h6">Contact Us</Typography>
            <Typography sx={{mt:2}} variant="body2">
              Your address <br />
              Email: your@email.com <br />
              Phone: +123456789
            </Typography>
          </Grid>
           
          {/* Column 4 */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Typography variant="h6">Help and support</Typography>
            <Typography sx={{mt:2}} variant="body2">
              {/* Add social media icons or links */}
              <Link sx={{textDecoration:"none"}} href="#">Question and answer</Link>
              <br />
              <Link sx={{textDecoration:"none"}} href="#">stay safe</Link>
              <br />
              <Link sx={{textDecoration:"none"}} href="#">contact us</Link>
              <br />
              {/* Add more social media links */}
            </Typography>
          </Grid>
          {/* Column 5 */}
          <Grid item xs={12} sm={6} md={2.3}>
            <Typography variant="h6">social</Typography>
            <Typography sx={{mt:2}} variant="body2"> 
              {/* Add social media icons or links */}
              <Link sx={{textDecoration:"none"}} href="#">Blog</Link>
              <br />
              <Link sx={{textDecoration:"none"}} href="#">Facebook</Link>
              <br />
              <Link sx={{textDecoration:"none"}} href="#">Twitter</Link>
              <br />
              <Link sx={{textDecoration:"none"}} href="#">Youtube</Link>
              <br />
              {/* Add more social media links */}
            </Typography>
          </Grid>
        </Grid>
        
        {/* <hr   /> */}
        <Accordion sx={{boxShadow:0,mb:5}}>
        <AccordionSummary
          expandIcon={<Typography sx={{color:'black'}}>Sell Safari</Typography>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Copyright © Saltside Technologies</Typography>
        </AccordionSummary>
       
      </Accordion>
      </Container>
    </footer>
  );
};

export default Footer;
