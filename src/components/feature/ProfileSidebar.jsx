import React from "react";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import Ellipse136 from "../../assets/images/Ellipse 136.png";
import { NavLink } from "react-router-dom";
import "../../style/Sidebar.css";

function ProfileSidebar() {
  return (
    <>
      <Box
        id="personal-details"
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Avatar
          src={Ellipse136}
          sx={{ width: "60px", height: "60px", mt: 1 }}
        />
        <Typography sx={{ color: "#131523", fontSize: "12px", mt: 1 }}>
          Steve Holland
        </Typography>
        <Typography sx={{ color: "#A2A2A2", fontSize: "12px" }}>
          Admin
        </Typography>
        <Typography
          sx={{
            bgcolor: "#E6F4EB",
            color: "#131523",
            cursor: "pointer",
            fontSize: "12px",
            mt: 2,
            borderRadius: "14px",
            p: "5px 0px",
            width: "70%",
            textAlign: "center",
          }}
        >
          Start Shift
        </Typography>
        <Typography
          sx={{
            bgcolor: "#E6F4EB",
            color: "#2BB491",
            cursor: "pointer",
            fontSize: "12px",
            mt: 1,
            borderRadius: "14px",
            p: "5px 0px",
            width: "70%",
            textAlign: "center",
          }}
        >
          Find replacement
        </Typography>

        <Divider sx={{ mt: 3, px: 2, width: "70%" }} />

        <Typography
          sx={{
            color: "#A2A2A2",
            fontSize: "12px",
            mt: 3,
            width: "80%",
            textAlign: "start",
          }}
        >
          PROFILE
        </Typography>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <NavLink to="/personal/details">Personal</NavLink>
          <NavLink to="/employment">Employment</NavLink>
          <NavLink to="/forms&documents">Forms & Documents</NavLink>
        </Box>

        <Typography
          sx={{
            color: "#A2A2A2",
            fontSize: "12px",
            mt: 3,
            width: "80%",
            textAlign: "start",
          }}
        >
          SCHEDULING
        </Typography>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <NavLink to="/shift">Shift</NavLink>
          <NavLink to="/leave">Leave</NavLink>
          <NavLink to="/unavailability">Unavailability</NavLink>
        </Box>

        <Typography
          sx={{
            color: "#A2A2A2",
            fontSize: "12px",
            mt: 3,
            width: "80%",
            textAlign: "start",
          }}
        >
          ACTIVITY
        </Typography>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <NavLink to="/news-feed">News Feed</NavLink>
          <NavLink to="/history">History</NavLink>
        </Box>
      </Box>
    </>
  );
}

export default ProfileSidebar;
