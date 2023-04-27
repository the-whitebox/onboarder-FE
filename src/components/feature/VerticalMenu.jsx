import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";
import logo from "../../assets/logos/logo.png";

export default function VerticalMenu(props) {
  const { userInfo } = React.useContext(GlobalContext);

  return (
    <Box
      className="vertical-menu"
      sx={{
        width: { xl: "22%", sm: "25%" },
        bgcolor: "#2bb491",
        minHeight: "100vh",
        color: "#ffffff",
        borderRadius: "0px 30px 30px 0px",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Avatar
          src={logo}
          aria-label="Busy Man"
          sx={{
            width: { xl: "220px", sm: "180px" },
            height: { xl: "120px", sm: "auto" },
            padding: "0px",
            margin: "0px",
            borderRadius: 0,
            mt: { xl: 10, sm: 5 },
          }}
        />
      </Box>
      <Box sx={{ mt: { xl: 8, lg: 5, sm: 3 } }}>
        <Box
          sx={{
            background: "#86d3bd",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <NavLink to="/step3-4" className="verticalMenu-aTag">
            Profile
          </NavLink>
          <NavLink to="/personal/details" className="verticalMenu-aTag">
            Personal
          </NavLink>
          <NavLink to="/employment" className="verticalMenu-aTag">
            Employment
          </NavLink>
          <NavLink to="/journals" className="verticalMenu-aTag">
            Journals
          </NavLink>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <List
            sx={{
              fontWeight: "900 !important",
              mt: "5px",
              fontSize: { xl: "30px", sm: "18px" },
            }}
          >
            Scheduling
          </List>
          <NavLink
            to="/shifts"
            className="verticalMenu-aTag"
            style={{ color: "white" }}
          >
            Shifts
          </NavLink>
          <NavLink
            to="/leave"
            className="verticalMenu-aTag"
            style={{ color: "white" }}
          >
            Leave
          </NavLink>
          <NavLink
            to="/unavailability"
            className="verticalMenu-aTag"
            style={{ color: "white" }}
          >
            Unavailability
          </NavLink>
          <List
            sx={{
              fontWeight: "900 !important",
              mt: "5px",
              fontSize: { xl: "30px", sm: "18px" },
            }}
          >
            Activity
          </List>
          <NavLink
            to="/news-feed"
            className="verticalMenu-aTag"
            style={{ color: "white" }}
          >
            News Feed
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
}
