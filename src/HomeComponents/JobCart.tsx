import { faCircleChevronRight, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import WorkOutlinedIcon from "@mui/icons-material/WorkOutlined";
import { useMediaQuery, useTheme } from '@mui/material';

export default function JobCart() {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div style={{ marginTop: "40px", marginBottom: "50px" }}>
      <Box sx={{ width: isSm ? "100%":"70%", m: "auto" }}>
        <Grid container>
          <Grid xs={12} md={6}>
            <Paper sx={{ m: 2, p: 2 }} elevation={2}>
              <Grid container>
                <Grid xs={12} md={4}>
                  <Image
                    src="/money-bag.png"
                    alt="money"
                    width={150}
                    height={150}
                  />
                </Grid>
                <Grid xs={8}>
                  <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                    Start making money!
                  </Typography>
                  <Typography sx={{ mt: 1 }}>
                    Do you have something to sell? Post your first ad and start
                    making money!
                  </Typography>
                  <Button
                    sx={{
                      borderRadius: 15,
                      backgroundColor: "#ffc800",
                      color: "#673500",
                      fontWeight: isSm ? 700 : 800,
                      marginTop: "20px",
                     ":hover":{backgroundColor: "#ffc800"}

                      
                    }}
                    size={isSm ? 'small' :"large"}
                    variant="contained"
                  >
                    {" "}
                    <FontAwesomeIcon
                      style={{ fontSize: "15px", marginRight: "5px" }}
                      icon={faSquarePlus}
                    />{" "}
                    Post Your Ad For Free
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid xs={12} md={6}>
            <Paper sx={{ m: 2, p: 2 ,pb:3}} elevation={2}>
              <Grid xs={12}>
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <WorkOutlinedIcon
                    sx={{ color: "#29abe2", fontSize: 35, marginRight: "10px" }}
                  />
                  <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                    {" "}
                    All Jobs
                  </Typography>
                </Typography>

                <Typography sx={{ mt: 1 }}>
                  Looking to hire or get hired in Bangladesh ? Get access to
                  800k+ CVs or browse through 800+ job vacancies!
                </Typography>
                <Button
                  sx={{
                    borderRadius: 15,
                    backgroundColor: "#0074ba",
                    color: "white",
                    fontWeight: 600,
                    marginTop: "20px",
                    pl:4,
                    pr:3,
                  }}
                  variant="contained"
                >
                  {" "}
                  Explore More <FontAwesomeIcon style={{ color: "white", fontSize: 20,marginLeft:'10px', marginRight: "10px" }} icon={faCircleChevronRight} />
                </Button>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
