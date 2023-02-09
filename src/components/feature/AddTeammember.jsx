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
import Icon5 from "../../assets/images/Capture.png";
import { useTheme } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";
import Capture from "../../assets/images/Capture.png";
import "../../style/Addteam.css";

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
        <Box
          sx={{
            ...style,
            mt: "20px",
            width: 660,
            height: 750,
            overflowX: "scroll",
          }}
        >
          <Box className="flex flex-row" sx={{ width: "660px" }}>
            <h2 className="set">Add Team member</h2>
            <CloseIcon sx={{ pb: "25px" }}></CloseIcon>
          </Box>
          <Grid sx={{ display: "flex", flexDirection: "row", pt: "20px" }}>
            <Avatar
              src={Capture}
              aria-label="Busy Man"
              sx={{
                height: "150px",
                width: "150px",
              }}
            />
            <Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  mt: "10px",
                  pt: "20px",
                }}
              >
                {" "}
                Invite with a unique link{" "}
              </Typography>
              <Typography sx={{ mt: "20px" }}>
                {" "}
                Don't know your team's email addresses? Share the unique link
                below to get your team onto your uRoaster workplace faster. To
                keep things secured, you will need to approve each request.{" "}
              </Typography>
            </Box>
          </Grid>

          <div>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <TextField
                size="small"
                sx={{
                  mt: "10px",
                  width: 350,
                  ml: 20,
                }}
              ></TextField>
              <Button
                className="btn btn-primary"
                size="small"
                sx={{
                  borderRadius: "5px",
                  mt: "12px",
                  ml: 2,
                  width: "100px",
                  height: "30px",
                  textTransform: "capitalize",
                }}
              >
                Copy link
              </Button>
            </Box>
            <Typography sx={{ color: "green", ml: 20, pt: "5px" }}>
              How invite links work
            </Typography>
            <Box sx={{ pt: 2 }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  sx={{
                    ml: "8px",
                    pt: "15px",
                    width: "100px",
                  }}
                >
                  First name
                </Typography>
                <TextField
                  className="first"
                  size="small"
                  sx={{
                    width: 530,
                    ml: "38px",
                    pt: "10px",
                    borderRadius: 20,
                  }}
                  placeholder="Please input "
                ></TextField>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  sx={{
                    ml: "8px",
                    pt: "30px",
                    width: "100px",
                  }}
                >
                  Last name
                </Typography>
                <TextField
                  size="small"
                  sx={{
                    width: 530,
                    ml: "38px",
                    pt: "30px",
                  }}
                  placeholder="Please input "
                ></TextField>
              </Box>

              <FormControl
                size="small"
                sx={{
                  m: 1,
                  mt: 3,
                  pt: "5px",
                  display: "flex",
                  width: 630,
                  flexDirection: "row",
                }}
              >
                <Typography sx={{ width: "300px", pt: "10px" }}>
                  Main Location
                </Typography>
                <Select
                  sx={{
                    pb: "5px",
                    font: "inherit",
                    width: 960,
                    pr: 18,
                    borderRadius: "7px",
                  }}
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

              <FormControl
                size="small"
                sx={{
                  m: 1,
                  mt: 3,
                  pt: "5px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography sx={{ pr: "10px", width: "350px", pt: "10px" }}>
                  {" "}
                  Other Location{" "}
                </Typography>
                <Select
                  sx={{
                    mr: 40,
                    pb: "5px",
                    font: "inherit",
                    width: "480px",
                  }}
                  multiple
                  displayEmpty
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em>Select </em>;
                    }

                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem disabled value="">
                    <em>Select </em>
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

              <Box sx={{ display: "flex", flexDirection: "row", mt: "25px" }}>
                <Typography
                  sx={{
                    ml: "7px",
                    pt: "15px",
                    pb: "20px",
                  }}
                >
                  Mobile
                </Typography>
                <TextField
                  size="small"
                  sx={{
                    width: 500,
                    ml: "85px",
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
                    width: 530,
                    ml: "92px",
                    pt: "10px",
                  }}
                  placeholder="Please input "
                ></TextField>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography sx={{ mt: "40px", width: "350px" }}>
                  Access level{" "}
                </Typography>
                <FormControl
                  size="small"
                  sx={{
                    mt: 4,
                  }}
                >
                  <Select
                    sx={{
                      pb: "5px",
                      font: "inherit",
                      width: 500,
                      mr: 95,
                      borderRadius: "8px",
                    }}
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",

              ml: 30,
            }}
          >
            <Checkbox
              size="small"
              sx={{ mt: "23px", pr: "5px", color: "rgba(95, 91, 81, 0.518)" }}
            />
            <Typography
              sx={{ width: 400, mt: 4, color: "rgba(95, 91, 81, 0.518)" }}
            >
              {" "}
              Invite to use Maxpilot{" "}
            </Typography>
            <Button
              sx={{
                textTransform: "capitalize",
                width: 350,
                height: 30,
                mt: 4,
                borderRadius: 2,
              }}
              className="btn btn-primary"
              onClick={handleClose}
            >
              Add Team member
            </Button>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
