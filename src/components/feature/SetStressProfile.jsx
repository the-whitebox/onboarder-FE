import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";
import "../../style/SetStress.css";
import { styled } from "@mui/material/styles";

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

const names = [
  "2 days per week",
  "24/7",
  "CA Overtime 40hrs per week, 8hrs per day, max 6 days per week",
  "Max 20 hours per week",
  "Normal 38 hours per week",
  "Standard 40 hours, 8 hours per day",
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const parentModal = {
  position: "absolute",
  // transform: "translate(-50%, -50%)",
  width: "95%",
  height: "95%",
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 2,
  m: 4,
};

export default function SetStressProfile() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

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

  return (
    <React.Fragment>
      {/* <Button onClick={handleOpen}>Set Stress Profile</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      > */}
      <Box sx={{ ...style, width: 400 }}>
        <Box className="flex flex-row" sx={{ width: "420px" }}>
          <h2 className="set">Set Stress Profile</h2>
          <CloseIcon sx={{ pb: "30px" }}></CloseIcon>
        </Box>
        <div>
          <Typography sx={{ color: "#a9a9a9", pt: "15px" }}>
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
                fontSize: "large",
                color: "Gray",
                mt: "13px",
                ml: "12px",
              }}
            />
            <Typography
              sx={{
                fontSize: "15px",
                ml: "5px",
                mt: "9px",
                color: "wblack",
              }}
            >
              Stress Profiles are scheduling rules such as minimum and maximum
              hours. Use our templates below or
            </Typography>
          </Box>
          <p className="own">Create your own.</p>

          <FormControl sx={{ m: 1, width: 220, mt: 3 }}>
            <Typography sx={{ pb: "10px", fontWeight: "bold", ml: "5px" }}>
              Stress Profile{" "}
            </Typography>
            <Select
              sx={{ borderRadius: "10px" }}
              multiple
              displayEmpty
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>Select</em>;
                }

                return selected.join(", ");
              }}
              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Without label" }}
            >
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
        </div>
        <Button
          className="Btn"
          sx={{
            borderRadius: "7px",
            ml: 42,
            width: 80,
            textTransform: "none",
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
