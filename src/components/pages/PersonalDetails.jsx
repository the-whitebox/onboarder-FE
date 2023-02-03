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
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import "../../style/PersonalDetails.css";

export default function PersonalDetails() {
  const [date, setDate] = React.useState(dayjs("2014-08-18T21:11:54"));

  const handleOnChange = (newValue) => {
    setDate(newValue);
  };

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
            <Typography variant="h6" sx={{ fontWeight: "Bold" }}>
              Asher Muneer
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
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
              Personal Details
            </Button>
            <Typography sx={{ ml: 2, fontWeight: "Bold" }}>Contact</Typography>
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
              pl: 2,
              pb: 2,
            }}
          >
            <Box className="flex flex-row ">
              <Typography
                id="modal-modal-description"
                sx={{
                  mt: 2,
                  fontSize: 14,
                  fontWeight: "Bold",
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
                First Name
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
                Last Name
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
                  mr: 2,
                  mt: 2,
                  fontSize: 14,
                  fontWeight: "Bold",
                }}
              >
                Preferred Full Name
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
                Pronouns
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography
                inline
                id="modal-modal-description"
                sx={{
                  mt: 2,
                  mr: 15,
                  fontSize: 14,
                  width: 180,
                  fontWeight: "Bold",
                }}
              >
                Date of Birth
              </Typography>
              <Box sx={{ width: 600, pl: 4 }}>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  sx={{ height: 0.1, pt: 5 }}
                >
                  <Stack spacing={3}>
                    <DesktopDatePicker
                      inputFormat="MM/DD/YYYY"
                      value={date}
                      onChange={handleOnChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Stack>
                </LocalizationProvider>
              </Box>
              <Grid
                container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "end",
                  justifyContent: "flex-end",
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
