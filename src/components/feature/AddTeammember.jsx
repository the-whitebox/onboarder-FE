import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useTheme } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";
import Capture from "../../assets/images/Capture.png";
import "../../style/Addteam.css";
import axios from "axios";

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

const names = ["Location 1", "Location 2"];
const access = [
  "System Administrator",
  "Supervisor ",
  "Employee",
  "Location Manager",
  "Advisor",
];
const style = {
  position: "absolute",
  top: "38%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "8px ",
  boxShadow: 24,
  pt: 0,
  px: 4,
  pb: 3,
};

export default function Addteammember(props) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [mainLocation, setMainLocation] = React.useState([]);
  const [otherLocation, setOtherLocation] = React.useState([]);
  const [employeeType, setEmployeeType] = React.useState([]);
  const [inputs, setInputs] = React.useState([]);
  const [inviteLink, setInviteLink] = React.useState("");
  const token = localStorage.getItem("token");
  const url = process.env.REACT_APP_BASE_URL;

  axios
    .get(url + "/invitation_link/", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      // console.log("-----", response.data.invitation_link);
      setInviteLink(response.data.invitation_link);
    })
    .catch((error) => {
      console.error(error);
    });

  const handleMainLocation = (event) => {
    setMainLocation(event.target.value);
  };
  const handleOtherLocation = (event) => {
    setOtherLocation(event.target.value);
  };
  const handleEmployeeType = (event) => {
    setEmployeeType(event.target.value);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      { inputs },
      { mainLocation },
      { otherLocation },
      { employeeType }
    );
    axios
      .post(
        url + "/people/",
        {
          first_name: inputs.firstname,
          last_name: inputs.lastname,
          is_superuser: false,
          email: inputs.email,
          role: employeeType,
          business: props.businessId,
          profile: {
            phone_number: inputs.phoneNumber,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
        props.getBusiness();
        props.handleClose();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          ...style,
          mt: 15,
          width: 660,
          height: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 className="set">Add Team member</h2>
          <CloseIcon
            onClick={props.handleClose}
            sx={{ cursor: "pointer" }}
          ></CloseIcon>
        </Box>
        <Grid sx={{ display: "flex", flexDirection: "row", pt: "20px" }}>
          <Avatar
            src={Capture}
            sx={{
              height: "150px",
              width: "150px",
            }}
            variant="rounded"
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
              Invite with a unique link
            </Typography>
            <Typography sx={{ mt: "20px" }}>
              Don't know your team's email addresses? Share the unique link
              below to get your team onto your uRoaster workplace faster. To
              keep things secured, you will need to approve each request.{" "}
            </Typography>
          </Box>
        </Grid>

        <Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <TextField
              size="small"
              disabled
              sx={{
                mt: "10px",
                width: 350,
                ml: 18,
              }}
              value={inviteLink}
            >
              {inviteLink}
            </TextField>
            <Button
              className="all-green-btns"
              variant="contained"
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
          <Typography style={{ color: "#38b492" }} sx={{ ml: 18, pt: "5px" }}>
            How invite links work
          </Typography>
          <Box sx={{ pt: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <Typography sx={{ width: 140 }}>First name</Typography>
              <TextField
                name="firstname"
                size="small"
                sx={{
                  font: "inherit",
                  width: 450,
                  borderRadius: "8px",
                }}
                placeholder="Please input"
                onChange={handleChange}
              ></TextField>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <Typography sx={{ width: 140 }}>Last name</Typography>
              <TextField
                name="lastname"
                size="small"
                sx={{
                  font: "inherit",
                  width: 450,
                  borderRadius: "8px",
                }}
                placeholder="Please input "
                onChange={handleChange}
              ></TextField>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <Typography sx={{ width: 140 }}>Main Location</Typography>
              <FormControl size="small">
                <Select
                  name="mainLocation"
                  sx={{
                    font: "inherit",
                    width: 450,
                    borderRadius: "8px",
                  }}
                  displayEmpty
                  label="Location"
                  value={mainLocation}
                  onChange={handleMainLocation}
                  input={<OutlinedInput />}
                  MenuProps={MenuProps}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem disabled value=""></MenuItem>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {names.map((name, idx) => (
                    <MenuItem
                      key={name}
                      value={idx}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <Typography sx={{ width: 140 }}>Other Location</Typography>
              <FormControl size="small">
                <Select
                  name="otherLocation"
                  sx={{
                    font: "inherit",
                    width: 300,
                    borderRadius: "8px",
                  }}
                  displayEmpty
                  value={otherLocation}
                  onChange={handleOtherLocation}
                  label="Other Location"
                  input={<OutlinedInput />}
                  MenuProps={MenuProps}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {names.map((name, idx) => (
                    <MenuItem
                      key={name}
                      value={idx}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <Typography sx={{ width: 140 }}>Mobile</Typography>
              <FormControl size="small">
                <TextField
                  name="mobile"
                  size="small"
                  sx={{
                    font: "inherit",
                    width: 450,
                    borderRadius: "8px",
                  }}
                  placeholder="Please input "
                  onChange={handleChange}
                ></TextField>
              </FormControl>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <Typography sx={{ width: 140 }}>Email</Typography>
              <FormControl size="small">
                <TextField
                  name="email"
                  size="small"
                  sx={{
                    font: "inherit",
                    width: 450,
                    borderRadius: "8px",
                  }}
                  placeholder="Please input "
                  onChange={handleChange}
                ></TextField>
              </FormControl>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <Typography sx={{ width: 140 }}>Access level</Typography>
              <FormControl size="small">
                <Select
                  name="accessLevel"
                  sx={{
                    font: "inherit",
                    width: 450,
                    borderRadius: "8px",
                  }}
                  displayEmpty
                  value={employeeType}
                  onChange={handleEmployeeType}
                  input={<OutlinedInput />}
                  label="Employee type"
                  MenuProps={MenuProps}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem disabled value=""></MenuItem>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {access.map((name, idx) => (
                    <MenuItem
                      key={name}
                      value={idx}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mr: 2,
              mt: 4,
            }}
          >
            <Checkbox
              name="inviteCheckbox"
              size="small"
              sx={{ pr: "5px", color: "rgba(95, 91, 81, 0.518)" }}
              onChange={handleChange}
            />
            <Typography sx={{ color: "rgba(95, 91, 81, 0.518)" }}>
              Invite to use Maxpilot
            </Typography>
          </Box>
          <Button
            sx={{
              textTransform: "capitalize",
              width: 180,
              height: 35,
              mt: 4,
              borderRadius: 2,
            }}
            className="all-green-btns"
            variant="contained"
            onClick={handleSubmit}
          >
            Add Team member
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
}
