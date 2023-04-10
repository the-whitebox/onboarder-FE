import React from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Link } from "react-router-dom";
import users from "../../assets/icons/Group 515.png";
import bg_image6 from "../../assets/images/bg-image6.png";

function Step3_4() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: { md: "flex-end", xs: "center" },
          mt: 5,
          mr: { md: 10, xs: 0 },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ fontSize: "12px", mr: 2 }}>
            STEP 3 | COMPLETE YOUR PROFILE
          </Typography>
          <Box
            sx={{
              width: "20px",
              height: "20px",
              background: "#e6f4eb",
              borderRadius: "100%",
            }}
          ></Box>
          <Box
            sx={{
              width: "20px",
              height: "20px",
              background: "#e6f4eb",
              borderRadius: "100%",
              ml: 1,
            }}
          ></Box>
          <Box
            sx={{
              width: "20px",
              height: "20px",
              background: "#2bb491",
              borderRadius: "100%",
              ml: 1,
            }}
          ></Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex" }}>
        <Grid
          item
          xs={11}
          sx={{ mt: 5, display: "flex", justifyContent: "center" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              sx={{ fontWeight: "900", color: "#2bb491", textAlign: "center" }}
            >
              COMPLETE YOUR MAXPILOT PROFILE
            </Typography>
            <Typography
              sx={{ color: "gray", fontSize: "12px", textAlign: "center" }}
            >
              Choose to create a better looking profile
            </Typography>
            <Avatar
              src={users}
              aria-label="Busy Man"
              sx={{
                width: { xl: "150px", md: "150px", xs: "100px" },
                height: "auto",
                padding: "0px",
                margin: "0px",
                borderRadius: 0,
                mt: 2,
              }}
            />
            <Typography sx={{ textAlign: "center", mt: 2, fontWeight: "500" }}>
              WELCOME, (USER NAME)
            </Typography>
            <Typography
              sx={{ color: "gray", fontSize: "12px", textAlign: "center" }}
            >
              Manage your info, privacy, and security to make MAXpilot work
              better for you.
            </Typography>
            <Typography sx={{ textAlign: "center", mt: 4 }}>
              Basic info
            </Typography>
            <Typography
              sx={{ color: "gray", fontSize: "12px", textAlign: "center" }}
            >
              Some info may be visibleto other people using MAXpilot services
            </Typography>
            <Box
              sx={{
                width: { md: "80%", xs: "95%", display: "flex" },
                mt: 2,
              }}
            >
              <Typography sx={{ color: "gray", width: "140px" }}>
                Name
              </Typography>
              <Typography>User Name</Typography>
            </Box>
            <Box
              sx={{
                width: { md: "80%", xs: "95%" },
                height: "1px",
                background: "gray",
                mt: 2,
              }}
            />
            <Box
              sx={{
                width: {
                  md: "80%",
                  xs: "95%",
                  display: "flex",
                  position: "relative",
                },
                mt: 2,
              }}
            >
              <Typography sx={{ color: "gray", width: "140px" }}>
                Birthday
              </Typography>
              <Typography>none</Typography>
              <CalendarMonthIcon
                sx={{ position: "absolute", right: 10, cursor: "pointer" }}
              />
            </Box>
            <Box
              sx={{
                width: { md: "80%", xs: "95%" },
                height: "1px",
                background: "gray",
                mt: 2,
              }}
            />
            <Box
              sx={{
                width: { md: "80%", xs: "95%", display: "flex" },
                mt: 2,
              }}
            >
              <Typography sx={{ color: "gray", width: "140px" }}>
                Gender
              </Typography>
              <Typography>none</Typography>
            </Box>
            <Box
              sx={{
                width: { md: "80%", xs: "95%" },
                height: "1px",
                background: "gray",
                mt: 2,
              }}
            />
            <Box
              sx={{
                width: { md: "80%", xs: "95%", display: "flex" },
                mt: 2,
              }}
            >
              <Typography sx={{ color: "gray", width: "140px" }}>
                Contact info
              </Typography>
              <Typography>none</Typography>
            </Box>
            <Box
              sx={{
                width: { md: "80%", xs: "95%" },
                height: "1px",
                background: "gray",
                mt: 2,
              }}
            />
            <Box
              sx={{
                width: { md: "80%", xs: "95%", display: "flex" },
                mt: 2,
              }}
            >
              <Typography sx={{ color: "gray", width: "140px" }}>
                E-mail
              </Typography>
              <Typography>none</Typography>
            </Box>
            <Box
              sx={{
                width: { md: "80%", xs: "95%" },
                height: "1px",
                background: "gray",
                mt: 2,
              }}
            />
            <Box
              sx={{
                width: { md: "80%", xs: "95%", display: "flex" },
                mt: 2,
              }}
            >
              <Typography sx={{ color: "gray", width: "140px" }}>
                Address
              </Typography>
              <Typography>none</Typography>
            </Box>
            <Box
              sx={{
                width: { md: "80%", xs: "95%" },
                height: "1px",
                background: "gray",
                mt: 2,
              }}
            />

            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: { md: "center", xs: "center" },
                mt: { xs: 2, lg: 5, xl: 5 },
              }}
            >
              <Link to="/step3-3">
                <ArrowBackIosNewIcon
                  sx={{
                    border: "1px solid #2bb491",
                    borderRadius: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "5px",
                    mr: 2,
                    color: "#2bb491",
                  }}
                />
              </Link>
              <Link to="#">
                <ArrowForwardIosIcon
                  sx={{
                    border: "1px solid #2bb491",
                    borderRadius: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "5px",
                    color: "#2bb491",
                  }}
                />
              </Link>
            </Box>
          </Box>
        </Grid>

        <Grid item md={4} xs={1} sx={{ mt: 5 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "column", xs: "column" },
              alignItems: "flex-end",
              justifyContent: "center",
              mt: { xl: 30, lg: 15, sm: 3 },
              mr: { md: 8, sm: 1 },
            }}
          >
            <Box
              sx={{
                width: "20px",
                height: "20px",
                background: "#e6f4eb",
                borderRadius: "100%",
              }}
            ></Box>
            <Box
              sx={{
                width: "20px",
                height: "20px",
                background: "#e6f4eb",
                borderRadius: "100%",
                mt: 1,
                ml: { xs: 1, md: 0 },
              }}
            ></Box>
            <Box
              sx={{
                width: "20px",
                height: "20px",
                background: "#e6f4eb",
                borderRadius: "100%",
                mt: 1,
                ml: { xs: 1, md: 0 },
              }}
            ></Box>
            <Box
              sx={{
                width: "20px",
                height: "20px",
                background: "#2bb491",
                borderRadius: "100%",
                mt: 1,
                ml: { xs: 1, md: 0 },
              }}
            ></Box>
          </Box>
        </Grid>
      </Box>
      <Grid
        item
        xs={12}
        sx={{
          height: { xl: "auto", md: "15vh", xs: "25vh" },
          position: { xl: "unset", xs: "relative" },
        }}
      >
        <Avatar
          src={bg_image6}
          aria-label="Busy Man"
          sx={{
            width: { xl: "400px", md: "250px", xs: "200px" },
            height: "auto",
            padding: "0px",
            margin: "0px",
            borderRadius: 0,
            position: "absolute",
            bottom: "1px",
            right: "0",
          }}
        />
      </Grid>
    </>
  );
}

export default Step3_4;
