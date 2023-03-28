import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../../style/General.css";
import "../../style/PersonalDetails.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
const formSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  firstName: Yup.string().required("Please enter your first name"),
  lastName: Yup.string().required("Please enter your last name"),
  fullName: Yup.string().required("Please enter your full name"),
  pronouns: Yup.string().required("Please enter pronouns"),
  birthday: Yup.date().required("Please select your birthday"),
});

function PersonalDetailsForm() {
  const location = useLocation();
  const userInfo = location.state;
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const url = process.env.REACT_APP_BASE_URL + `/people/${userId}/`;
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: userInfo?.email,
    firstName: userInfo?.first_name,
    lastName: userInfo?.last_name,
    fullName: userInfo?.full_name,
    pronouns: userInfo?.pronouns,
    birthday: userInfo?.date_of_birth,
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: formSchema,
      onSubmit: async (values, action) => {
        setLoading(true);
        console.log("values", values);
        await axios
          .patch(
            url,
            {
              email: values.email,
              first_name: values.firstName,
              last_name: values.lastName,
              is_superuser: false,
              profile: {
                full_name: values.fullName,
                pronouns: values.pronouns,
                date_of_birth: values.birthday,
              },
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            console.log("Response", response);
            setLoading(false);
          })
          .catch((error) => {
            console.log("Error", error);
            toast.error(error.message);
            setLoading(false);
          });
      },
    });
  return (
    <>
      <Grid
        container
        sx={{
          pl: 0,
          pb: 2,
        }}
      >
        <Grid container alignItems="center">
          <Grid item lg={8} md={8} sm={8} xs={8}>
            <Typography
              id="modal-modal-description"
              sx={{
                fontSize: 16,
                fontWeight: "Bold",
              }}
            >
              Personal Details
            </Typography>
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={4} sx={{ paddingRight: "10px" }}>
            <Button
              variant="contained"
              className="all-green-btns"
              sx={{
                bgcolor: "#38b492",
                color: "#ffffff",
                padding: "8px 30px",
              }}
              onClick={handleSubmit}
            >
              {loading ? (
                <CircularProgress color="inherit" size={30} />
              ) : (
                <>Save</>
              )}
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
            alignItems: { lg: "center", sm: "flex-start" },
            mt: { lg: "20px", xs: "15px" },
          }}
        >
          <Typography
            id="modal-modal-description"
            sx={{
              fontSize: 14,
              fontWeight: "Bold",
              width: { lg: "180px" },
            }}
          >
            Email
          </Typography>
          <Box sx={{ ml: { xs: 0, sm: 0, md: 0, lg: 20, xl: 20 } }}>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              size="small"
              sx={{
                width: { xl: "400px", sm: "350px", xs: "280px" },
              }}
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Box>
              {errors.email && touched.email ? (
                <small style={{ color: "red" }}>{errors.email}</small>
              ) : null}
            </Box>
          </Box>
        </Grid>
        <br />
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
            alignItems: { lg: "center", sm: "flex-start" },
            mt: { lg: "20px", xs: "15px" },
          }}
        >
          <Typography
            id="modal-modal-description"
            sx={{
              fontSize: 14,
              fontWeight: "Bold",
              width: { lg: "180px" },
            }}
          >
            First Name
          </Typography>
          <Box sx={{ ml: { xs: 0, sm: 0, md: 0, lg: 20, xl: 20 } }}>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              size="small"
              sx={{
                width: { xl: "400px", sm: "350px", xs: "280px" },
              }}
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Box>
              {errors.firstName && touched.firstName ? (
                <small style={{ color: "red" }}>{errors.firstName}</small>
              ) : null}
            </Box>
          </Box>
        </Grid>
        <br />
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
            alignItems: { lg: "center", sm: "flex-start" },
            mt: { lg: "20px", xs: "15px" },
          }}
        >
          <Typography
            id="modal-modal-description"
            sx={{
              fontSize: 14,
              fontWeight: "Bold",
              width: { lg: "180px" },
            }}
          >
            Last Name
          </Typography>
          <Box sx={{ ml: { xs: 0, sm: 0, md: 0, lg: 20, xl: 20 } }}>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              size="small"
              sx={{
                width: { xl: "400px", sm: "350px", xs: "280px" },
              }}
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Box>
              {errors.lastName && touched.lastName ? (
                <small style={{ color: "red" }}>{errors.lastName}</small>
              ) : null}
            </Box>
          </Box>
        </Grid>
        <br />
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
            alignItems: { lg: "center", sm: "flex-start" },
            mt: { lg: "20px", xs: "15px" },
          }}
        >
          <Typography
            id="modal-modal-description"
            sx={{
              fontSize: 14,
              fontWeight: "Bold",
              width: { lg: "180px" },
            }}
          >
            Preferred Full Name
          </Typography>
          <Box sx={{ ml: { xs: 0, sm: 0, md: 0, lg: 20, xl: 20 } }}>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              size="small"
              sx={{
                width: { xl: "400px", sm: "350px", xs: "280px" },
              }}
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Box>
              {errors.fullName && touched.fullName ? (
                <small style={{ color: "red" }}>{errors.fullName}</small>
              ) : null}
            </Box>
          </Box>
        </Grid>
        <br />
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
            alignItems: { lg: "center", sm: "flex-start" },
            mt: { lg: "20px", xs: "15px" },
          }}
        >
          <Typography
            id="modal-modal-description"
            sx={{
              fontSize: 14,
              fontWeight: "Bold",
              width: { lg: "180px" },
            }}
          >
            Pronouns
          </Typography>
          <Box sx={{ ml: { xs: 0, sm: 0, md: 0, lg: 20, xl: 20 } }}>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              size="small"
              type="number"
              sx={{
                width: { xl: "400px", sm: "350px", xs: "280px" },
              }}
              name="pronouns"
              value={values.pronouns}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Box>
              {errors.pronouns && touched.pronouns ? (
                <small style={{ color: "red" }}>{errors.pronouns}</small>
              ) : null}
            </Box>
          </Box>
        </Grid>
        <br />
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
            alignItems: { lg: "center", sm: "flex-start" },
            mt: { lg: "20px", xs: "15px" },
          }}
        >
          <Typography
            id="modal-modal-description"
            sx={{
              fontSize: 14,
              fontWeight: "Bold",
              width: { lg: "180px" },
            }}
          >
            Date of Birth
          </Typography>
          <Box sx={{ ml: { xs: 0, sm: 0, md: 0, lg: 20, xl: 20 } }}>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              size="small"
              sx={{
                width: {
                  xl: "400px !important",
                  sm: "350px !important",
                  xs: "280px !important",
                },
              }}
              type="date"
              name="birthday"
              value={values.birthday}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Box>
              {errors.birthday && touched.birthday ? (
                <small style={{ color: "red" }}>{errors.birthday}</small>
              ) : null}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default PersonalDetailsForm;
