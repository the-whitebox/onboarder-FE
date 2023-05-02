import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Grid } from "@mui/material";
import GlobalContext from "../../context/GlobalContext";
const formSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  mobile: Yup.string().required("Please enter your mobile number"),
  address: Yup.string().required("Please enter your address"),
  postcode: Yup.string().required("Please enter your postcode"),
  city: Yup.string().required("Please enter your city"),
  state: Yup.string().required("Please enter your state"),
  country: Yup.string().required("Please enter your country"),
  contactName: Yup.string().required("Please enter emergency contact name"),
  contactNumber: Yup.string().required("Please enter emergency contact number"),
});

function ContactForm() {
  const { userInfo } = React.useContext(GlobalContext);
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const url = process.env.REACT_APP_BASE_URL + `/people/${userId}/`;
  const [loading, setLoading] = React.useState(false);

  const initialValues = {
    email: userInfo?.profile.email,
    mobile: userInfo?.profile.phone_number,
    address: userInfo?.profile.address,
    postcode: userInfo?.profile.zip_code,
    city: userInfo?.profile.city,
    state: userInfo?.profile.state,
    country: userInfo?.profile.country,
    contactName: userInfo?.profile.emergency_contact_name,
    contactNumber: userInfo?.profile.emergency_phone_number,
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: formSchema,
      onSubmit: async (values, action) => {
        setLoading(true);
        await axios
          .patch(
            url,
            {
              is_superuser: false,
              profile: {
                email: values.email,
                phone_number: values.mobile,
                address: values.address,
                zip_code: values.postcode,
                city: values.city,
                state: values.cityState,
                country: values.country,
                emergency_contact_name: values.contactName,
                emergency_phone_number: values.contactNumber,
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

  // const [locations, setLocations] = useState([]);
  // const [selectedCountry, setSelectedCountry] = useState("");
  // const [states, setStates] = useState([]);
  // const [selectedState, setSelectedState] = useState("");

  // useEffect(() => {
  //   fetch("https://api.countrystatecity.in/v1/countries", {
  //     headers: {
  //       "X-CSCAPI-KEY": "your-api-key-here",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setLocations(data))
  //     .catch((error) => console.error(error));
  // }, []);

  // useEffect(() => {
  //   if (selectedCountry) {
  //     fetch(
  //       `https://api.countrystatecity.in/v1/countries/${selectedCountry}/states`,
  //       {
  //         headers: {
  //           "X-CSCAPI-KEY": "your-api-key-here",
  //         },
  //       }
  //     )
  //       .then((response) => response.json())
  //       .then((data) => setStates(data))
  //       .catch((error) => console.error(error));
  //   }
  // }, [selectedCountry]);

  // const handleCountryChange = (event) => {
  //   setSelectedCountry(event.target.value);
  //   setSelectedState("");
  // };

  // const handleStateChange = (event) => {
  //   setSelectedState(event.target.value);
  // };
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
              Contact
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
            Mobile
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
              name="mobile"
              value={values.mobile}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Box>
              {errors.mobile && touched.mobile ? (
                <small style={{ color: "red" }}>{errors.mobile}</small>
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
            Address
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
              name="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Box>
              {errors.address && touched.address ? (
                <small style={{ color: "red" }}>{errors.address}</small>
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
            Postcode
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
              name="postcode"
              value={values.postcode}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Box>
              {errors.postcode && touched.postcode ? (
                <small style={{ color: "red" }}>{errors.postcode}</small>
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
            City
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
              name="city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Box>
              {errors.city && touched.city ? (
                <small style={{ color: "red" }}>{errors.city}</small>
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
            State
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
              name="state"
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Box>
              {errors.state && touched.state ? (
                <small style={{ color: "red" }}>{errors.state}</small>
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
            Country
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
              name="country"
              value={values.country}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Box>
              {errors.country && touched.country ? (
                <small style={{ color: "red" }}>{errors.country}</small>
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
            Emergency contact name
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
              name="contactName"
              value={values.contactName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Box>
              {errors.contactName && touched.contactName ? (
                <small style={{ color: "red" }}>{errors.contactName}</small>
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
            Emergency contact number
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
              name="contactNumber"
              value={values.contactNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Box>
              {errors.contactNumber && touched.contactNumber ? (
                <small style={{ color: "red" }}>{errors.contactNumber}</small>
              ) : null}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default ContactForm;
