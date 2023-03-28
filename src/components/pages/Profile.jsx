import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import VerticalMenu from "../feature/VerticalMenu";
import "../../style/General.css";
import { ThemeProvider } from "@mui/material/styles";
import Modal from "@mui/material/Modal";
import ArchiveTeamMemberModalBody from "../feature/ArchiveTeammembers";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useTheme } from "@mui/material/styles";
import axios from "axios";
import ChatIcon from "../feature/ChatIcon";
import ProfileDetails from "../feature/ProfileDetails";
import Contact from "../feature/Contact";
import LoginInfo from "../feature/LoginInfo";
import { Link } from "react-router-dom";

const drawerWidth = 240;

export default function Profile() {
  const theme = useTheme();
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const url = process.env.REACT_APP_BASE_URL + `/people/${userId}/`;
  const [userInfo, setUserInfo] = React.useState();

  React.useEffect(() => {
    const getLoggedInUserDetails = async () => {
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
    getLoggedInUserDetails();
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
          <Box component="main" sx={{ flexGrow: 1, bgcolor: "#fcfcfc", p: 3 }}>
            <Toolbar />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box m={1}>
                <Breadcrumbs aria-label="breadcrumb">
                  <Link to="/People" className="aTag">
                    Home
                  </Link>
                  <Typography color="text.primary">Personal</Typography>
                </Breadcrumbs>
              </Box>
              <Button
                variant="contained"
                className="all-green-btns"
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
            <Box>
              <ProfileDetails userInfo={userInfo} />
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
