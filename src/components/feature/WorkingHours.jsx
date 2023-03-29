import * as React from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Modal from "@mui/material/Modal";
import SetAgreedHoursModalBody from "../feature/SetAgreedhours";
import SetStandardHoursModalBody from "../feature/SetStandardHours";
import SetStressProfileModalBody from "../feature/SetStressProfile";

const Item = styled("div")(({ theme }) => ({
  border: "none",
}));

const theme = createTheme();

export default function WorkingHours(props) {
  const stressArray = [
    "2 days per week",
    "24/7",
    "CA Overtime 40 hrs per week",
    "Max 20 hours per week",
    "Normal 38 hours per week",
    "Standard 40 hours, 8 hours per day",
  ];

  const [openWorkPeriod, setOpenWorkPeriod] = React.useState(false);
  const handleOpenWorkPeriod = () => setOpenWorkPeriod(true);
  const handleCloseWorkPeriod = () => setOpenWorkPeriod(false);

  const [openHours, setOpenHours] = React.useState(false);
  const handleOpenHours = () => setOpenHours(true);
  const handleCloseHours = () => setOpenHours(false);

  const [openStress, setOpenStress] = React.useState(false);
  const handleOpenStress = () => setOpenStress(true);
  const handleCloseStress = () => setOpenStress(false);

  const modalWrapper = {
    overflow: "auto",
    display: "flex",
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Modal
          open={openWorkPeriod}
          sx={modalWrapper}
          onClose={handleCloseWorkPeriod}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <SetAgreedHoursModalBody
            handleCloseWorkPeriod={handleCloseWorkPeriod}
          />
        </Modal>
        <Modal
          open={openHours}
          onClose={handleCloseHours}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <SetStandardHoursModalBody handleCloseHours={handleCloseHours} />
        </Modal>
        <Modal
          open={openStress}
          onClose={handleCloseStress}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <SetStressProfileModalBody handleCloseStress={handleCloseStress} />
        </Modal>
        <Box sx={{ pt: 3, pb: 2 }}>
          <Typography variant="h6">Working Hours</Typography>
        </Box>
        <Box
          sx={{
            mt: 0,
            ml: { xl: 2, lg: 2, md: 0, sm: 0, xs: 0 },
            maxWidth: {
              xl: "80%",
              lg: "80%",
              md: "100%",
              sm: "100%",
              xs: "100%",
            },
            border: "1px solid",
            borderColor: "#ced7e0",
            borderRadius: "10px",
            bgcolor: "#ffffff",
            flexGrow: 1,
          }}
        >
          <Grid container xs={12} md={7} lg={12} spacing={2}>
            <Grid xs={6} lg={3}>
              <Item>
                <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                  <li>Work Period</li>
                  <li>
                    <Link onClick={handleOpenWorkPeriod} className="aTag">
                      Set a work period
                    </Link>
                  </li>
                </Box>
              </Item>
            </Grid>
            <Grid xs={6} lg={3}>
              <Item>
                <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
                  <li>Hours per Period</li>
                  <li>
                    <Link onClick={handleOpenHours} className="aTag">
                      Set hours per period
                    </Link>
                  </li>
                </Box>
              </Item>
            </Grid>
            <Grid xs={6} lg={3}>
              <Item>
                <Box component="ul" aria-labelledby="category-c" sx={{ pl: 2 }}>
                  <li>Stress Profile</li>
                  <li>
                    <Link onClick={handleOpenStress} className="aTag">
                      {props.userInfo?.working_hours?.stress_level
                        ? stressArray[parseInt(props.stressLevel) - 1]
                        : "Add stress level"}
                    </Link>
                  </li>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
}
