import React from "react";
import MaxPilotLogo from "../../assets/images/maxpilot-logo-w.png";
import { Box } from "@mui/material";

function SimpleSidebar() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#38b492",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          flexBasis: "100% !important",
          paddingTop: "5px",
          minHeight: "100vh",
        }}
      >
        <Box
          component="img"
          sx={{
            // height: { lg: 120, md: 120, sm: 100, lg: 80 },
            width: { lg: 250, md: 120, sm: 100, xs: 60 },
          }}
          alt="Max Pilot"
          src={MaxPilotLogo}
        />
      </Box>
    </>
  );
}

export default SimpleSidebar;
