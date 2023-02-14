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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  // const [mainLocation, setMainLocation] = useState("");
  // const [mainLocationError, setMainLocationError] = useState("");
  // const [otherLocation, setOtherLocation] = useState("");
  // const [otherLocationError, setOtherLocationError] = useState("");
  const [mobile, setMobile] = React.useState("");
  const [mobileError, setMobileError] = React.useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [accessLevel, setAccessLevel] = useState("");
  const [accessLevelError, setAccessLevelError] = useState("");

  const navigate = useNavigate();

  const firstNameValidation = () => {
    if (firstName == "") {
      setFirstNameError("Please enter first name");
    } else setFirstNameError("");
  };

  const lastNameValidation = () => {
    if (lastName == "") {
      setLastNameError("Please enter last name");
    } else setLastNameError("");
  };

  // const mainLocationValidation = () => {
  //   if (mainLocation == "") {
  //     setMainLocationError("Please enter the location");
  //   } else setMainLocationError("");
  // };

  // const otherLocationValidation = () => {
  //   if (otherLocation == "") {
  //     setOtherLocationError("Please enter the location");
  //   } else setOtherLocationError("");
  // };

  const mobileValidation = () => {
    if (mobile == "") {
      setMobileError("Please enter your mobile number");
    } else setMobileError("");
  };

  // const emailValidation = () => {
  //   const regEx = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  //   if (regEx.test(email)) {
  //     setEmailError("");
  //   } else if (email === "") {
  //     setEmailError("Email should not be empty");
  //   } else if (!regEx.test(email)) {
  //     setEmailError("Email is not valid");
  //   }
  // };

  const accessLevelValidation = () => {
    if (accessLevel == "") {
      setAccessLevelError("Access level required");
    } else setAccessLevelError("");
  };

  const handleOnChange = (e) => {
    setFirstName(e.target.value);
    setLastName(e.target.value);
    // setMainLocation(e.target.value);
    // setOtherLocation(e.target.value);
    setMobile(e.target.value);
    setEmail(e.target.value);
    setAccessLevel(e.target.value);
    console.log(firstName);
  };

  const handleSubmit = (event) => {
    console.log("Submit");

    event.preventDefault();
    console.log("Inside submit");
    firstNameValidation();
    console.log("First Name Validation checked");
    lastNameValidation();
    console.log("Last Name Validation checked");
    // mainLocationValidation();
    // otherLocationValidation();
    mobileValidation();
    console.log("Mobile Validation checked");

    // emailValidation();
    // console.log("Email Validation checked");

    accessLevelValidation();
    console.log("Access Validation checked");

    if (
      firstNameError === "" &&
      lastNameError === "" &&
      // mainLocationError === "" &&
      // otherLocationError === "" &&
      mobileError === "" &&
      // emailError === "" &&
      accessLevelError === ""
    ) {
      try {
        const resp = axios
          .post(url, {
            first_name: firstName,
            last_name: lastName,
            mobile: mobile,
            email: email,
            accessLevel: accessLevel,
          })
          .then((response) => {
            console.log("People API was hit successfully");
            navigate("/people");
          });
      } catch (error) {
        console.log(error.response);
      }
    }
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

  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <React.Fragment>
      <Box
        sx={{
          ...style,
          mt: 20,
          width: 660,
          height: "auto",
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
                {...register("First Name", { required: true })}
                onChange={handleOnChange}
              ></TextField>
            </Box>
            <Box sx={{ ml: 17, mt: 1 }}>
              {errors.FirstName?.type === "required" && "Firstname Required"}
              <small>
                {firstNameError && (
                  <div
                    style={{
                      color: "red",
                    }}
                  >
                    {firstNameError}
                  </div>
                )}
              </small>
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
                {...register("Last Name", { required: true })}
                onChange={handleOnChange}
              ></TextField>
            </Box>
            <Box sx={{ ml: 17, mt: 1 }}>
              {errors.FirstName?.type === "required" && "Firstname Required"}
              <small>
                {lastNameError && (
                  <div
                    style={{
                      color: "red",
                    }}
                  >
                    {lastNameError}
                  </div>
                )}
              </small>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ mt: "40px", width: "350px", ml: 1 }}>
                Main Location
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
                  // {...register("Main Location", { required: true })}
                  // onChange={handleOnChange}
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
              </FormControl>
            </Box>
            {/* <Box sx={{ ml: 17, mt: 1 }}>
              {errors.MainLocation?.type === "required" &&
                "Main Location Required"}
              <small>
                {mainLocationError && (
                  <div
                    style={{
                      color: "red",
                    }}
                  >
                    {mainLocationError}
                  </div>
                )}
              </small>
            </Box> */}
            <Box>
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
                  Other Location
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
                  // {...register("Other Location", { required: true })}
                  // onChange={handleOnChange}
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
            </Box>
            {/* <Box sx={{ ml: 17, mt: 1 }}>
              {errors.OtherLocation?.type === "required" &&
                "Other Location Required"}
              <small>
                {otherLocationError && (
                  <div
                    style={{
                      color: "red",
                    }}
                  >
                    {otherLocationError}
                  </div>
                )}
              </small>
            </Box> */}
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
                {...register("Mobile", { required: true })}
                on
              ></TextField>
            </Box>
            <Box sx={{ ml: 17 }}>
              {errors.Mobile?.type === "required" && "Mobile Number Required"}
              <small>
                {mobileError && (
                  <div
                    style={{
                      color: "red",
                    }}
                  >
                    {mobileError}
                  </div>
                )}
              </small>
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
                // {...register("Email", { required: true })}
                // onChange={handleOnChange}
              ></TextField>
            </Box>
            <Box sx={{ ml: 17, mt: 1 }}>
              {errors.Email?.type === "required" && "Email Required"}
              <small>
                {emailError && (
                  <div
                    style={{
                      color: "red",
                    }}
                  >
                    {emailError}
                  </div>
                )}
              </small>
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
                  {...register("Access Level", { required: true })}
                  onChange={handleOnChange}
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
            <Box sx={{ ml: 17, mt: 1 }}>
              {errors.AccessLevel?.type === "required" &&
                "Access Level Required"}
              <small>
                {accessLevelError && (
                  <div
                    style={{
                      color: "red",
                    }}
                  >
                    {accessLevelError}
                  </div>
                )}
              </small>
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
            Invite to use Maxpilot
          </Typography>
          <Button
            sx={{
              textTransform: "capitalize",
              width: 350,
              height: 30,
              mt: 4,
              borderRadius: 2,
            }}
            // className="bttn"
            onClick={handleSubmit}
          >
            Add Team member
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
}
