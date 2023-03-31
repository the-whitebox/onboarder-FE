import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import MaxPilotLogo from "../../assets/images/maxpilot-logo.png";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import GlobalContext from "../../context/GlobalContext";
import { useNavigate } from "react-router-dom";

const theme = createTheme();
const drawerWidth = 2;

export default function Navbar() {
  const { userInfo } = React.useContext(GlobalContext);
  const token = localStorage.getItem("token");
  const Navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    Navigate("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        style={{ background: "#ffffff", color: "black" }}
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      >
        <Box
          sx={{
            height: 80,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{ width: "140px", height: "70px", ml: 5 }}
            variant="square"
            src={MaxPilotLogo}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              mr: 30,
              flexGrow: 1,
            }}
          >
            <Button
              sx={{
                textTransform: "none",
                borderRadius: "20px",
                mr: 2,
                color: "white",
                bgcolor: "#f26a60",
                fontSize: "0.8rem",
              }}
            >
              Me
            </Button>
            <Typography
              sx={{
                mr: 2,
                fontSize: "0.8rem",
              }}
            >
              News Feed
            </Typography>
            <Typography
              sx={{
                mr: 2,
                fontSize: "0.8rem",
              }}
            >
              Task
            </Typography>
            <Typography
              sx={{
                mr: 2,
                fontSize: "0.8rem",
              }}
            >
              Locations
            </Typography>
            <Typography
              sx={{
                mr: 2,
                fontSize: "0.8rem",
              }}
            >
              people
            </Typography>
            <Typography
              sx={{
                mr: 2,
                fontSize: "0.8rem",
              }}
            >
              Schedule
            </Typography>
            <Typography
              sx={{
                mr: 2,
                fontSize: "0.8rem",
              }}
            >
              TimeSheets
            </Typography>
            <Typography
              sx={{
                mr: 2,
                fontSize: "0.8rem",
              }}
            >
              Reports
            </Typography>
            <Typography
              sx={{
                mr: 2,
                fontSize: "0.8rem",
              }}
            >
              Enterprise
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column " }}>
            <Typography sx={{ fontSize: "0.9rem", mr: 1 }}>
              {userInfo?.first_name} {userInfo?.last_name}
            </Typography>
            <Typography sx={{ ml: 5, fontSize: "0.8rem" }}>@Danish</Typography>
          </Box>
          <Avatar alt="Remy Sharp" />
          <Typography
            sx={{ ml: 2, bgcolor: "black", width: 2, height: 25 }}
          ></Typography>
          <IconButton
            size="medium"
            aria-label="show 17 new notifications"
            color="white"
            onClick={handleLogout}
          >
            <SettingsOutlinedIcon />
          </IconButton>

          <IconButton
            size="medium"
            aria-label="show 17 new notifications"
            color="white"
          >
            <FavoriteBorderIcon />
          </IconButton>

          <IconButton
            size="medium"
            aria-label="show 17 new notifications"
            color="white"
          >
            <NotificationsOutlinedIcon />
          </IconButton>
        </Box>
      </AppBar>
    </ThemeProvider>
  );
}
