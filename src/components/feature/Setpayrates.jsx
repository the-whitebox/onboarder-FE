import * as React from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
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

const modalWrapper = {
  overflow: "auto",
  display: "flex",
};

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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {/* <Button onClick={handleOpen}>Set pay rates </Button>
      <Modal
        hideBackdrop
        open={open}
        sx={modalWrapper}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      > */}
      <Box sx={{ ...style, width: 400, height: 770, mt: 10 }}>
        <Box className="flex flex-row" sx={{ width: "420px" }}>
          <h2>Set Pay rates</h2>

          <CloseIcon onClick={handleClose} sx={{ pb: "45px" }}></CloseIcon>
        </Box>
        <div>
          <Typography sx={{ pb: "5px" }}> 2 Team members </Typography>
          <Box
            sx={{
              bgcolor: "#d5f9f6",
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
              Pay rates help track wage costs and can be expected to ensure team
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
                  pt: "12px",
                  pb: 0,
                }}
              >
                Mondays
              </Typography>
              <FormControl
                size="small"
                sx={{ m: 1, width: 370 }}
                variant="outlined"
              >
                <OutlinedInput
                  id="outlined-adornment-weight"
                  endAdornment={
                    <InputAdornment position="end">Rs per hour</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
              </FormControl>
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
              <FormControl
                size="small"
                sx={{ m: 1, width: 370 }}
                variant="outlined"
              >
                <OutlinedInput
                  id="outlined-adornment-weight"
                  endAdornment={
                    <InputAdornment position="end">Rs per hour</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
              </FormControl>
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
              <FormControl
                size="small"
                sx={{ m: 1, width: 370 }}
                variant="outlined"
              >
                <OutlinedInput
                  id="outlined-adornment-weight"
                  endAdornment={
                    <InputAdornment position="end">Rs per hour</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
              </FormControl>
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
              <FormControl
                size="small"
                sx={{ m: 1, width: 370 }}
                variant="outlined"
              >
                <OutlinedInput
                  id="outlined-adornment-weight"
                  endAdornment={
                    <InputAdornment position="end">Rs per hour</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
              </FormControl>
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
              <FormControl
                size="small"
                sx={{ m: 1, width: 370 }}
                variant="outlined"
              >
                <OutlinedInput
                  id="outlined-adornment-weight"
                  endAdornment={
                    <InputAdornment position="end">Rs per hour</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
              </FormControl>
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
              textTransform: "none",
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
