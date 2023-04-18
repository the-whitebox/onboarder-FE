import React from "react";
import { Box, Typography } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

function Setuptask() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            border: "0.10000000149011612px solid rgb(112, 112, 112,0.5)",
            borderRadius: "11px",
            display: "flex",
            alignItems: "center",
            p: "0px 10px",
            height: "50px",
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
            border: "0.5px solid rgb(43, 180, 145,0.5)",
            borderRadius: "11px",
            display: "flex",
            alignItems: "center",
            p: "0px 10px",
            height: "50px",
            ml: 1,
            cursor: "pointer",
          }}
        >
          <QuestionMarkIcon sx={{ color: "#2BB491", fontSize: "30px" }} />
        </Box>
      </Box>
    </>
  );
}

export default Setuptask;
