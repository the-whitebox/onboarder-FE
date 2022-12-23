import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import "../../style/SignUp.css";
import Link from "@mui/material/Link";
import facebookIcon from "../../assets/icons/facebook.png";
import googleIcon from "../../assets/icons/google.png";
import axios from "axios";
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

const label = { inputProps: { "aria-label": "Checkbox" } };

export default function BasicModal() {
  const url = "http://192.168.100.149:8000/api/auth/user/registration/";
  const [username, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const signUp = () => {
    console.log("Inside signUp");
    console.log(username, email, url);

    try {
      axios
        .post(url, {
          username: username,
          email: email,
        })
        .then((response) => {
          console.log("Signup API was hit succesfully");
          // Navigate to Home Screen
        });
    } catch (error) {
      console.log(error.response.data);
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
          Try UROSTERS for free
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
          onChange={(e) => setUserName(e.target.value)}
        />
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
          onChange={(e) => setEmail(e.target.value)}
        />
        <Grid
          sx={{
            display: "flex",
            direction: "row",
            alignItems: "center",
            justifyContent: "start",
            width: "65%",
          }}
        >
          <Checkbox {...label} />

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
          onClick={signUp}
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
