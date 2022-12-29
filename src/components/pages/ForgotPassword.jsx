import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const style = {
  position: "absolute",
  top: "25%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  bgcolor: "background.paper",
  borderRadius: "6px",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();
  const sendEmail = () => {
    // console.log(email);
    axios
      .post("http://192.168.100.149:8000/api/auth/password/reset/", {
        email: email,
      })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          console.log("I am inside status 200 condition");
          navigate("/home");
        }
      });
  };

  return (
    <div>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h5" component="h2">
          So you forgot your password?
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{
            mt: 2,
            fontSize: 14,
          }}
        >
          Alright, pop in your email address and we'll send you a link to reset
          your password.
        </Typography>

        <TextField
          sx={{
            width: "100%",
            mt: 3,
          }}
          id="emailForForgotPwd"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Grid
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            className="btn-forgetPwd btn-login"
            sx={{
              mt: 4,
              width: "30%",
              justifyContent: "center",
            }}
            onClick={sendEmail}
          >
            Let's do this
          </Button>
        </Grid>
      </Box>
    </div>
  );
}
