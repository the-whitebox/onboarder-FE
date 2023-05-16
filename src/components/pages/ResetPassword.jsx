import * as React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";

const formSchema = Yup.object({
  password: Yup.string()
    .required("Please enter your password")
    .min(8, "Must be 8 characters or more")
    .matches(/[a-z]+/, "One lowercase character")
    .matches(/[A-Z]+/, "One uppercase character")
    .matches(/[@$!%*#?&]+/, "One special character")
    .matches(/\d+/, "One number"),
  confirm_password: Yup.string()
    .label("confirm password")
    .required("Please enter your confirm password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export default function SignInSide() {
  const Navigate = useNavigate();
  const url = process.env.REACT_APP_BASE_URL;
  let { uid, token } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const initialValues = {
    password: "",
    confirm_password: "",
    uid: uid,
    token: token,
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: formSchema,
      onSubmit: async (values, action) => {
        setLoading(true);
        await axios
          .post(`${url}/auth/password/reset/confirm/`, {
            new_password1: values.password,
            new_password2: values.confirm_password,
            uid: values.uid,
            token: values.token,
          })
          .then((response) => {
            toast.success(response.data.detail);
            setLoading(false);
            setSuccess(true);
          })
          .catch((error) => {
            toast.error("Something went wrong! Please try again");
            setLoading(false);
          });
      },
    });

  return (
    <Grid
      container
      sx={{
        minHeight: {
          xl: "100vh",
          lg: "100vh",
          md: "100vh",
          sm: "100vh",
          xs: "100vh",
        },
        backgroundColor: "#2BB491",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        item
        sm={4}
        md={4}
        lg={4}
        xl={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {success ? (
          <>
            <Typography sx={{ color: "white", fontSize: "25px", mb: 1 }}>
              Password successfully changed
            </Typography>
            <Button
              variant="contained"
              className="all-white-btns"
              sx={{
                color: "#2bb491",
                padding: "8px 40px",
                borderRadius: "10px",
                mt: 2,
                textTransform: "none",
              }}
              onClick={() => Navigate("/")}
            >
              Back to login
            </Button>
          </>
        ) : (
          <>
            <Typography sx={{ color: "white", fontSize: "25px", mb: 2 }}>
              Reset Password
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <input
                className="input-fields"
                placeholder="Password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <small style={{ color: "red", width: "430px" }}>
                  {errors.password}
                </small>
              ) : null}
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <input
                className="input-fields"
                placeholder="Confirm Password"
                name="confirm_password"
                type="password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirm_password && touched.confirm_password ? (
                <small style={{ color: "red" }}>
                  {errors.confirm_password}
                </small>
              ) : null}
            </Box>
            <Button
              variant="contained"
              className="all-white-btns"
              sx={{
                color: "#2bb491",
                padding: "10px 0px",
                width: "35%",
                borderRadius: "10px",
                mt: 4,
                textTransform: "none",
              }}
              onClick={handleSubmit}
            >
              {loading ? (
                <CircularProgress color="inherit" size={25} />
              ) : (
                <>Reset Password</>
              )}
            </Button>
          </>
        )}
      </Grid>
    </Grid>
  );
}
