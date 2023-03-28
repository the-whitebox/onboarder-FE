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
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
const LoginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().required("Please enter your password"),
});
const initialValues = {
  email: "",
  password: "",
};

const theme = createTheme();

export default function SignInSide() {
  const navigate = useNavigate();
  const url = process.env.REACT_APP_BASE_URL + "/auth/login/";
  const [loading, setLoading] = useState(false);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: LoginSchema,
      onSubmit: async (values, action) => {
        setLoading(true);
        await axios
          .post(url, { username: values.email, password: values.password })
          .then((response) => {
            if (response.status === 200) {
              // console.log("Login Response", response);
              toast.success("You have successfully LoggedIn!");
              localStorage.setItem("token", response.data.access_token);
              localStorage.setItem("userId", response.data.user.pk);
              // navigate("/people");
              window.location.href = "/people";
              setLoading(false);
              action.resetForm();
            }
          })
          .catch((error) => {
            // console.log("Login Error", error.response);
            toast.error(error.response.data.non_field_errors[0]);
            setLoading(false);
          });
      },
    });

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
      <Grid
        container
        component="main"
        sx={{
          height: "100vh",
          width: {
            xs: 600,
            sm: 700,
            md: 900,
            lg: 1300,
            xl: 1600,
          },
        }}
      >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          lg={6}
          sx={{
            backgroundColor: "#38b492",
            borderTopRightRadius: "76px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",

          }}
        >
          {/* login image man with graph */}
          <Grid 
          item sm={12} xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            
          }}
          >
            {/* Login Avatar Made Responsive */}
            <Avatar
              src={ManWithGraphs}
              aria-label="Busy Man"
              sx={{
                width: "100%",
                height: "auto",
                padding: '0px',
                margin: '0px',
            
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
              mt: "210px",
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
                mb: 0,
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
                autoFocus
                iconEnd={<AlternateEmailOutlinedIcon />}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <small style={{ color: "red" }}>{errors.email}</small>
              ) : null}
              <IconTextField
                label="Password"
                margin="normal"
                fullWidth
                name="password"
                type="password"
                id="password"
                className="input-password"
                iconEnd={<LockOutlinedIcon />}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <small style={{ color: "red" }}>{errors.password}</small>
              ) : null}
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
              {/* <Button>Open modal</Button> */}
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
                {loading ? (
                  <CircularProgress color="inherit" size={25} />
                ) : (
                  <>Login</>
                )}
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
                    className="links-signup"
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
