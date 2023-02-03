import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { FormControlLabel, Checkbox } from "@mui/material";
import "../../style/SignUp.css";
import Link from "@mui/material/Link";
import facebookIcon from "../../assets/icons/facebook.png";
import googleIcon from "../../assets/icons/google.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import "lora";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  bgcolor: "background.paper",
  borderRadius: "23px",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [state, setState] = React.useState({ data: "" });
  const [username, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState(null);
  const [userNameError, setUserNameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

  const [checked, setChecked] = React.useState(false);
  console.log({ checked });

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const usernameValidation = () => {
    if (username === "") {
      setUserNameError("Please enter a User name");
    } else setUserNameError("");
  };

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

  const {
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const toStep1 = (e) => {
    if (username !== "" && email !== "") {
      console.log("Data Found");
      setError(false);
      console.log(username, email);
      // alert(mobile + business + businesstype + industry);

      navigate("/step1", {
        state: {
          username: username,
          email: email,
        },
      });
    } else {
      setError(true);
      setState({ data: e.target.value });
    }
  };

  return (
    <div>
      <Box sx={style} className="signUpBox">
        <Typography
          id="modal-modal-title"
          variant="h4"
          component="h2"
          className="uproster-font"
        >
          Try MaxPilot for free
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{
            mt: 2,
            fontSize: 14,
          }}
        >
          Get started in minutes, no credit card required
        </Typography>
        <TextField
          sx={{
            width: "100%",
            mt: 3,
          }}
          id="nameForSignup"
          label="Name"
          variant="outlined"
          className="signup-text-field"
          value={username}
          {...register("Username", { required: true })}
          onChange={(e) => setUserName(e.target.value)}
        />
        {errors.username?.type === "required" && "Username Required"}
        <small>
          {userNameError && (
            <div
              style={{
                color: "red",
              }}
            >
              {userNameError}
            </div>
          )}
        </small>
        <TextField
          sx={{
            width: "100%",
            mt: 2,
          }}
          id="emailForSignup"
          label="Work Email"
          variant="outlined"
          className="signup-text-field"
          value={email}
          {...register("Email", { required: true })}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email?.type === "required" && "Email Required"}
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
        <Grid
          sx={{
            display: "flex",
            direction: "row",
            alignItems: "center",
            justifyContent: "start",
            width: "65%",
          }}
        >
          <FormControlLabel
            control={<Checkbox checked={checked} onChange={handleChange} />}
          />

          <Typography
            sx={{
              fontSize: "9px",
            }}
          >
            I agree to the terms of the Subscription Agreement & Privacy Policy
          </Typography>
        </Grid>

        <Button
          type="submit"
          variant="contained"
          className="btn-forgetPwd btn-login"
          onClick={() => {
            usernameValidation();
            emailValidation();
            toStep1();
          }}
          sx={{
            mt: 4,
            width: "65%",
            justifyContent: "center",
          }}
        >
          Get Started
        </Button>
        <Grid container className="SignUp-options">
          <Typography
            sx={{
              fontSize: "9px",
            }}
          >
            OR SIGN UP WITH
          </Typography>
          <Grid item>
            <Link
              href="#"
              variant="body2"
              className="SignUplinks iconOfSignUpLink"
            >
              <Avatar
                src={googleIcon}
                aria-label="GOOGLE"
                sx={{
                  height: "15px",
                  width: "15px",
                }}
              />
              {"GOOGLE"}
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="#"
              variant="body2"
              className="SignUplinks iconOfSignUpLink"
            >
              <Avatar
                src={facebookIcon}
                aria-label="FACEBOOK"
                sx={{
                  height: "15px",
                  width: "15px",
                }}
              />
              {"FACEBOOK"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
