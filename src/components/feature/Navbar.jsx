import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MaxPilotLogo from "../../assets/images/maxpilot-logo.png";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import GlobalContext from "../../context/GlobalContext";
import { NavLink, useNavigate } from "react-router-dom";

const navLinksArr = [
  { title: "Home", url: "/home" },
  { title: "News Feed", url: "/news-feed" },
  { title: "Task", url: "/task" },
  { title: "Locations", url: "/locations" },
  { title: "People", url: "/people" },
  { title: "Schedule", url: "/schedule" },
  { title: "TimeSheets", url: "/timesheets" },
  { title: "Reports", url: "/reports" },
  { title: "Enterprise", url: "/enterprise" },
];
export default function Navbar() {
  const { userInfo } = React.useContext(GlobalContext);
  const token = localStorage.getItem("token");
  const Navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    Navigate("/");
  };

  return (
    <AppBar
      className="navbar"
      style={{ background: "#ffffff", color: "black" }}
      position="fixed"
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 1,
          px: 2,
        }}
      >
        <Avatar
          sx={{ width: "140px", height: "70px" }}
          variant="square"
          src={MaxPilotLogo}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {navLinksArr?.map((data, index) => (
            <NavLink to={data.url} className="navbar-aTag">
              {data.title}
            </NavLink>
          ))}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mr: 1,
              alignItems: "flex-end",
            }}
          >
            <Typography sx={{ fontSize: "0.9rem" }}>
              {userInfo?.first_name} {userInfo?.last_name}
            </Typography>
            <Typography sx={{ fontSize: "0.8rem", fontWeight: "600" }}>
              @Danish
            </Typography>
          </Box>
          <Avatar alt="Remy Sharp" />
          <Box sx={{ ml: 2, mr: 1, bgcolor: "black", width: 2, height: 25 }} />
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
      </Box>
    </AppBar>
  );
}
