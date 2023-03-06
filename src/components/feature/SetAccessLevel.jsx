import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CloseButton from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import "../../style/SetAccesslevel.css";
import { useState } from "react";
import { FormHelperText } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 150,
    },
  },
};

const names = [
  "System Administrator",
  "Supervisor",
  "Employee",
  "Location Manager",
  "Advisor",
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: "12px",
  padding: "20px",
};

export default function SetAccessLevel() {
  const [state, setState] = React.useState({ data: "" });
  const [selectedValue, setSelectedValue] = useState("");
  const [error, setError] = React.useState(null);

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
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [isOpen, setIsOpen] = useState(true);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toAccess = (e) => {
    if (selectedValue !== "") {
      console.log("Data Found");
      setError(false);
      console.log(selectedValue);
    } 
    else {
      setError(true);
      setState({ data: e.target.value });
    }
  };

  return (
    <React.Fragment>
      <Box sx={{ ...style, width: 370, height: 270 }}>
        <CloseButton
          id="child-modal-title"
          onClick={toggleDropdown}
          sx={{ float: "right" }}
        ></CloseButton>
        <Typography
          variant="h5"
          sx={{ mt: 2, fontWeight: "bold", paddingBottom: 1 }}
          id="child-modal-title"
        >
          Set Access level
        </Typography>

        <div>
          <p className="team">2 Team members </p>
          <Typography sx={{ fontWeight: "bold", ml: "8px" }}>
            Access level
          </Typography>
          <FormControl
            error={error}
            sx={{
              width: 200,
              height: 5,
              padding: "5px  ",
            }}
          >
            <Select 
              size="small"
              sx={{ borderRadius: "7px" }}
              displayEmpty
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
              >
              <MenuItem value={"System Administrator"}>System Administrator</MenuItem>
              <MenuItem value={"Supervisor"}>Supervisior</MenuItem>
              <MenuItem value={"Employee"}>Employee</MenuItem>
              <MenuItem value={"Location Manager"}>Location Manager</MenuItem>
              <MenuItem value={"Advisor"}>Advisor</MenuItem>
            </Select>
            {error && <FormHelperText>Select a value</FormHelperText>}
            {/* <Select
              size="small"
              sx={{ borderRadius: "7px" }}
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
              // {...register("Access Level", { required: true })}
              // onClick={(e) => setAccess(e.target.value)}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, access, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select> */}
          </FormControl>
          {/* <Box sx={{ ml: 1, mt: 4 }}>
        {errors.Access?.type === "required" && "Access Level Required"}
        <small>
          {accessError && (
            <div
              style={{
                color: "red",
              }}
            >
              {accessError}
            </div>
          )}
        </small>
        </Box> */}
        </div>
        <Button
          variant="primary"
          className="btn"
          sx={{
            ml: 34,
            borderRadius: "6px",
            width: "22%",
            bgcolor: "#38b492",
            color: "white",
            textTransform: "none",
            mt: 6,
          }}
          onClick={() => {
            // accessValidation();
            toAccess();                  
            // setError(!selectedValue)
          }}
        >
          Update
        </Button>
      </Box>
    </React.Fragment>
  );
}
