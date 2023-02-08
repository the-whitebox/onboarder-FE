import * as React from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import "../../style/Setpayrates.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "15px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Setpayrates() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <React.Fragment>
      {/* <Button onClick={handleOpen}>Set pay rates </Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      > */}
      <Box sx={{ ...style, width: 400, height: 680 }}>
        <span
          onclick="document.getElementById('id01').style.display='none'"
          class="close"
          title="Close Modal"
        >
          ×
        </span>
        <h1> Set pay rates</h1>
        <div>
          <Typography sx={{ pb: "5px" }}> 2 Team members </Typography>
          <Box
            sx={{
              bgcolor: "lightgray",
              display: "flex",
              flexDirection: "row",
            }}
          >
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
                ml: "5px",
                mt: "9px",
                color: "wblack",
              }}
            >
              pay rates help track wage costs and can be expected to ensure team
              members are paid correctly. Select from our pay rates library
              below. About pay rates
            </Typography>
          </Box>

          <FormControl size="small" sx={{ m: 1, width: 250, mt: 3, pt: "5px" }}>
            <Typography sx={{ fontWeight: "bold" }}> Pay rates </Typography>
            <Select
              sx={{ pb: "5px", font: "inherit" }}
              multiple
              displayEmpty
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>Rates per Day</em>;
                }

                return selected.join(", ");
              }}
              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem disabled value="">
                <em>Rates per Day</em>
              </MenuItem>
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box sx={{ ml: "12px" }}>
            <Typography
              sx={{
                ml: "7px",
                fontWeight: "bold",
                fontSize: "15px",
                pt: "15px",
              }}
            >
              Mondays
            </Typography>
            <TextField
              size="small"
              sx={{
                width: 330,
                ml: "8px",
              }}
              placeholder="0                                             Rs per hour"
            ></TextField>
            <Typography
              sx={{
                ml: "7px",
                fontWeight: "bold",
                fontSize: "15px",
                pt: "10px",
              }}
            >
              {" "}
              Tuesdays
            </Typography>
            <TextField
              placeholder="0                                             Rs per hour"
              size="small"
              sx={{
                width: 330,
                ml: "8px",
              }}
            ></TextField>
            <Typography
              sx={{
                ml: "7px",
                fontWeight: "bold",
                fontSize: "15px",
                pt: "10px",
              }}
            >
              {" "}
              Wednesdays
            </Typography>
            <TextField
              placeholder="0                                             Rs per hour"
              size="small"
              sx={{ width: 330, ml: "8px" }}
            >
              {" "}
            </TextField>
            <Typography
              sx={{
                ml: "7px",
                fontWeight: "bold",
                fontSize: "15px",
                pt: "10px",
              }}
            >
              {" "}
              Thursdays
            </Typography>
            <TextField
              placeholder="0                                             Rs per hour"
              size="small"
              sx={{ width: 330, ml: "8px" }}
            >
              {" "}
            </TextField>
            <Typography
              sx={{
                ml: "7px",
                fontWeight: "bold",
                fontSize: "15px",
                pt: "10px",
              }}
            >
              {" "}
              Fridays
            </Typography>
            <TextField
              placeholder="0                                             Rs per hour"
              size="small"
              sx={{ width: 330, ml: "8px" }}
            >
              {" "}
            </TextField>
          </Box>
        </div>
        <Button
          className="btn"
          size="small"
          sx={{
            mt: "25px",
            ml: 40,
            borderRadius: "8px",
            width: "10%",
          }}
          // onClick={handleClose}
        >
          Save
        </Button>
      </Box>
      {/* </Modal> */}
    </React.Fragment>
  );
}
