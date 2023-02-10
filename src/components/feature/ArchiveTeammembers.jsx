import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import CloseIcon from "@mui/icons-material/Close";
import "../../style/Archiveteam.css";
import InfoIcon from "@mui/icons-material/Info";

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

export default function SyncPayroll() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Box sx={{ ...style, width: 500, height: 360 }}>
        <Box className="flex flex-row" sx={{ width: "520px" }}>
          <h2>Archive Team members</h2>
          <CloseIcon onClick={handleClose} sx={{ pb: "45px" }}></CloseIcon>
        </Box>

        <div>
          <Typography sx={{ color: "#b4b4b4", ml: 1 }}>
            2 Team members
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <InfoIcon
              sx={{
                color: "Gray",
                mt: "11px",
                ml: "12px",
              }}
            />
            <Typography
              sx={{
                ml: "5px",
                pb: "15px",
                mt: "10px",
              }}
            >
              Archiving these people will revoke their access to this
              organization and will no longer be able to login to any device but
              historical records will be retained.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ pt: 2, pb: 2, mr: 1, pl: 2, fontWeight: "bold" }}>
              AM
            </Typography>
            <Typography sx={{ pt: 2, pb: 2, ml: 4, fontWeight: "bold" }}>
              Asher Muneer
            </Typography>
            <Typography sx={{ pt: 2, pb: 2, ml: 20, color: "#a1a1a1" }}>
              Ready to Archive
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ pt: 2, pb: 2, ml: 2, fontWeight: "bold" }}>
              ss
            </Typography>
            <Typography sx={{ pt: 2, pb: 2, ml: 6, fontWeight: "bold" }}>
              sss sss
            </Typography>
            <Typography sx={{ pt: 2, pb: 2, ml: 26, color: "#a1a1a1" }}>
              Ready to Archive
            </Typography>
          </Box>
        </div>

        <Button
          className="button"
          sx={{
            textTransform: "none",
            ml: 34,
            borderRadius: "7px",
            mt: 3,
            width: "210px",
          }}
        >
          Archive Team members
        </Button>
      </Box>
    </React.Fragment>
  );
}
