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
import users from "../../assets/icons/users.png";
import GlobalContext from "../../context/GlobalContext";
import { Link, useNavigate } from "react-router-dom";
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

export default function LoginSidebar(props) {
  const { setUserInfo } = React.useContext(GlobalContext);
  const Navigate = useNavigate();
  const url = process.env.REACT_APP_BASE_URL;
  const [loading, setLoading] = React.useState(false);
  const [keepme, setKeepme] = React.useState(false);
  const keepMeSignedIn = (e) => {
    setKeepme(e.target.checked);
  };

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
              toast.success("You have successfully LoggedIn!");
              localStorage.setItem("token", response.data.access_token);
              localStorage.setItem("userId", response.data.user.pk);
              {
                keepme
                  ? localStorage.setItem("check", true)
                  : localStorage.setItem("check", false);
              }
              getLoggedInUserDetails(
                response.data.user.pk,
                response.data.access_token
              );
              Navigate("/dashboard");
              action.resetForm();
            }
            setLoading(false);
          })
          .catch((error) => {
            setLoading(false);
            if (error.response.status == 401) {
              toast.error(error.response.data.detail);
            } else {
              toast.error(error.response.data.non_field_errors[0]);
            }
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
        minHeight: {
          xl: "100vh",
          lg: "100vh",
          md: "100vh",
          sm: "auto",
          xs: "auto",
        },
        backgroundColor: "#2BB491",
        borderRadius: "0px 30px 30px 0px",
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
          minHeight: "100vh",
          pt: { xl: 10, lg: 2, xs: 2 },
          pb: { xl: 4, lg: 1, xs: 2 },
        }}
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
      >
        <Box>
          <Avatar
            src={maxpilot}
            aria-label="Busy Man"
            sx={{
              width: "auto",
              height: "auto",
              padding: "0px",
              margin: "0px",
              borderRadius: 0,
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            mt: 2,
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
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <input
              className="input-fields-4"
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
              className="input-fields-4"
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
            <Checkbox
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "white",
                },
              }}
              size="small"
              onChange={(e) => keepMeSignedIn(e)}
            />
            <Typography sx={{ fontSize: "12px" }}>Keep me signed in</Typography>
          </Box>
          <Button
            variant="contained"
            className="all-white-btns"
            sx={{
              color: "#2bb491",
              padding: "8px 0px",
              width: "120px",
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
          />
          <Box
            sx={{ mt: 1, color: "white", cursor: "pointer", fontSize: "15px" }}
            onClick={props.handleOpen}
          >
            Forgot <span style={{ fontWeight: "bold" }}>MAX</span>pilot ID or
            password?
          </Box>
          <Link to="/step1" className="aTag-1">
            <Typography
              sx={{ fontSize: "15px", fontWeight: 600, mt: { xl: 4, sm: 2 } }}
            >
              Sign Up with New ID
            </Typography>
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "white",
              mb: { xl: 5, sm: 1 },
            }}
          >
            <p>Need Help</p>
            <HelpOutlineIcon sx={{ ml: "5px", fontSize: "20px" }} />
          </Box>
          <Box
            sx={{
              color: "white",
              fontSize: "10px",
              textAlign: "center",
              padding: { xl: 0, sm: "0px 5px" },
            }}
          >
            Terms & Conditions | Privacy Policy | Copyright &#169; 2023
            <span style={{ fontWeight: "bold" }}> MAX</span>pilot all rights
            reserved.
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
