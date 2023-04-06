import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Checkbox } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Modal } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { TbUsers } from "react-icons/tb";
import { toast } from "react-toastify";
import LoginSidebar from "../feature/LoginSidebar";
import ForgotPassword from "./ForgotPassword";
import * as Yup from "yup";
const formSchema = Yup.object({
  username: Yup.string().required("Please enter your username"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().required("Please enter your password"),
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
      <Grid container>
        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
          <LoginSidebar handleOpen={handleOpen} />
        </Grid>
        <Grid item xl={8} lg={8} md={6} sm={12} xs={12}>
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", mt: 5, mr: 10 }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ fontSize: "12px", mr: 2 }}>
                STEP 1 | ENTER YOUR INFO
              </Typography>
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  background: "#2bb491",
                  borderRadius: "100%",
                }}
              ></Box>
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  background: "#e6f4eb",
                  borderRadius: "100%",
                  ml: 1,
                }}
              ></Box>
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  background: "#e6f4eb",
                  borderRadius: "100%",
                  ml: 1,
                }}
              ></Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              mt: { xl: 20, lg: 5, xs: 2 },
            }}
          >
            <TbUsers
              style={{
                color: "white",
                fontSize: "40px",
                background: "#2bb491",
                padding: "10px",
                borderRadius: "100%",
              }}
            />
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
                placeholder="Enter you email address"
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
              />
              <Typography sx={{ fontSize: "10px", mb: 0 }}>
                I agree to the terms of the Subscription Agreement & Privacy
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
        </Grid>
      </Grid>
    </>
  );
}
