import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function HomeAbout() {
    const [toggle,setToggle] = useState<boolean>(false)
  return (
    <Box sx={{ width: "68%", m: "auto",mb:5 }}>
    <Typography style={{fontWeight:600,marginBottom:"10px",color:'#707676'}}>About Sell Safari, The Largest Marketplace in Bangladesh!</Typography>
    <Typography sx={{mt:1,color:'#707676'}}>Sell Safari is a platform on which you can buy and sell almost everything! We help people buy and sell vehicles, find properties, get jobs or recruit employees, buy and sell mobile phones, purchase electronic products, and much more. With more than 50 categories our solutions are built to be safe, smart, and convenient for our customers.</Typography>
    <Accordion sx={{boxShadow:0}}>
       
        <AccordionSummary
        onClick={()=>setToggle(!toggle)}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{m:0,p:0,width:'110px'}}
        >
          <Typography sx={{color:'#707676'}}>{toggle ? 'Show Less': 'Show More'}</Typography>
        </AccordionSummary>
        

        <AccordionDetails>
          <Typography sx={{mt:1,color:'#707676',fontWeight:600}}>
          Buy, Sell, Rent, or Find Jobs in Bangladesh
          </Typography>

          <Typography sx={{mt:2,color:'#707676'}}>
          Every month, hundreds of millions of people use Sell Safari to find and sell mobiles, musical instruments, cars, houses, jobs, and more through classified ads. To sell new items or sell used items quickly, Sell Safari offers Ad Promotion features.
          </Typography>

          <Typography sx={{mt:2,color:'#707676'}}>
          Sell Safari has an extensive collection of new and used goods, making it easier for users to quickly buy new items or buy used items at their desired location. To buy online, users easily can reach their desired products through filtering options.
          </Typography>

          <Typography sx={{mt:2,color:'#707676'}}>
          For businesses, Sell Safari has introduced the ‘Membership’ service, which helps them expand their businesses online. Members will have their virtual shop with a Sell Safari URL with free promotions of their goods. With different membership categories, businesses can flourish as verified members and authorized dealers.
          </Typography>
          <Typography sx={{mt:2,color:'#707676'}}>
          With millions of unique monthly visitors, thousands of interested buyers, and thousands of active dealers on our platform, Sell Safari is the Largest Marketplace in Bangladesh.
          </Typography>
          

          <Typography sx={{mt:2,color:'#707676',fontWeight:600}}>
          Benefits of Trading at Sell Safari
          </Typography> 

          <Typography sx={{mt:2,color:'#707676'}}>
          At Sell Safari, we make it so easy to connect people to buy, sell or rent goods and services as other classified sites.
          </Typography>

          <Typography sx={{mt:2,color:'#707676'}}>
          Fast & Easy Experience: Navigated buying and selling experience in Bangladesh which is simpler, faster, and easier. Shop and sell on the go and get your desired products in just a few clicks.
          </Typography>

          <Typography sx={{mt:2,color:'#707676'}}>
        
Post Ads Free: As a free classified website, we offer free ad posting features in many categories for the convenience of the users based on their locations.
Safe & Secure Shopping: We have listed our verified members and authorized dealers to create a safe shopping experience for our users.
          </Typography>

        </AccordionDetails> 
      </Accordion>
</Box>
  )
}
