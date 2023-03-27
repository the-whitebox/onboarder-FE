import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Contact from "../feature/Contact";
import LoginInfo from "../feature/LoginInfo";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";
import Link from "@mui/material/Link";
import VerticalMenu from "../feature/VerticalMenu";
import "../../style/General.css";
import { ThemeProvider } from "@mui/material/styles";
import Modal from "@mui/material/Modal";
import ArchiveTeamMemberModalBody from "../feature/ArchiveTeammembers";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useTheme } from "@mui/material/styles";
import axios from "axios";
import ChatIcon from "../feature/ChatIcon";

const Item = styled("div")(({ theme }) => ({
  border: "none",
}));

const drawerWidth = 240;

export default function Profile() {
  const theme = useTheme();
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const url = process.env.REACT_APP_BASE_URL + `/people/${userId}/`;
  const [userInfo, setUserInfo] = React.useState();

  React.useEffect(() => {
    const getLoggedInPeopleDetails = async () => {
      await axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setUserInfo(response.data);
        })
        .catch((error) => console.log("Error", error));
    };
    getLoggedInPeopleDetails();
  }, []);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const indexToHL = 0;
  return (
    <>
      <ThemeProvider theme={theme}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ArchiveTeamMemberModalBody />
        </Modal>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              width: `calc(100% - ${drawerWidth}px)`,
              ml: `${drawerWidth}px`,
            }}
          ></AppBar>
          <VerticalMenu indexToHL={indexToHL} userInfo={userInfo} />
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
          >
            <Toolbar />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box m={1}>
                <Breadcrumbs aria-label="breadcrumb">
                  <Link underline="hover" color="black" href="/People">
                    Home
                  </Link>
                  <Typography color="text.primary">Personal</Typography>
                </Breadcrumbs>
              </Box>
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
            <Box>
              <Button sx={{ color: "#38b492" }}>Message</Button>
              <Button onClick={handleOpen} sx={{ color: "#38b492" }}>
                Archive Team member
              </Button>
            </Box>
            <Box sx={{ pt: 3, pb: 2 }}>
              <Typography variant="h5">Personal Details</Typography>
            </Box>
            <Box
              sx={{
                ml: 2,
                mr: 40,
                pt: 0.5,
                border: "1px solid",
                borderColor: "#ced7e0",
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
                          <li>Name</li>
                          <li>{userInfo?.profile.full_name}</li>
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
                          <li>Preferred name</li>
                          <li>Contact Details</li>
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
                          <li>Pronouns</li>
                          <li>{userInfo?.profile.pronouns}</li>
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
                          <li>Date of Birth</li>
                          <li>
                            {userInfo?.profile.date_of_birth}
                            {/* <Link color="#38b492">Add a date of Birth</Link> */}
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
            <Box sx={{ pt: 3 }}>
              <Contact userInfo={userInfo} />
            </Box>
            <Box sx={{ pt: 3 }}>
              <LoginInfo />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
      <ChatIcon />
    </>
  );
}
