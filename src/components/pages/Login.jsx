import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../../style/Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppleIcon from "@mui/icons-material/Apple";
import googleIcon from "../../assets/icons/google.png";
import ManWithGraphs from "../../assets/images/man-with-graphs.png";
import MaxPilotLogo from "../../assets/logos/maxpilot-logo.svg";
import { CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import Modal from "@mui/material/Modal";
import ForgetPasswordModalBody from "./ForgotPassword";
import SignupModalBody from "./Signup";
import WelcomeModalBody from "./Welcome";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

const theme = createTheme();

export default function SignInSide() {
  const url = "http://192.168.10.8:8000/api/auth/login/";
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const emailValidation = () => {
    const regEx = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (regEx.test(email)) {
      setEmailError("");
    } else if (email == "") {
      setEmailError("Email should not be empty");
    } else if (!regEx.test(email)) {
      setEmailError("Email is not valid");
    }
  };

  const passwordValidation = () => {
    const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (regExp.test(password)) {
      setPasswordError("");
    } else if (password == "") {
      setPasswordError("Password should not be empty");
    } else if (!regExp.test(password)) {
      setPasswordError("Password is not valid");
    }
  };

  const handleOnEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOnChange = (e) => {
    setPassword(e.target.value);
    // console.log(password);
  };

  const {
    register,
    formState: { errors },
  } = useForm();

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailValidation();
    passwordValidation();

    console.log("Password and Email Validation checked");

    if (passwordError === "" && emailError === "") {
      try {
        const resp = await axios
          .post(
            url,
            { username: email, password: password }
            // { auth: email, password }
          )
          .then((response) => {
            console.log("Login API was hit successfully");
            navigate("/people");
            // Navigate to Home Screen
          });
      } catch (error) {
        console.log(error.response);
      }
    }
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openSignup, setOpenSignup] = React.useState(false);
  const handleOpenSignup = () => setOpenSignup(true);
  const handleCloseSignup = () => setOpenSignup(false);

  const [openWelcome, setOpenWelcome] = React.useState(false);
  const handleOpenWelcome = () => {
    setOpenWelcome(true);
    setTimeout(() => {
      setOpenWelcome(false);
    }, 8000);
  };
  // const handleCloseWelcome = () => setOpenWelcome(false);

  return (
    <ThemeProvider theme={theme}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ForgetPasswordModalBody />
      </Modal>

      <Modal
        open={openSignup}
        onClose={handleCloseSignup}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <SignupModalBody />
      </Modal>

      <Modal
        open={openWelcome}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <WelcomeModalBody />
      </Modal>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundColor: "#38b492",
            borderTopRightRadius: "76px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid>
            <Avatar
              src={ManWithGraphs}
              aria-label="Busy Man"
              sx={{
                height: "50vh",
                width: "50vh",
              }}
            />
          </Grid>
          <Grid>
            <Typography
              sx={{
                mt: 7,
                color: "white",
              }}
            >
              Lorem Ipsum Doler sit amit
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={0} square>
          <Box
            sx={{
              mt: "247px",
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar> */}
            <Typography
              className="font-loader"
              component="h2"
              variant="h2"
              sx={{
                fontWeight: "Bold",
                mt: -12,
              }}
            >
              Hello Again!
            </Typography>
            <Box
              component="form"
              noValidate
              className="input-field-container"
              onSubmit={handleSubmit}
              sx={{
                mt: 7,
                width: "65%",
              }}
            >
              <IconTextField
                label="Email Address"
                margin="normal"
                name="email"
                type="email"
                id="email"
                autoComplete="email"
                // className={`input-email ${emailError ? "emailError" : ""}`}
                error={emailError}
                autoFocus
                iconEnd={<AlternateEmailOutlinedIcon />}
                value={email}
                {...register("Email", { required: true })}
                onChange={handleOnEmailChange}
              />
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
              <IconTextField
                label="Password"
                margin="normal"
                fullWidth
                name="password"
                type="password"
                id="password"
                className="input-password"
                error={passwordError}
                iconEnd={<LockOutlinedIcon />}
                value={password}
                // {...register("Confirmpassword", { required: true })}
                onChange={handleOnChange}
              />
              {errors.Confirmpassword?.type === "required" &&
                "confirmpassword Required"}
              <small>
                {passwordError && (
                  <div
                    style={{
                      color: "red",
                    }}
                  >
                    {passwordError}
                  </div>
                )}
              </small>
              <Grid
                item
                xs
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Link onClick={handleOpen} variant="body2" className="links">
                  Forgot password?
                </Link>
              </Grid>
              {/* <Button >Open modal</Button> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="btn-login"
                sx={{
                  mt: 6,
                  mb: 2,
                  width: "100%",
                  justifyContent: "center",
                }}
                onSubmit={handleSubmit}
              >
                Login
              </Button>
              <Grid container className="sign-in-options">
                <Grid item>
                  <Link href="#" variant="body2" className="links iconOfLink">
                    <Avatar
                      src={googleIcon}
                      aria-label="GOOGLE"
                      sx={{
                        height: "20px",
                        width: "20px",
                      }}
                    />
                    {"Sign in with Google"}
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" className="links iconOfLink">
                    <AppleIcon />
                    {"Sign in with Apple"}
                  </Link>
                </Grid>
              </Grid>
              <Grid container className="sign-up-options">
                <Grid item>
                  <Link
                    href="#"
                    variant="body2"
                    className="links-join-workspace"
                  >
                    {"Join an existing workspace"}
                  </Link>
                </Grid>
                <Grid item className="flex-row">
                  <Typography variant="body2">
                    {"Not using MaxPilot? "}
                  </Typography>
                  <Link
                    onClick={handleOpenSignup}
                    variant="body2"
                    className="links-signup "
                  >
                    {" Start your free trail"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

const IconTextField = ({ iconStart, iconEnd, InputProps, ...props }) => {
  return (
    <TextField
      {...props}
      InputProps={{
        ...InputProps,
        startAdornment: iconStart ? (
          <InputAdornment position="start">{iconStart}</InputAdornment>
        ) : null,
        endAdornment: iconEnd ? (
          <InputAdornment position="end">{iconEnd}</InputAdornment>
        ) : null,
      }}
    />
  );
};
