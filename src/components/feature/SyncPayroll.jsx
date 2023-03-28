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
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px ",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function SyncPayroll(props) {
  return (
    <React.Fragment>
      <Box sx={{ ...style, width: 490, height: 280 }}>
        <Box className="flex flex-row" sx={{ width: "500px" }}>
          <h2>Sync Team member with payroll</h2>
          <CloseIcon
            onClick={props.handleClosePayroll}
            sx={{ pb: "45px", cursor: "pointer" }}
          ></CloseIcon>
        </Box>

        <div>
          <Typography sx={{ color: "#b4b4b4", ml: 1 }}>Team members</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Checkbox
              size=""
              sx={{
                pr: "8px",
                pt: "14px",
                color: "rgba(95, 91, 81, 0.518)",
              }}
            />
            <Typography sx={{ pt: "10px" }}>
              Refresh the mapping of Team members between MaxPilot
            </Typography>
          </Box>
          <Typography sx={{ pt: 2, pb: 2, ml: 4 }}>Asher Muneer</Typography>
          <Typography sx={{ ml: 4 }}>sssss sss</Typography>
        </div>

        <Button
          className="Btn"
          sx={{
            textTransform: "none",
            ml: 42,
            borderRadius: "8px",
            mt: 3,
            width: "170px",
          }}
        >
          Sync Team member
        </Button>
      </Box>
    </React.Fragment>
  );
}
