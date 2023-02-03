import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

import { useTheme } from "@mui/material/styles";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

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
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const names = [];
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "8px ",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function Addteammember() {
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
      <Button onClick={handleOpen}>Add Team member</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, mt: "20px", width: 550, height: 650 }}>
          <h2 id="child-modal-title">Add Team member</h2>
          <Box className="flex flex-row">
            <Typography sx={{ fontWeight: "bold" }}>
              {" "}
              Invite with a unique link{" "}
            </Typography>

            <p>
              {" "}
              Don't know your team's email addresses? Share the unique link
              below to get your team onto your uRoaster workplace faster. To
              keep things secured, you will need to approve each request.{" "}
            </p>
          </Box>
          <div>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <TextField
                size="small"
                sx={{
                  width: 250,
                  ml: "8px",
                }}
              ></TextField>
              <Button
                className="btn btn-primary"
                size="small"
                sx={{
                  borderRadius: "5px",
                  ml: "15px",
                  textTransform: "capitalize",
                }}
              >
                Copy link
              </Button>
            </Box>
            <Typography sx={{ color: "green", ml: "10px", pt: "5px" }}>
              How invite links work
            </Typography>
            <Box sx={{ pt: 2 }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  sx={{
                    ml: "7px",
                    pt: "15px",
                  }}
                >
                  First name
                </Typography>
                <TextField
                  size="small"
                  sx={{
                    width: 330,
                    ml: "50px",
                    pt: "10px",
                  }}
                  placeholder="Please input "
                ></TextField>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  sx={{
                    ml: "7px",
                    pt: "15px",
                  }}
                >
                  Last name
                </Typography>
                <TextField
                  size="small"
                  sx={{
                    width: 330,
                    ml: "50px",
                    pt: "10px",
                  }}
                  placeholder="Please input "
                ></TextField>
              </Box>

              <FormControl
                size="small"
                sx={{
                  m: 1,
                  width: 350,
                  mt: 3,
                  pt: "5px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography sx={{ pr: "45px" }}> Main Location </Typography>
                <Select
                  sx={{ pb: "5px", font: "inherit", width: "600px" }}
                  multiple
                  displayEmpty
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em>Select location</em>;
                    }

                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem disabled value="">
                    <em>Select location</em>
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

              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  sx={{
                    ml: "7px",
                    pt: "15px",
                  }}
                >
                  Mobile
                </Typography>
                <TextField
                  size="small"
                  sx={{
                    width: 330,
                    ml: "50px",
                    pt: "10px",
                  }}
                  placeholder="Please input "
                ></TextField>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  sx={{
                    ml: "7px",
                    pt: "15px",
                  }}
                >
                  Email
                </Typography>
                <TextField
                  size="small"
                  sx={{
                    width: 330,
                    ml: "50px",
                    pt: "10px",
                  }}
                  placeholder="Please input "
                ></TextField>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography sx={{ mt: "20px" }}>Access level </Typography>
                <FormControl
                  size="small"
                  sx={{
                    m: 1,
                    mt: 3,
                  }}
                >
                  <Select
                    sx={{ pb: "5px", font: "inherit", width: "400px" }}
                    multiple
                    displayEmpty
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                      if (selected.length === 0) {
                        return <em>Employee</em>;
                      }

                      return selected.join(", ");
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem disabled value="">
                      <em>Employee</em>
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
              </Box>
            </Box>
          </div>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Checkbox {...label} />
            <p> Invite to use Maxpilot </p>
            <Button
              sx={{ textTransform: "capitalize" }}
              className="btn btn-primary"
              onClick={handleClose}
            >
              Sync Team member
            </Button>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
