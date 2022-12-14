import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

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
          >
            Let's do this
          </Button>
        </Grid>
      </Box>
    </div>
  );
}
