import * as React from "react";
import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import CssBaseline from "@mui/material/CssBaseline";
// import AppBar from "@mui/material/AppBar";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import VerticalMenu from "../feature/VerticalMenu";
import WorkingHours from "../feature/WorkingHours";
import LeaveEntitlement from "../feature/LeaveEntitlement";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";
import { Link } from "react-router-dom";
import "../../style/General.css";
import "../../style/Employment.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Modal from "@mui/material/Modal";
import SetpayratesModalBody from "../feature/Setpayrates";
import SyncPayrollModalBody from "../feature/SyncPayroll";
import SetAdvisorModalBody from "../feature/SetAccessLevel";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import ChatIcon from "../feature/ChatIcon";
import GlobalContext from "../../context/GlobalContext";
const theme = createTheme();

const Item = styled("div")(({ theme }) => ({
  border: "none",
}));
// const drawerWidth = 240;

export default function Employment() {
  const { userInfo } = React.useContext(GlobalContext);

  const modalWrapper = {
    overflow: "auto",
    display: "flex",
  };
  const [openPayrate, setOpenPayrate] = React.useState(false);
  const handleOpenPayrate = () => setOpenPayrate(true);
  const handleClosePayrate = () => setOpenPayrate(false);

  const [openAccess, setOpenAccess] = React.useState(false);
  const handleOpenAccess = () => setOpenAccess(true);
  const handleCloseAccess = () => setOpenAccess(false);

  const [openPayroll, setOpenPayroll] = React.useState(false);
  const handleOpenPayroll = () => setOpenPayroll(true);
  const handleClosePayroll = () => setOpenPayroll(false);
  const indexToHL = 1;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Modal
          open={openAccess}
          onClose={handleCloseAccess}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <SetAdvisorModalBody handleClose={handleCloseAccess} />
        </Modal>

        <Modal
          open={openPayroll}
          onClose={handleClosePayroll}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <SyncPayrollModalBody handleClosePayroll={handleClosePayroll} />
        </Modal>
        <Modal
          open={openPayrate}
          onClose={handleClosePayrate}
          sx={modalWrapper}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <SetpayratesModalBody handleClosePayrate={handleClosePayrate} />
        </Modal>

        <Box sx={{ display: "flex" }}>
          <VerticalMenu indexToHL={indexToHL} />

          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: "#fcfcfc", p: 3, pt: 1 }}
          >
            <Toolbar />
            <Box>
              <Breadcrumbs aria-label="breadcrumb">
                <Link to="/People" className="aTag">
                  Home
                </Link>
                <Typography color="text.primary">Employment</Typography>
              </Breadcrumbs>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h4">Employment</Typography>
              <Button
                variant="contained"
                className="all-green-btns"
                sx={{
                  bgcolor: "#38b492",
                  height: 35,
                  color: "#ffffff",
                  mr: { lg: 15, xs: 0 },
                }}
              >
                Save
              </Button>
            </Box>

            <Box sx={{ pt: 3, pb: 2 }}>
              <Typography variant="h6">Work Details</Typography>
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
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid container xs={12} md={7} lg={12} spacing={2}>
                    <Grid xs={6} lg={3}>
                      <Item>
                        <Box
                          component="ul"
                          aria-labelledby="category-a"
                          sx={{ pl: 2 }}
                        >
                          <li>Access level</li>
                          <li>
                            <Link onClick={handleOpenAccess} className="aTag">
                              {userInfo?.role.role
                                ? userInfo?.role.role
                                : "Add Access level"}
                            </Link>
                          </li>
                        </Box>
                      </Item>
                    </Grid>
                    <Grid xs={6} lg={3}>
                      <Item>
                        <Box
                          component="ul"
                          aria-labelledby="category-b"
                          sx={{ pl: 2 }}
                        >
                          <li>Worked at</li>
                          <li>Talha's professional services</li>
                        </Box>
                      </Item>
                    </Grid>
                    <Grid xs={6} lg={3}>
                      <Item>
                        <Box
                          component="ul"
                          aria-labelledby="category-c"
                          sx={{ pl: 2 }}
                        >
                          <li>Hired on</li>
                          <li>Wed 23/11/22</li>
                        </Box>
                      </Item>
                    </Grid>
                    <Grid xs={6} lg={3}>
                      <Item>
                        <Box
                          component="ul"
                          aria-labelledby="category-c"
                          sx={{ pl: 2 }}
                        >
                          <li>Training</li>
                          <li>
                            <Link className="aTag">Add Training</Link>
                          </li>
                        </Box>
                      </Item>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Box
              sx={{
                mt: 3,
                ml: { xl: 2, lg: 2, md: 0, sm: 0, xs: 0 },
                maxWidth: {
                  xl: "80%",
                  lg: "80%",
                  md: "100%",
                  sm: "100%",
                  xs: "100%",
                },
              }}
            >
              <Box
                sx={{
                  pt: 0.5,
                  border: "1px solid",
                  borderColor: "#ced7e0",
                  borderRadius: "10px",
                  bgcolor: "#ffffff",
                }}
              >
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid container xs={12} md={7} lg={12} spacing={2}>
                      <Grid xs={6} lg={3}>
                        <Item>
                          <Box
                            component="ul"
                            aria-labelledby="category-a"
                            sx={{ pl: 2 }}
                          >
                            <li>Payroll Id</li>
                            <li>
                              <Link
                                onClick={handleOpenPayroll}
                                className="aTag"
                              >
                                Add a payroll ID
                              </Link>
                            </li>
                            <li>
                              <Link className="aTag">
                                View all rates and allowances
                              </Link>
                            </li>
                          </Box>
                        </Item>
                      </Grid>
                      <Grid xs={6} lg={4}>
                        <Item>
                          <Box
                            component="ul"
                            aria-labelledby="category-b"
                            sx={{ pl: 2 }}
                          >
                            <li>Pay rate (Default)</li>
                            <li>
                              <Link
                                onClick={handleOpenPayrate}
                                className="aTag"
                              >
                                Set a pay rate
                              </Link>
                            </li>
                          </Box>
                        </Item>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
            <Box sx={{ mt: 1 }}>
              <WorkingHours />
            </Box>
            <Box sx={{ mt: 1 }}>
              <LeaveEntitlement />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
      <ChatIcon />
    </>
  );
}
