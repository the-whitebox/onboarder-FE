import * as React from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Modal from "@mui/material/Modal";
import SetAgreedHoursModalBody from "../feature/SetAgreedhours";
import SetStandardHoursModalBody from "../feature/SetStandardHours";
import SetStressProfileModalBody from "../feature/SetStressProfile";

const Item = styled("div")(({ theme }) => ({
  border: "none",
}));

const theme = createTheme();

export default function WorkingHours() {
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
          <SetAgreedHoursModalBody />
        </Modal>
        <Modal
          open={openHours}
          onClose={handleCloseHours}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <SetStandardHoursModalBody />
        </Modal>
        <Modal
          open={openStress}
          onClose={handleCloseStress}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <SetStressProfileModalBody />
        </Modal>
        <Box sx={{ pt: 3, pb: 2 }}>
          <Typography variant="h6">Working Hours</Typography>
        </Box>
        <Box
          sx={{
            mt: 0,
            ml: 2,
            maxWidth: "80%",
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
                    <Link onClick={handleOpenWorkPeriod} color="#38b492">
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
                    <Link onClick={handleOpenHours} color="#38b492">
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
                    <Link onClick={handleOpenStress} color="#38b492">
                      24/7
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
