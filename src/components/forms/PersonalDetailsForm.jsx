import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TbMessageCircle } from "react-icons/tb";
import { Avatar } from "@mui/material";
import Grid from "@mui/material/Grid";
import "../../style/General.css";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "../../style/PersonalDetails.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import { useFormik } from "formik";
import * as Yup from "yup";
const formSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  firstName: Yup.string().required("Please enter your first name"),
  lastName: Yup.string().required("Please enter your last name"),
  fullName: Yup.string().required("Please enter your full name"),
  pronouns: Yup.string().required("Please enter pronouns"),
  birthday: Yup.date().required("Please select your birthday"),
});
const initialValues = {
  email: "",
  firstName: "",
  lastName: "",
  fullName: "",
  pronouns: "",
  birthday: "",
};

function PersonalDetailsForm() {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const url = process.env.REACT_APP_BASE_URL + `/people/${userId}/`;
  const [loading, setLoading] = useState(false);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: formSchema,
      onSubmit: async (values, action) => {
        setLoading(true);
        console.log(values);
        await axios
          .patch(
            url,
            {
              first_name: values.firstName,
              last_name: values.lastName,
              email: values.email,
              is_superuser: false,
              role: 2,
              profile: {
                date_of_birth: values.birthday,
                pronouns: values.pronouns,
                full_name: values.fullName,
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
            if (response.status === 200) {
              console.log("Response", response);
              toast.success("Successfully Added!");
              setLoading(false);
              action.resetForm();
            }
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
      <Box
        sx={{
          pl: 2,
          pb: 2,
        }}
      >
        <Box className="flex flex-row">
          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              fontSize: 14,
              fontWeight: "Bold",
            }}
          >
            Email
          </Typography>
          <Box>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              size="small"
              sx={{
                width: "300px",
                mr: { xs: 0, sm: 0, md: 0, lg: 60, xl: 60 },
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
        </Box>
        <br />
        <Box className="flex flex-row ">
          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              fontSize: 14,
              fontWeight: "Bold",
            }}
          >
            First Name
          </Typography>
          <Box>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              size="small"
              sx={{
                width: "300px",
                mr: { xs: 0, sm: 0, md: 0, lg: 60, xl: 60 },
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
        </Box>
        <br />
        <Box className="flex flex-row ">
          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              fontSize: 14,
              fontWeight: "Bold",
            }}
          >
            Last Name
          </Typography>
          <Box>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              size="small"
              sx={{
                width: "300px",
                mr: { xs: 0, sm: 0, md: 0, lg: 60, xl: 60 },
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
        </Box>
        <br />
        <Box className="flex flex-row ">
          <Typography
            id="modal-modal-description"
            sx={{
              mr: 2,
              mt: 2,
              fontSize: 14,
              fontWeight: "Bold",
            }}
          >
            Preferred Full Name
          </Typography>
          <Box>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              size="small"
              sx={{
                width: "300px",
                mr: { xs: 0, sm: 0, md: 0, lg: 60, xl: 60 },
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
        </Box>
        <br />
        <Box className="flex flex-row ">
          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              fontSize: 14,
              fontWeight: "Bold",
            }}
          >
            Pronouns
          </Typography>
          <Box>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              size="small"
              sx={{
                width: "300px",
                mr: { xs: 0, sm: 0, md: 0, lg: 60, xl: 60 },
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
        </Box>
        <br />
        <Box className="flex flex-row ">
          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              fontSize: 14,
              fontWeight: "Bold",
            }}
          >
            Date of Birth
          </Typography>
          <Box>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              size="small"
              sx={{
                width: "300px",
                mr: { xs: 0, sm: 0, md: 0, lg: 60, xl: 60 },
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
        </Box>
        <br />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#38b492",
                color: "#ffffff",
                mt: 3,
              }}
              onClick={handleSubmit}
            >
              {loading ? (
                <CircularProgress color="inherit" size={25} />
              ) : (
                <>Save</>
              )}
            </Button>
          </Box>
          <Avatar className="messageCircle" sx={{ backgroundColor: "#38b492" }}>
            <TbMessageCircle />
          </Avatar>
        </Box>
      </Box>
    </>
  );
}

export default PersonalDetailsForm;
