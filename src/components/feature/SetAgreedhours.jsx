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
import CloseIcon from "@mui/icons-material/Close";

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
      <Box
        sx={{
          ...style,
          width: 450,
          height: 660,
          mt: 10,
        }}
      >
        <Box className="flex flex-row" sx={{ width: "450px" }}>
          <h2 className="set">Set agreed hours</h2>
          <CloseIcon onClick={handleClose} sx={{ pb: "25px" }}></CloseIcon>
        </Box>
        <div>
          <Typography
            sx={{
              pt: "10px",
              fontWeight: "bold",
              color: "rgba(95, 91, 81, 0.518)",
            }}
          >
            2 Team members
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              mt: "20px",
              pb: "20px",
            }}
          >
            Work period
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", ml: "20px", pb: "15px" }}
          >
            Create a new work period{" "}
          </Typography>
          <Typography sx={{ ml: "20px", pb: "30px" }}>
            Saving this template will allow it to be used across any team member
            profile.
          </Typography>
          <Typography
            sx={{
              fontWeight: "Bold",
              fontSize: "large",
              ml: "20px",
              pb: "10px",
            }}
          >
            Work period length
          </Typography>

          <FormControl>
            <RadioGroup
              sx={{
                display: "flex",
                flexDirection: "row",
                ml: "20px",
                gap: 3,
              }}
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
            sx={{
              ml: "20px",
              fontWeight: "Bold",
              fontSize: "large",
              pb: "10px",
            }}
          >
            {" "}
            Net Work period starts on{" "}
          </Typography>

          <FormControl>
            <RadioGroup
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 2,

                ml: "20px",
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

          <Typography
            sx={{ fontWeight: "bold", pt: "15px", pb: "20px", ml: 3 }}
          >
            {" "}
            Hours per Work period{" "}
          </Typography>
          <TextField
            sx={{ width: "140px", ml: 3 }}
            size="small"
            placeholder="0             hours"
          >
            {" "}
          </TextField>
        </div>
        <Button
          className="btn btn-primary"
          sx={{
            ml: 45,
            borderRadius: "5px",
            width: "16%",
            textTransform: "none",
            mt: 3,
          }}
        >
          Save
        </Button>
      </Box>
    </React.Fragment>
  );
}
