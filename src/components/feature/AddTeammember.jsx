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
import { useForm } from "react-hook-form";

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
const access = [
  "System Administrator",
  "Supervisior ",
  "Employee",
  "Location Manage",
  "Advisor",
];
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
  const url = process.env.REACT_APP_BASE_URL + "/people/";
  const [state, setState] = React.useState({ data: "" });
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  // const [location, setLocattion] = React.useState("");
  // const [otherLocation, setOtherLocattion] = React.useState("");
  // const [mobile, setMobile] = React.useState("");
  // const [email, setEmail] = React.useState("");
  // // const [access, setAccess] = React.useState("");
  const [error, setError] = React.useState(null);

  const [firstNameError, setFirstNameError] = React.useState("");
  const [lastNameError, setLastNameError] = React.useState("");
  // const [locationError, setLocationError] = React.useState("");
  // const [otherLocationError, setOtherLocationError] = React.useState("");
  // const [mobileError, setMobileError] = React.useState("");
  // const [emailError, setEmailError] = React.useState("");
  // const [accessError, setAccessError] = React.useState("");

  const firstNameValidation = () => {
    if (firstName === "") {
      setFirstNameError("What process you prefer?");
    } else setFirstNameError("");
  };

  const lastNameValidation = () => {
    if (lastName === "") {
      setLastNameError("What process you prefer?");
    } else setLastNameError("");
  };

  const handleOnChange = (e) => {
    setFirstName(e.target.value);
  };

  const {
    register,
    formState: { errors },
  } = useForm();

  // const locationValidation = () => {
  //   if (location === "") {
  //     setLocationError("What process you prefer?");
  //   } else setLocationError("");
  // };

  // const otherLocationValidation = () => {
  //   if (otherLocation === "") {
  //     setOtherLocationError("What process you prefer?");
  //   } else setOtherLocationError("");
  // };

  // const mobileValidation = () => {
  //   if (mobile === "") {
  //     setMobileError("What process you prefer?");
  //   } else setMobileError("");
  // };

  // const emailValidation = () => {
  //   if (email === "") {
  //     setEmailError("What process you prefer?");
  //   } else setEmailError("");
  // };

  // const accessValidation = () => {
  //   if (access === "") {
  //     setAccessError("What process you prefer?");
  //   } else setAccessError("");
  // };

  const createNewTeamMember = (e) => {
    console.log("Inside createTeamMember");
    // console.log(

    //   firstName,
    //   lastName,
    //   location,
    //   otherLocation,
    //   mobile,
    //   email,
    //   access
    // );
    // if (
    //   firstName !== "" &&
    //   lastName !== "" &&
    //   location !== "" &&
    //   otherLocation !== "" &&
    //   mobile !== "" &&
    //   email !== "" &&
    //   access !== ""
    // ) {
    //   console.log("Data Found");
    //   setError(false);
    //   console.log(
    //     firstName,
    //     lastName,
    //     location,
    //     otherLocation,
    //     mobile,
    //     email,
    //     access
    //   );
    try {
      console.log("Inside try statement");
      axios
        .post(url, {
          first_name: firstName,
          last_name: lastName,
        })
        .then((response) => {
          console.log("People API was hit successfully");
          console.log(response);
          debugger;

          // Navigate to Home Screen
        });
    } catch (error) {
      console.log(error.response.data);
    }

    // console.log(firstName, lastName, email, access);
    // alert(firstName + lastName + email, access);
    // } else {
    //   setError(true);
    //   setState({ data: e.target.value });
    // }
  };

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
          <CloseIcon
            onClick={handleClose}
            sx={{ ml: "10px", mb: 4 }}
          ></CloseIcon>
        </Box>
        <Grid sx={{ display: "flex", flexDirection: "row", pt: "20px" }}>
          <Avatar
            src={Capture}
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
              Invite with a unique link
            </Typography>
            <Typography sx={{ mt: "20px" }}>
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
                ml: 18,
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
                size="small"
                sx={{
                  width: 530,
                  ml: "46px",
                  pt: "10px",
                  borderRadius: 20,
                }}
                placeholder="Please input"
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
                size="small"
                sx={{
                  width: 530,
                  ml: "46px",
                  pt: "30px",
                }}
                placeholder="Please input "
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
                  sx={{
                    mb: "5px",
                    font: "inherit",
                    width: 460,
                    mr: 98,
                    borderRadius: "8px",
                  }}
                  multiple
                  displayEmpty
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em>Location</em>;
                    }

                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem disabled value=""></MenuItem>
                  <em>location </em>
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
                sx={{
                  mr: 32,
                  mb: "5px",
                  font: "inherit",
                  width: "620px",
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
                  ml: "2px",
                  pt: "15px",
                  pb: "20px",
                }}
              >
                Mobile
              </Typography>
              <TextField
                size="small"
                sx={{
                  width: 520,
                  ml: "87px",
                  pt: "10px",
                }}
                placeholder="Please input "
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
                size="small"
                sx={{
                  width: 530,
                  ml: "95px",
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
                    width: 460,
                    mr: 88,
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
                  <MenuItem disabled value=""></MenuItem>
                  {access.map((name) => (
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
            className="bttn"
          >
            Add Team member
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
}
