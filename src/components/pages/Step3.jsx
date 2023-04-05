import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import maxpilot from "../../assets/images/maxpilot-logo.png";
import { Avatar } from "@mui/material";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import { useNavigate } from "react-router-dom";

export default function Step2() {
  const Navigate = useNavigate();
  const nextpage = () => {
    Navigate("/step3-2");
  };
  return (
    <>
      <Grid container>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mr: 10,
              ml: 2,
              py: 2,
            }}
          >
            <Avatar
              src={maxpilot}
              aria-label="Busy Man"
              sx={{
                width: "100px",
                height: "auto",
                padding: "0px",
                margin: "0px",
              }}
            />
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
          <Box sx={{ background: "gray", width: "77%", height: "1px" }}></Box>
        </Grid>
        <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
          <Box sx={{ display: "flex", flexDirection: "column", mt: 5, ml: 14 }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "25px" }}>
              <span style={{ color: "#2bb491" }}>Welcome to </span>
              <span>MAX</span>
              <span style={{ color: "#555555" }}>pilot, </span>
              <span>(Name)</span>
            </Typography>
            <Box sx={{ display: "flex", mt: 2 }}>
              <Box
                sx={{
                  border: "1px solid #2bb491",
                  borderRadius: "10px",
                  padding: "60px 40px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  src={maxpilot}
                  aria-label="Busy Man"
                  sx={{
                    width: "100px",
                    height: "auto",
                    padding: "0px",
                    margin: "0px",
                  }}
                />
                <Typography
                  sx={{ textAlign: "center", fontWeight: "bold", mt: 2 }}
                >
                  Are you a business owner <br />
                  or team manager?
                </Typography>
                <Button
                  className="all-green-btns"
                  variant="contained"
                  sx={{ mt: 8, textTransform: "none", borderRadius: "10px" }}
                  onClick={nextpage}
                >
                  Discover
                  <span style={{ fontWeight: "bold", marginLeft: "5px" }}>
                    MAX
                  </span>
                  pilot
                </Button>
              </Box>
              <Box
                sx={{
                  border: "1px solid #2bb491",
                  borderRadius: "10px",
                  padding: "60px 40px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  ml: 2,
                }}
              >
                <Avatar
                  src={maxpilot}
                  aria-label="Busy Man"
                  sx={{
                    width: "100px",
                    height: "auto",
                    padding: "0px",
                    margin: "0px",
                  }}
                />
                <Typography
                  sx={{ textAlign: "center", fontWeight: "bold", mt: 2 }}
                >
                  Is your team already using
                  <br />
                  <span style={{ fontWeight: "bold" }}>MAX</span>pilot?
                </Typography>
                <Button
                  className="all-green-btns"
                  variant="contained"
                  sx={{ mt: 8, textTransform: "none", borderRadius: "10px" }}
                >
                  Join Your Team
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: 8,
            }}
          >
            <Box
              sx={{
                background: "#e6f4eb",
                display: "flex",
                alignItems: "center",
                padding: "20px 20px",
                borderRadius: "40px 0px 0px 40px",
              }}
            >
              <RecentActorsIcon sx={{ color: "#2bb491" }} />
              <Typography sx={{ color: "#2bb491", fontSize: "12px", ml: 1 }}>
                COMPLETE BY ADDING YOUR PROFILE INFORMATION
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              mt: 15,
              mr: 10,
            }}
          >
            <Box
              sx={{
                width: "20px",
                height: "20px",
                background: "#2bb491",
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
              }}
            ></Box>
            <Box
              sx={{
                width: "20px",
                height: "20px",
                background: "#e6f4eb",
                borderRadius: "100%",
                mt: 1,
              }}
            ></Box>
            <Box
              sx={{
                width: "20px",
                height: "20px",
                background: "#e6f4eb",
                borderRadius: "100%",
                mt: 1,
              }}
            ></Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
