import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { TbMessageCircle } from "react-icons/tb";
import { Avatar } from "@mui/material";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import MaxPilotLogo from "../../assets/images/maxpilot-logo-w.png";
import "../../style/General.css";

export default function Personal() {
  return (
    <>
      <Grid sx={{ display: "flex" }}>
        <Grid
          container
          component="main"
          sx={{ height: "100vh", width: "240px" }}
        >
          <CssBaseline />
          <Grid
            className="max-width"
            item
            xs={false}
            sm={4}
            md={6}
            sx={{
              backgroundColor: "#38b492",
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <Grid>
              <Avatar
                src={MaxPilotLogo}
                aria-label="Busy Man"
                sx={{
                  height: "16vh",
                  width: "230px",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid>
          <Box
            sx={{
              pl: 2,
              pt: 2,
            }}
          >
            <Link href="/profile" color="#38b492">
              Back to Profile
            </Link>
          </Box>
          <Box
            sx={{
              pl: 2,
              pt: 2,
              pb: 2,
              pr: 10,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "Bold" }}>
              Personal
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#38b492",
                color: "#ffffff",
              }}
            >
              Save
            </Button>
          </Box>
          <Box
            sx={{
              pl: 2,
              pb: 2,
            }}
          >
            <Typography variant="h6" fontWeight="Bold">
              Asher Muneer
            </Typography>
          </Box>
          <Box
            sx={{
              pl: 2,
              display: "flex",
            }}
          >
            <Typography>Personal Details</Typography>
            <Button
              className="btn-font-padding"
              variant="outlined"
              sx={{
                ml: 2,
                color: "#38b492",
                border: "1px solid #38b492",
                fontSize: 12,
              }}
            >
              Contact
            </Button>
          </Box>
          <Box
            sx={{
              pt: 1,
              pl: 2,
              pb: 2,
            }}
          >
            <Typography variant="h6" fontSize="large" fontWeight="Bold">
              Contact
            </Typography>
          </Box>
          <Box
            sx={{
              pb: 2,
              pl: 2,
            }}
          >
            <Box className="flex flex-row ">
              <Typography
                id="modal-modal-description"
                sx={{
                  mt: 2,
                  fontSize: 14,
                  fontWeight: "Bold",
                  textAlign: "right",
                }}
              >
                Email
              </Typography>
              <TextField
                id="outlined-basic"
                label=""
                variant="outlined"
                size="small"
                sx={{
                  width: "300px",
                  mr: 60,
                }}
              />
            </Box>

            <br />
            <Box className="flex flex-row ">
              <Typography
                id="modal-modal-description"
                sx={{
                  mt: 2,
                  fontSize: 14,
                  fontWeight: "Bold",
                }}
              >
                Mobile
              </Typography>
              <TextField
                id="outlined-basic"
                label=""
                variant="outlined"
                size="small"
                sx={{
                  width: "300px",
                  mr: 60,
                }}
              />
            </Box>
            <br />
            <Box className="flex flex-row ">
              <Typography
                id="modal-modal-description"
                sx={{
                  mt: 2,
                  fontSize: 14,
                  fontWeight: "Bold",
                }}
              >
                Address
              </Typography>
              <TextField
                id="outlined-basic"
                label=""
                variant="outlined"
                size="small"
                sx={{
                  width: "300px",
                  mr: 60,
                }}
              />
            </Box>
            <br />
            <Box className="flex flex-row ">
              <Typography
                id="modal-modal-description"
                sx={{
                  mt: 2,
                  fontSize: 14,
                  fontWeight: "Bold",
                }}
              >
                Postcode
              </Typography>
              <TextField
                id="outlined-basic"
                label=""
                variant="outlined"
                size="small"
                sx={{
                  width: "300px",
                  mr: 60,
                }}
              />
            </Box>
            <br />
            <Box className="flex flex-row ">
              <Typography
                id="modal-modal-description"
                sx={{
                  mt: 2,
                  fontSize: 14,
                  fontWeight: "Bold",
                }}
              >
                City
              </Typography>
              <TextField
                id="outlined-basic"
                label=""
                variant="outlined"
                size="small"
                sx={{
                  width: "300px",
                  mr: 60,
                }}
              />
            </Box>
            <br />
            <Box className="flex flex-row ">
              <Typography
                id="modal-modal-description"
                sx={{
                  mt: 2,
                  fontSize: 14,
                  fontWeight: "Bold",
                }}
              >
                State
              </Typography>
              <TextField
                id="outlined-basic"
                label=""
                variant="outlined"
                size="small"
                sx={{
                  width: "300px",
                  mr: 60,
                }}
              />
            </Box>
            <br />
            <Box className="flex flex-row ">
              <Typography
                className="text-align"
                id="modal-modal-description"
                sx={{
                  mt: 2,
                  fontSize: 14,
                  fontWeight: "Bold",
                }}
              >
                Country
              </Typography>
              <TextField
                id="outlined-basic"
                label=""
                variant="outlined"
                size="small"
                sx={{
                  width: "300px",
                  mr: 60,
                }}
              />
            </Box>
            <br />
            <Box className="flex flex-row ">
              <Typography
                className="text-align"
                id="modal-modal-description"
                sx={{
                  mr: 2,
                  mt: 2,
                  fontSize: 14,
                  fontWeight: "Bold",
                }}
              >
                Emergency contact name
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                sx={{
                  width: "300px",
                  mr: 60,
                }}
              />
            </Box>
            <br />
            <Box className="flex flex-row">
              <Typography
                id="modal-modal-description"
                sx={{
                  mt: 2,
                  width: 250,
                  fontSize: 14,
                  fontWeight: "Bold",
                }}
              >
                Emergency phone number
              </Typography>
              <Box sx={{ width: 50, pl: 1 }}>
                <TextField
                  id="outlined-basic"
                  label=""
                  variant="outlined"
                  size="small"
                  sx={{
                    width: "300px",
                    mr: 60,
                  }}
                />
              </Box>
              <Grid
                container
                sx={{
                  pl: 10,
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "end",
                }}
              >
                <Avatar
                  className="messageCircle"
                  sx={{ backgroundColor: "#38b492" }}
                >
                  <TbMessageCircle />
                </Avatar>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
