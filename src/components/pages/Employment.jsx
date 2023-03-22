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
import Link from "@mui/material/Link";
import { TbMessageCircle } from "react-icons/tb";
import { Avatar } from "@mui/material";
import "../../style/General.css";
import "../../style/Employment.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Modal from "@mui/material/Modal";
import SetpayratesModalBody from "../feature/Setpayrates";
import SyncPayrollModalBody from "../feature/SyncPayroll";
import SetAdvisorModalBody from "../feature/SetAccessLevel";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import useState from "react";

const theme = createTheme();

const Item = styled("div")(({ theme }) => ({
  border: "none",
}));

// const drawerWidth = 240;

export default function Employment() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const modalWrapper = {
    overflow: "auto",
    display: "flex",
  };

  const [openAccess, setOpenAccess] = React.useState(false);
  const handleOpenAccess = () => setOpenAccess(true);
  const handleCloseAccess = () => setOpenAccess(false);

  const [openPayroll, setOpenPayroll] = React.useState(false);
  const handleOpenPayroll = () => setOpenPayroll(true);
  const handleClosePayroll = () => setOpenPayroll(false);
  const [userId, setUserId] = useState(null);

  const indexToHL = 1;

  const getUser = async () => {
    try {
      const response = await axios.post(url + "/auth/login/", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then(response => response.data)
        .then(data => setUserId(data.id))
        .catch(error => console.error(error));
    } catch (error) {
      console.error(error);
    }
  };  

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Modal
          open={openAccess}
          onClose={handleCloseAccess}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <SetAdvisorModalBody />
        </Modal>

        <Modal
          open={openPayroll}
          onClose={handleClosePayroll}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <SyncPayrollModalBody />
        </Modal>
        <Modal
          open={open}
          onClose={handleClose}
          sx={modalWrapper}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <SetpayratesModalBody />
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
                <Link underline="hover" color="black" href="/People">
                  Home
                </Link>
                <Typography color="text.primary">Employment</Typography>
              </Breadcrumbs>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h4">Employment</Typography>
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

            <Box sx={{ pt: 3, pb: 2 }}>
              <Typography variant="h6">Work Details</Typography>
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
                            <Link onClick={handleOpenAccess} color="#38b492">
                              Advisor
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
                            <Link color="#38b492">Add Training</Link>
                          </li>
                        </Box>
                      </Item>
                    </Grid>
                  </Grid>
                  <Grid
                    xs={12}
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    flexDirection={{ xs: "column", sm: "row" }}
                    sx={{ fontSize: "12px" }}
                  ></Grid>
                </Grid>
              </Box>
            </Box>
            <Box sx={{ mt: 3, ml: 2, maxWidth: "80%" }}>
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
                              <Link onClick={handleOpenPayroll} color="#38b492">
                                Add a payroll ID
                              </Link>
                            </li>
                            <li>
                              <Link color="#38b492">
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
                              <Link onClick={handleOpen} color="#38b492">
                                Set a pay rate
                              </Link>
                            </li>
                          </Box>
                        </Item>
                      </Grid>
                    </Grid>
                    <Grid
                      xs={12}
                      container
                      justifyContent="space-between"
                      alignItems="center"
                      flexDirection={{ xs: "column", sm: "row" }}
                      sx={{ fontSize: "12px" }}
                    ></Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
            <Box sx={{ mt: 1 }}>
              <WorkingHours />
            </Box>
            <Box
              sx={{
                mt: 1,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <LeaveEntitlement />
              <Grid
                container
                sx={{
                  display: "flex",
                  alignItems: "end",
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
        </Box>
      </ThemeProvider>
    </>
  );
}
