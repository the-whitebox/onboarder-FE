import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { TbMessageCircle } from "react-icons/tb";
import { Avatar } from "@mui/material";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import MaxPilotLogo from "../../assets/images/maxpilot-logo-w.png";
import "../../style/General.css";
// import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import "../../style/PersonalDetails.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function PersonalDetails() {
  const url = process.env.REACT_APP_BASE_URL;
  const token = process.env.REACT_APP_TEMP_TOKEN;
  const [state, setState] = React.useState({ data: "" });
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [birthday, setBirthday] = useState("");

  const [error, setError] = React.useState(null);

  const [emailError, setEmailError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [pronounsError, setPronounsError] = useState("");
  const [birthdayError, setBirthdayError] = useState("");
  const [date, setDate] = React.useState("");
  console.log(date);

  const navigate = useNavigate();

  const emailValidation = () => {
    const regEx = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (regEx.test(email)) {
      setEmailError("");
    } else if (email === "") {
      setEmailError("Email should not be empty");
    } else if (!regEx.test(email)) {
      setEmailError("Email is not valid");
    }
  };

  const firstNameValidation = () => {
    if (firstName === "") {
      setFirstNameError("Please enter first name");
    } else setFirstNameError("");
  };

  const lastNameValidation = () => {
    if (lastName === "") {
      setLastNameError("Please enter last name");
    } else setLastNameError("");
  };

  const fullNameValidation = () => {
    if (fullName === "") {
      setFullNameError("Please enter full name");
    } else setFullNameError("");
  };

  const pronounsValidation = () => {
    if (pronouns === "") {
      setPronounsError("Please enter first name");
    } else setPronounsError("");
  };

  const {
    register,
    formState: { errors },
  } = useForm();

  const handleOnChange = (newValue) => {
    console.log(newValue.$d);

    // debugger;
    setBirthday(newValue.$d);
  };

  const personalDetails = (e) => {
    console.log("Inside Personal Details");
    console.log({ email }, { firstName }, { lastName });
    // debugger;
    axios
      .patch(
        url + "/people/6/",
        {
          first_name: firstName,
          last_name: lastName,
          email: email,
          is_superuser: false,
          role: 2,
          profile: {
            date_of_birth: birthday,
            pronouns: pronouns,
            full_name: fullName,
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
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Grid sx={{ display: "flex" }}>
        <Grid
          container
          component="main"
          sx={{ minHeight: "100vh", width: "240px" }}
        >
          <CssBaseline />
          <Grid
            className="max-width"
            item
            xs={false}
            sm={4}
            md={6}
            sx={{
              backgroundColor: "#38b492",
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <Grid>
              <Avatar
                src={MaxPilotLogo}
                aria-label="Busy Man"
                sx={{
                  height: "16vh",
                  width: "230px",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid>
          <Box
            sx={{
              pl: 2,
              pt: 2,
            }}
          >
            <Link href="/profile" color="#38b492">
              Back to Profile
            </Link>
          </Box>
          <Box
            sx={{
              pl: 2,
              pt: 2,
              pb: 2,
              pr: 10,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "Bold" }}>
              Personal
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#38b492",
                color: "#ffffff",
              }}
              onClick={(e) => {
                emailValidation();
                firstNameValidation();
                lastNameValidation();
                fullNameValidation();
                pronounsValidation();
                personalDetails(e);
              }}
            >
              Save
            </Button>
          </Box>
          <Box
            sx={{
              pl: 2,
              pb: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "Bold" }}>
              Asher Muneer
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Button
              className="btn-font-padding"
              variant="outlined"
              sx={{
                ml: 2,
                color: "#38b492",
                border: "1px solid #38b492",
                fontSize: 12,
              }}
            >
              Personal Details
            </Button>
            <Typography sx={{ ml: 2, fontWeight: "Bold" }}>Contact</Typography>
          </Box>
          <Box
            sx={{
              pt: 1,
              pl: 2,
              pb: 2,
            }}
          >
            <Typography variant="h6" fontSize="large" fontWeight="Bold">
              Contact
            </Typography>
          </Box>
          <Box
            sx={{
              pl: 2,
              pb: 2,
            }}
          >
            <Box className="flex flex-row ">
              <Typography
                id="modal-modal-description"
                sx={{
                  mt: 2,
                  fontSize: 14,
                  fontWeight: "Bold",
                }}
              >
                Email
              </Typography>
              <TextField
                id="outlined-basic"
                label=""
                variant="outlined"
                size="small"
                sx={{
                  width: "300px",
                  mr: 60,
                }}
                {...register("Email", { required: true })}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box sx={{ ml: 30, mt: 1 }}>
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

            <br />
            <Box className="flex flex-row ">
              <Typography
                id="modal-modal-description"
                sx={{
                  mt: 2,
                  fontSize: 14,
                  fontWeight: "Bold",
                }}
              >
                First Name
              </Typography>
              <TextField
                id="outlined-basic"
                label=""
                variant="outlined"
                size="small"
                sx={{
                  width: "300px",
                  mr: 60,
                }}
                {...register("First Name", { required: true })}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Box>
            <Box sx={{ ml: 30, mt: 1 }}>
              {errors.FirstName?.type === "required" && "First name Required"}
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
            <br />
            <Box className="flex flex-row ">
              <Typography
                id="modal-modal-description"
                sx={{
                  mt: 2,
                  fontSize: 14,
                  fontWeight: "Bold",
                }}
              >
                Last Name
              </Typography>
              <TextField
                id="outlined-basic"
                label=""
                variant="outlined"
                size="small"
                sx={{
                  width: "300px",
                  mr: 60,
                }}
                {...register("Last Name", { required: true })}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Box>
            <Box sx={{ ml: 30, mt: 1 }}>
              {errors.LastName?.type === "required" && "Last name Required"}
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
            <br />
            <Box className="flex flex-row ">
              <Typography
                id="modal-modal-description"
                sx={{
                  mr: 2,
                  mt: 2,
                  fontSize: 14,
                  fontWeight: "Bold",
                }}
              >
                Preferred Full Name
              </Typography>
              <TextField
                id="outlined-basic"
                label=""
                variant="outlined"
                size="small"
                sx={{
                  width: "300px",
                  mr: 60,
                }}
                {...register("Full Name", { required: true })}
                onChange={(e) => setFullName(e.target.value)}
              />
            </Box>
            <Box sx={{ ml: 30, mt: 1 }}>
              {errors.FullName?.type === "required" && "Full name Required"}
              <small>
                {fullNameError && (
                  <div
                    style={{
                      color: "red",
                    }}
                  >
                    {fullNameError}
                  </div>
                )}
              </small>
            </Box>
            <br />
            <Box className="flex flex-row ">
              <Typography
                id="modal-modal-description"
                sx={{
                  mt: 2,
                  fontSize: 14,
                  fontWeight: "Bold",
                }}
              >
                Pronouns
              </Typography>
              <TextField
                id="outlined-basic"
                label=""
                variant="outlined"
                size="small"
                sx={{
                  width: "300px",
                  mr: 60,
                }}
                {...register("Pronouns", { required: true })}
                onChange={(e) => setPronouns(e.target.value)}
              />
            </Box>
            <Box sx={{ ml: 30, mt: 1 }}>
              {errors.Pronouns?.type === "required" && "Pronouns Required"}
              <small>
                {pronounsError && (
                  <div
                    style={{
                      color: "red",
                    }}
                  >
                    {pronounsError}
                  </div>
                )}
              </small>
            </Box>
            <br />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography
                inline
                id="modal-modal-description"
                sx={{
                  mt: 2,
                  mr: 15,
                  fontSize: 14,
                  width: 180,
                  fontWeight: "Bold",
                }}
              >
                Date of Birth
              </Typography>
              <Box sx={{ width: 600, pl: 4 }}>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  sx={{ height: 0.1, pt: 5 }}
                >
                  <Stack spacing={3}>
                    <DatePicker
                      inputFormat="DD/MM/YYYY"
                      value={date}
                      onChange={handleOnChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Stack>
                </LocalizationProvider>
              </Box>
              {/* <Box>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
              <DatePicker label="Basic date picker" />
              </DemoContainer>
              </LocalizationProvider>


                
              </Box> */}
              <Grid
                container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "end",
                  justifyContent: "flex-end",
                }}
              >
                <Avatar
                  className="messageCircle"
                  sx={{ backgroundColor: "#38b492" }}
                >
                  <TbMessageCircle />
                </Avatar>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
