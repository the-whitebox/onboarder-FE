import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import "../../style/SetAgreedhours.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

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

export default function SetAgreedhours() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Set Agreed Hours</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 400, height: 600, mt: 10 }}>
          <h2>Set agreed hours</h2>
          <div>
            <p className="team">2 Team members</p>
            <p className="work">Work period</p>
            <h5 className="period">Create a new work period </h5>
            <Typography className="p">
              Saving this template will allow it to be used across any team
              member profile.
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "Bold", fontSize: "Small" }}
            >
              Work period length
            </Typography>

            <FormControl>
              <RadioGroup
                sx={{ display: "flex", flexDirection: "row" }}
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Weekly"
                  control={<Radio />}
                  label="Weekly"
                />
                <FormControlLabel
                  value="2-Weekly"
                  control={<Radio />}
                  label="2-Weekly"
                />
                <FormControlLabel
                  value="4-Weekly"
                  control={<Radio />}
                  label="4-Weekly"
                />
              </RadioGroup>
            </FormControl>

            <Typography
              variant="h6"
              sx={{ fontWeight: "Bold", fontSize: "Small" }}
            >
              {" "}
              Net Work period starts on{" "}
            </Typography>

            <FormControl>
              <RadioGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 1,
                }}
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="radio-buttons-group"
              >
                <FormControlLabel value="Mon" control={<Radio />} label="Mon" />
                <FormControlLabel value="Tue" control={<Radio />} label="Tue" />
                <FormControlLabel value="Wed" control={<Radio />} label="Wed" />
                <FormControlLabel value="Thu" control={<Radio />} label="Thu" />
                <FormControlLabel value="Fri" control={<Radio />} label="Fri" />
                <FormControlLabel value="Sat" control={<Radio />} label="Sat" />
                <FormControlLabel value="Sun" control={<Radio />} label="Sun" />
              </RadioGroup>
            </FormControl>

            <Typography variant="h5"> Hours per Work period </Typography>
            <TextField size="small" placeholder="0 hours">
              {" "}
            </TextField>
          </div>
          <Button
            sx={{
              ml: 35,
              borderRadius: "8px",
              width: "20%",
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
