import React from "react";
import { TbMessageCircle } from "react-icons/tb";
import { Avatar, Box } from "@mui/material";

function ChatIcon() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: { lg: "30px", md: "30px", sm: "20px", xs: "20px" },
        right: { lg: "30px", md: "30px", sm: "20px", xs: "0px" },
      }}
    >
      <Avatar
        className="messageCircle"
        sx={{
          backgroundColor: "#38b492",
          cursor: "pointer",
        }}
      >
        <TbMessageCircle />
      </Avatar>
    </Box>
  );
}

export default ChatIcon;
