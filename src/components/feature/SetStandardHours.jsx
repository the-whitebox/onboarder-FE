import * as React from "react";
import "../../style/SetStandardHours.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function SetStandardHours() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Set Standard Hours</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 350, height: 300, mt: 0 }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "Bold", fontSize: "large" }}
          >
            Set Standard Hours
          </Typography>
          <div>
            <Typography sx={{ mt: "7px", color: "darkgray" }}>
              2 Team members
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <InfoIcon
                sx={{
                  fontSize: "small",
                  color: "Gray",
                  mt: "13px",
                  ml: "12px",
                }}
              />
              <Typography
                sx={{
                  fontSize: "small",
                  ml: "10px",
                  mt: "10px",
                  color: "gray",
                }}
              >
                Number of hours payable for a 'Day of leave'
              </Typography>
            </Box>
            <h5 className="h5"> Hours </h5>
            <TextField
              size="small"
              color="warning"
              sx={{ width: 300, ml: "8px" }}
            ></TextField>

            <Typography sx={{ fontSize: "12px", ml: "10px", mt: "10px" }}>
              Not applicable to 2 Team members selected as they do not a pay
              rate assigned to their profile
            </Typography>
          </div>
          <Button
            sx={{
              mt: "25px",
              ml: 35,
              borderRadius: "8px",
              width: "20%",
              bgcolor: "Blue",
            }}
            onClick={handleClose}
          >
            Save
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}