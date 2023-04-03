import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import { useEffect } from "react";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px ",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 4,
};

export default function SyncPayroll(props) {
  const token = localStorage.getItem("token");
  const url = process.env.REACT_APP_BASE_URL;

  return (
    <React.Fragment>
      <Box sx={{ ...style, width: 550, height: "auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>Archive Team members</h2>
          <CloseIcon
            onClick={props.handleClose}
            sx={{ cursor: "pointer" }}
          ></CloseIcon>
        </Box>

        <Box>
          <Typography sx={{ color: "#b4b4b4" }}>
            {props.listOfTeamMembers.length} Team members
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <InfoIcon
              sx={{
                fontSize: "medium",
                color: "#38b492",
                mt: "12px",
                ml: "12px",
              }}
            />
            <Typography
              sx={{
                ml: "5px",
                mt: "10px",
                color: "#332a60",
              }}
            >
              Archiving these people will revoke their access to this
              organization and will no longer be able to login to any device but
              historical records will be retained.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: "15px",
            }}
          >
            <Box sx={{ display: "flex", pt: 2, pb: 2, ml: 2 }}>
              <Typography sx={{ fontWeight: "bold" }}>AM</Typography>
              <Typography sx={{ ml: 4, fontWeight: "bold" }}>
                Asher Muneer
              </Typography>
            </Box>
            <Typography sx={{ pt: 2, pb: 2, color: "#a1a1a1" }}>
              Ready to Archive
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", pt: 2, pb: 2, ml: 2 }}>
              <Typography sx={{ fontWeight: "bold" }}>AM</Typography>
              <Typography sx={{ ml: 4, fontWeight: "bold" }}>ssssss</Typography>
            </Box>
            <Typography sx={{ pt: 2, pb: 2, color: "#a1a1a1" }}>
              Ready to Archive
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            className="all-red-btns"
            variant="contained"
            sx={{
              textTransform: "none",
              borderRadius: "7px",
              mt: 4,
              width: "40%",
              height: 35,
            }}
          >
            Archive Team members
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
}
