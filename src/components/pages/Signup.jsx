import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Modal } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import users from "../../assets/icons/users.png";
import bg_image1 from "../../assets/images/bg-image1.png";
import { toast } from "react-toastify";
import LoginSidebar from "../feature/LoginSidebar";
import ForgotPassword from "./ForgotPassword";
import * as Yup from "yup";
const formSchema = Yup.object({
  username: Yup.string().required("Please enter your username"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().required("Please enter your password"),
  // password: Yup.string()
  //   .required("Please enter your password")
  //   .matches(
  //     "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
  //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  //   ),
  check: Yup.boolean().oneOf(
    [true],
    "Please accept the terms and privacy policy before get started!"
  ),
});
const initialValues = {
  username: "",
  email: "",
  password: "",
  check: false,
};

export default function Signup() {
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
            password: values.password,
          })
          .then((response) => {
            toast.success("Please check your email for verification.");
            Navigate(`/step2/${values.email}`);
            setLoading(false);
            action.resetForm();
          })
          .catch((error) => {
            setLoading(false);
            toast.error(error.response.data.data);
          });
      },
    });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ForgotPassword handleClose={handleClose} />
      </Modal>
      <Grid container sx={{ pb: { xs: 5, md: 0 } }}>
        <Grid item xl={3} lg={3} md={4} sm={12} xs={12}>
          <LoginSidebar handleOpen={handleOpen} />
        </Grid>
        <Grid
          item
          xl={9}
          lg={9}
          md={8}
          sm={12}
          xs={12}
          sx={{
            position: "relative",
            // height: { md: "auto", sm: "70vh", xs: "80vh" },
            minHeight: "100vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: { md: "flex-end", xs: "center" },
              mt: 5,
              mr: { md: 10, xs: 0 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ fontSize: "12px", mr: 2 }}>
                STEP 1 | enter your info
              </Typography>
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  background: "#2bb491",
                  borderRadius: "100%",
                }}
              />
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  background: "#e6f4eb",
                  borderRadius: "100%",
                  ml: 1,
                }}
              />
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  background: "#e6f4eb",
                  borderRadius: "100%",
                  ml: 1,
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              mt: { xl: 28, lg: 5, xs: 5 },
            }}
          >
            <Box
              sx={{
                width: "50px",
                height: "50px",
                background: "#2bb491",
                padding: "10px",
                borderRadius: "100%",
              }}
            >
              <Avatar
                src={users}
                aria-label="Busy Man"
                sx={{
                  width: "50px",
                  height: "50px",
                  padding: "0px",
                  margin: "0px",
                  borderRadius: 0,
                  mb: { xs: 0, xl: 2 },
                }}
              />
            </Box>
            <Typography sx={{ fontWeight: "bold", mt: 1 }}>
              Create New Sign in ID
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <input
                className="input-fields-2"
                placeholder="User Name"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.username && touched.username ? (
                <small style={{ color: "red" }}>{errors.username}</small>
              ) : null}
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <input
                className="input-fields-2"
                placeholder="Enter your email address"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <small style={{ color: "red" }}>{errors.email}</small>
              ) : null}
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <input
                className="input-fields-2"
                placeholder="Create password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <small style={{ color: "red" }}>{errors.password}</small>
              ) : null}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                size="small"
                name="check"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.check}
                sx={{
                  "&.Mui-checked": {
                    color: "#2BB491",
                  },
                }}
              />
              <Typography sx={{ fontSize: "10px", mb: 0 }}>
                I agree to the terms of the subscription agreement & Privacy
                Policy
              </Typography>
            </Box>
            {errors.check && touched.check ? (
              <small style={{ color: "red", fontSize: "12px" }}>
                {errors.check}
              </small>
            ) : null}
            <Button
              variant="contained"
              className="all-green-btns"
              sx={{
                color: "white",
                padding: "8px 40px",
                borderRadius: "10px",
                mt: 2,
                textTransform: "none",
              }}
              onClick={handleSubmit}
            >
              {loading ? (
                <CircularProgress color="inherit" size={25} />
              ) : (
                <>Next</>
              )}
            </Button>
          </Box>
          <Box>
            <Typography
              sx={{
                width: "100%",
                fontSize: { md: "10px", xs: "5px" },
                textAlign: "center",
                zIndex: 9999,
                position: "absolute",
                bottom: 0,
                paddding: "0px 10px",
              }}
            >
              Your MAXpilot information is used to allow you to sign in securely
              and access your data. We take your privacy seriously.
              <br /> Any information you provide on this page will be used
              solely for the purpose of authentication and will be kept
              confidential. We do not share your information with third parties.
              <br />
              For more information on our privacy policy, please visit our
              website.
            </Typography>
            <Avatar
              src={bg_image1}
              aria-label="Busy Man"
              sx={{
                width: { xl: "400px", md: "250px", xs: "200px" },
                height: "auto",
                padding: "0px",
                margin: "0px",
                borderRadius: 0,
                position: "absolute",
                bottom: "1px",
                right: "0",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
