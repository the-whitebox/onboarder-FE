import React from "react";
import { Box, Typography } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

function Setuptask() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            border: "0.5px solid #707070",
            borderRadius: "11px",
            display: "flex",
            alignItems: "center",
            p: "0px 10px",
            height: "50px",
            boxShadow: 1,
          }}
        >
          <Typography sx={{ color: "#354052" }}>Setup task</Typography>
          <Box
            sx={{
              bgcolor: "#e6f4eb",
              color: "#354052",
              ml: 2,
              borderRadius: "100%",
              fontSize: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              height: "30px",
            }}
          >
            24/7
          </Box>
        </Box>
        <Box
          sx={{
            border: "0.5px solid #2BB491",
            borderRadius: "11px",
            display: "flex",
            alignItems: "center",
            p: "0px 10px",
            height: "50px",
            ml: 1,
            cursor: "pointer",
            boxShadow: 1,
          }}
        >
          <QuestionMarkIcon sx={{ color: "#2BB491", fontSize: "30px" }} />
        </Box>
      </Box>
    </>
  );
}

export default Setuptask;
