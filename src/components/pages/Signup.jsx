import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import { FormControlLabel, Checkbox } from "@mui/material";
import Link from "@mui/material/Link";
import facebookIcon from "../../assets/icons/facebook.png";
import googleIcon from "../../assets/icons/google.png";
import { useNavigate } from "react-router-dom";
import "../../style/SignUp.css";
import { useFormik } from "formik";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import * as Yup from "yup";
import { toast } from "react-toastify";
const formSchema = Yup.object({
  username: Yup.string().required("Please enter your username"),
  email: Yup.string().email().required("Please enter your email"),
  check: Yup.boolean().oneOf(
    [true],
    "Please accept the terms and privacy policy before get started!"
  ),
});
const initialValues = {
  username: "",
  email: "",
  check: false,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: "23px",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const Navigate = useNavigate();
  const url = process.env.REACT_APP_BASE_URL;
  const [loading, setLoading] = React.useState(false);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: formSchema,
      onSubmit: async (values, action) => {
        setLoading(true);
        await axios
          .post(`${url}/auth/user/registration/`, {
            username: values.username,
            email: values.email,
          })
          .then((response) => {
            console.log("response", response);
            toast.success("You have successfully Registered!");
            // localStorage.setItem("token", response.data.access_token);
            // localStorage.setItem("userId", response.data.user.pk);
            Navigate("/step1");
            setLoading(false);
            action.resetForm();
          })
          .catch((error) => {
            toast.error(error.response.data.data);
            setLoading(false);
          });
      },
    });

  return (
    <>
      <Box
        sx={{
          ...style,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
            mt: 1,
            fontSize: 14,
          }}
        >
          Get started in minutes, no credit card required
        </Typography>
        <Box
          sx={{
            width: "100%",
            mt: 3,
          }}
        >
          <TextField
            sx={{
              width: "100%",
            }}
            label="Name"
            variant="outlined"
            name="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.username && touched.username ? (
            <small style={{ color: "red" }}>{errors.username}</small>
          ) : null}
          <TextField
            sx={{
              width: "100%",
              mt: 2,
              borderRadius: "50px",
            }}
            label="Work Email"
            variant="outlined"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <small style={{ color: "red" }}>{errors.email}</small>
          ) : null}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  name="check"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.check}
                  size="small"
                />
              }
            />
            <Typography
              sx={{
                fontSize: "9px",
                ml: "-20px",
                mt: "2px",
              }}
            >
              I agree to the terms of the Subscription Agreement & Privacy
              Policy
            </Typography>
          </Box>
          <Box sx={{ mt: "-10px" }}>
            {errors.check && touched.check ? (
              <small style={{ color: "red" }}>{errors.check}</small>
            ) : null}
          </Box>
        </Box>

        <Button
          type="submit"
          variant="contained"
          className="all-green-btns"
          onClick={handleSubmit}
          sx={{
            mt: 2,
            width: "100%",
          }}
        >
          {loading ? (
            <CircularProgress color="inherit" size={25} />
          ) : (
            <>Get Started</>
          )}
        </Button>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 3,
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
            }}
          >
            OR SIGN UP WITH
          </Typography>
          <Box sx={{ display: "flex", mt: 2 }}>
            <Link
              variant="body2"
              sx={{
                display: "flex",
                alignItems: "center",
                mr: 2,
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              <Avatar
                src={googleIcon}
                aria-label="GOOGLE"
                sx={{
                  height: "20px",
                  width: "20px",
                  ml: "5px",
                }}
              />
              <Typography
                sx={{
                  ml: "5px",
                  fontSize: "12px",
                  color: "black",
                }}
              >
                {"GOOGLE"}
              </Typography>
            </Link>
            <Link
              variant="body2"
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              <Avatar
                src={facebookIcon}
                aria-label="FACEBOOK"
                sx={{
                  height: "20px",
                  width: "20px",
                }}
              />
              <Typography
                sx={{
                  ml: "5px",
                  fontSize: "12px",
                  color: "black",
                }}
              >
                {"FACEBOOK"}
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}
