import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CircularProgress from "@mui/material/CircularProgress";
import maxpilot from "../../assets/logos/logo.png";
import GlobalContext from "../../context/GlobalContext";
import { useNavigate, Link } from "react-router-dom";
import users from "../../assets/icons/users.png";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";

const LoginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().required("Please enter your password"),
});
const initialValues = {
  email: "",
  password: "",
};

export default function SignInSide() {
  const { setUserInfo } = React.useContext(GlobalContext);
  const Navigate = useNavigate();
  const url = process.env.REACT_APP_BASE_URL;
  const [loading, setLoading] = React.useState(false);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: LoginSchema,
      onSubmit: async (values, action) => {
        setLoading(true);
        await axios
          .post(`${url}/auth/login/`, {
            username: values.email,
            password: values.password,
          })
          .then((response) => {
            if (response.status === 200) {
              // console.log("Login Response", response);
              toast.success("You have successfully LoggedIn!");
              localStorage.setItem("token", response.data.access_token);
              localStorage.setItem("userId", response.data.user.pk);
              getLoggedInUserDetails(
                response.data.user.pk,
                response.data.access_token
              );
              Navigate("/people");
              setLoading(false);
              action.resetForm();
            }
          })
          .catch((error) => {
            console.log(error);
            toast.error("Something went wrong! Please try again");
            setLoading(false);
          });
      },
    });

  const getLoggedInUserDetails = async (id, token) => {
    await axios
      .get(`${url}/people/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((error) => console.log("Error", error));
  };

  return (
    <Grid
      container
      sx={{
        height: {
          xl: "100vh",
          lg: "100vh",
          md: "100vh",
          sm: "100vh",
          xs: "100vh",
        },
        backgroundColor: "#2bb491",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          pt: { xl: 15, lg: 2, xs: 2 },
          pb: { xl: 4, lg: 2, xs: 2 },
        }}
        xs={12}
        sm={12}
        md={6}
        lg={4}
        xl={4}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            src={maxpilot}
            aria-label="Busy Man"
            sx={{
              width: "auto",
              height: "auto",
              padding: "0px",
              margin: "0px",
              mr: 2,
              borderRadius: 0,
            }}
          />
          <Box sx={{ background: "white", width: "1px", height: "60px" }}></Box>
          <Typography sx={{ color: "white", ml: 2 }}>
            Effortless Time Management
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar
            src={users}
            aria-label="Busy Man"
            sx={{
              width: "60px",
              height: "60px",
              padding: "0px",
              margin: "0px",
              borderRadius: 0,
              mb: 2,
              mt: 1,
            }}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <input
              className="input-fields"
              placeholder="Enter your email address"
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <small style={{ color: "#FF0000" }}>{errors.email}</small>
            ) : null}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <input
              className="input-fields"
              placeholder="Please enter your password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <small style={{ color: "#FF0000" }}>{errors.password}</small>
            ) : null}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "white",
              mt: 2,
            }}
          >
            <Checkbox sx={{ color: "white" }} size="small" />
            <Typography sx={{ fontSize: "12px" }}>Keep me signed in</Typography>
          </Box>
          <Button
            variant="contained"
            className="all-white-btns"
            sx={{
              color: "#2bb491",
              padding: "8px 30px",
              borderRadius: "10px",
              mt: 2,
              textTransform: "none",
            }}
            onClick={handleSubmit}
          >
            {loading ? (
              <CircularProgress color="inherit" size={25} />
            ) : (
              <>Login</>
            )}
          </Button>
          <Box
            sx={{ background: "white", width: "220px", height: "1px", mt: 4 }}
          ></Box>
          <Box sx={{ mt: 1, color: "white", cursor: "pointer" }}>
            Forgot <sapn style={{ fontWeight: "bold" }}>MAX</sapn>pilot ID or
            password?
          </Box>
          <Link to="/step1" className="aTag-1">
            <h4>Sign Up with New ID</h4>
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", color: "white" }}>
            <p>Need Help</p>{" "}
            <HelpOutlineIcon sx={{ ml: "5px", fontSize: "20px" }} />
          </Box>
          <Box sx={{ color: "white", fontSize: "10px" }}>
            Terms & Conditions | Privacy Policy | Copyright &#169; 2023
            <sapn style={{ fontWeight: "bold" }}> MAX</sapn>pilot all rights
            reserved.
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
