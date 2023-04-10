import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import "../../style/Syncpayroll.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "10px ",
  boxShadow: 24,
  px: 4,
  py: 4,
  borderRadius: "12px",
};

export default function SyncPayroll(props) {
  return (
    <React.Fragment>
      <Box sx={{ ...style, width: 490, height: "auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold" }}
            id="child-modal-title"
          >
            Sync Team member with payroll
          </Typography>
          <CloseIcon
            onClick={props.handleClosePayroll}
            sx={{ cursor: "pointer" }}
          ></CloseIcon>
        </Box>

        <Box sx={{ color: "#342b61" }}>
          <Typography sx={{ color: "#b4b4b4" }}>Team members</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox size="small" sx={{ color: "rgba(95, 91, 81, 0.518)" }} />
            <Typography>
              Refresh the mapping of team members between MaxPilot
            </Typography>
          </Box>
          <Typography sx={{ mt: 2, mb: 1, ml: 2 }}>Asher Muneer</Typography>
          <Typography sx={{ ml: 2 }}>30 Team members</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            className="all-blue-btns"
            variant="contained"
            sx={{
              textTransform: "none",
              borderRadius: "8px",
              mt: 3,
              width: "40%",
              height: 35,
            }}
          >
            Sync Team member
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
}
