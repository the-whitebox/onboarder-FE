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
  const token = process.env.REACT_APP_TEMP_TOKEN;
  const url = process.env.REACT_APP_BASE_URL;

  console.log(props);
  axios
    .get(url + "/invitation_link/", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      // console.log(response.data.invitation_link);
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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
          role: 2,
          business: props.businessId,
          profile: {},
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
          mt: 20,
          width: 660,
          height: 930,
        }}
      >
        <Box className="flex flex-row" sx={{ width: "620px" }}>
          <h2 className="set">Add Team member</h2>
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
          <Typography sx={{ color: "green", ml: 18, pt: "5px" }}>
            How invite links work
          </Typography>
          <Box sx={{ pt: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography
                sx={{
                  ml: "2px",
                  pt: "15px",
                  width: "100px",
                }}
              >
                First name
              </Typography>
              <TextField
                name="firstname"
                size="small"
                sx={{
                  width: 530,
                  ml: "46px",
                  pt: "10px",
                  borderRadius: 20,
                }}
                placeholder="Please input"
                onChange={handleChange}
              ></TextField>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography
                sx={{
                  ml: "2px",
                  pt: "30px",
                  width: "100px",
                }}
              >
                Last name
              </Typography>
              <TextField
                name="lastname"
                size="small"
                sx={{
                  width: 530,
                  ml: "46px",
                  pt: "30px",
                }}
                placeholder="Please input "
                onChange={handleChange}
              ></TextField>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ mt: "40px", width: "350px", ml: 1 }}>
                Main Location{" "}
              </Typography>
              <FormControl
                size="small"
                sx={{
                  mt: 4,
                }}
              >
                <Select
                  name="mainLocation"
                  sx={{
                    mb: "5px",
                    font: "inherit",
                    width: 460,
                    mr: 98,
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
              </FormControl>{" "}
            </Box>

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
              <Typography sx={{ width: "400px", mt: "10px" }}>
                {" "}
                Other Location{" "}
              </Typography>
              <Select
                name="otherLocation"
                sx={{
                  mr: 32,
                  mb: "5px",
                  font: "inherit",
                  width: "620px",
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

            <Box sx={{ display: "flex", flexDirection: "row", mt: "25px" }}>
              <Typography
                sx={{
                  ml: "2px",
                  pt: "15px",
                  pb: "20px",
                }}
              >
                Mobile
              </Typography>
              <TextField
                name="mobile"
                size="small"
                sx={{
                  width: 520,
                  ml: "87px",
                  pt: "10px",
                }}
                placeholder="Please input "
                onChange={handleChange}
              ></TextField>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography
                sx={{
                  ml: "2px",
                  pt: "15px",
                }}
              >
                Email
              </Typography>
              <TextField
                name="email"
                size="small"
                sx={{
                  width: 530,
                  ml: "95px",
                  pt: "10px",
                }}
                placeholder="Please input "
                onChange={handleChange}
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
                  name="accessLevel"
                  sx={{
                    pb: "5px",
                    font: "inherit",
                    width: 460,
                    mr: 88,
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
        </div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",

            ml: 30,
          }}
        >
          <Checkbox
            name="inviteCheckbox"
            size="small"
            sx={{ mt: "23px", pr: "5px", color: "rgba(95, 91, 81, 0.518)" }}
            onChange={handleChange}
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
            className="bttn"
            onClick={handleSubmit}
          >
            Add Team member
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
}
