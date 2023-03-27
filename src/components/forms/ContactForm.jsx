import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../../style/General.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

function ContactForm() {
  const url = process.env.REACT_APP_BASE_URL + "/people/";
  const token = process.env.REACT_APP_TEMP_TOKEN;
  const [state, setState] = React.useState({ data: "" });
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [postcode, setPostcode] = React.useState("");
  const [city, setCity] = React.useState("");
  const [cityState, setCityState] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [contactName, setContactName] = React.useState("");
  const [contactNumber, setContactNumber] = React.useState("");
  // const [locations, setLocations] = useState([]);
  // const [selectedCountry, setSelectedCountry] = useState("");
  // const [states, setStates] = useState([]);
  // const [selectedState, setSelectedState] = useState("");

  const [error, setError] = React.useState(null);

  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = React.useState("");
  const [addressError, setAddressError] = React.useState("");
  const [postcodeError, setPostcodeError] = React.useState("");
  const [cityError, setCityError] = React.useState("");
  const [cityStateError, setCityStateError] = React.useState("");
  const [countryError, setCountryError] = React.useState("");
  const [contactNameError, setContactNameError] = React.useState("");
  const [contactNumberError, setContactNumberError] = React.useState("");

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

  const navigate = useNavigate();

  const emailValidation = () => {
    const regEx = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (regEx.test(email)) {
      setEmailError("");
    } else if (email === "") {
      setEmailError("Email should not be empty");
    } else if (!regEx.test(email)) {
      setEmailError("Email is not valid");
    }
  };

  const mobileValidation = () => {
    if (mobile === "") {
      setMobileError("Please enter your mobile number");
    } else setMobileError("");
  };

  const addressValidation = () => {
    if (address === "") {
      setAddressError("Please enter your address");
    } else setAddressError("");
  };

  const postcodeValidation = () => {
    if (postcode === "") {
      setPostcodeError("Please enter your postcode");
    } else setPostcodeError("");
  };

  const cityValidation = () => {
    if (city === "") {
      setCityError("Please enter your city");
    } else setCityError("");
  };

  const cityStateValidation = () => {
    if (cityState === "") {
      setCityStateError("Please enter your state");
    } else setCityStateError("");
  };

  const countryValidation = () => {
    if (country === "") {
      setCountryError("Please enter your country");
    } else setCountryError("");
  };

  const contactNameValidation = () => {
    if (contactName === "") {
      setContactNameError("Please enter emergency contact name");
    } else setContactNameError("");
  };

  const contactNumberValidation = () => {
    if (contactNumber === "") {
      setContactNumberError("Please enter emergency contact number");
    } else setContactNumberError("");
  };

  const {
    register,
    formState: { errors },
  } = useForm();

  const personalDetails = (e) => {
    console.log("Inside Personal Details");
    console.log(email, mobile, address);
    if (
      email !== "" &&
      mobile !== "" &&
      address !== "" &&
      postcode !== "" &&
      city !== "" &&
      cityState !== "" &&
      country !== "" &&
      contactName !== "" &&
      contactNumber !== ""
    ) {
      console.log("Data Found");
      setError(false);
      console.log(
        email,
        mobile,
        address,
        postcode,
        city,
        cityState,
        country,
        contactName,
        contactNumber
      );
      try {
        axios
          .post(
            url,
            {
              email: email,
              mobile_number: mobile,
              address: address,
              postcode: postcode,
              city: city,
              state: cityState,
              country: country,
              emergency_contact_name: contactName,
              emergency_phone_number: contactNumber,
              role: 2,
              is_superuser: false,
              profile: {},
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            console.log("Personal API was hit successfully");
            console.log(response);
          });
      } catch (error) {
        console.log(error.response.data);
      }
      console.log(email, mobile);
    } else {
      setError(true);
      setState({ data: e.target.value });
    }
  };
  return (
    <>
      <Box
        sx={{
          pb: 2,
          pl: 2,
        }}
      >
        <Box className="flex flex-row ">
          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              fontSize: 14,
              fontWeight: "Bold",
              textAlign: "right",
            }}
          >
            Email
          </Typography>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            size="small"
            sx={{
              width: "300px",
              mr: 60,
            }}
            {...register("Email", { required: true })}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box sx={{ ml: 32, mt: 1 }}>
          {errors.Email?.type === "required" && "Email Required"}
          <small>
            {emailError && (
              <div
                style={{
                  color: "red",
                }}
              >
                {emailError}
              </div>
            )}
          </small>
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
            Mobile
          </Typography>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            size="small"
            sx={{
              width: "300px",
              mr: 60,
            }}
            {...register("Mobile", { required: true })}
            onChange={(e) => setMobile(e.target.value)}
          />
        </Box>
        <Box sx={{ ml: 32, mt: 1 }}>
          {errors.Mobile?.type === "required" && "Mobile Required"}
          <small>
            {mobileError && (
              <div
                style={{
                  color: "red",
                }}
              >
                {mobileError}
              </div>
            )}
          </small>
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
            Address
          </Typography>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            size="small"
            sx={{
              width: "300px",
              mr: 60,
            }}
            {...register("Address", { required: true })}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Box>
        <Box sx={{ ml: 32, mt: 1 }}>
          {errors.Address?.type === "required" && "Address Required"}
          <small>
            {addressError && (
              <div
                style={{
                  color: "red",
                }}
              >
                {addressError}
              </div>
            )}
          </small>
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
            Postcode
          </Typography>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            size="small"
            sx={{
              width: "300px",
              mr: 60,
            }}
            {...register("Postcode", { required: true })}
            onChange={(e) => setPostcode(e.target.value)}
          />
        </Box>
        <Box sx={{ ml: 32, mt: 1 }}>
          {errors.Postcode?.type === "required" && "Postcode Required"}
          <small>
            {postcodeError && (
              <div
                style={{
                  color: "red",
                }}
              >
                {postcodeError}
              </div>
            )}
          </small>
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
            City
          </Typography>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            size="small"
            sx={{
              width: "300px",
              mr: 60,
            }}
            {...register("City", { required: true })}
            onChange={(e) => setCity(e.target.value)}
          />
        </Box>
        <Box sx={{ ml: 32, mt: 1 }}>
          {errors.City?.type === "required" && "City Required"}
          <small>
            {cityError && (
              <div
                style={{
                  color: "red",
                }}
              >
                {cityError}
              </div>
            )}
          </small>
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
            State
          </Typography>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            size="small"
            sx={{
              width: "300px",
              mr: 60,
            }}
            {...register("State", { required: true })}
            onChange={(e) => setCityState(e.target.value)}
          />
        </Box>
        <Box sx={{ ml: 32, mt: 1 }}>
          {errors.CityState?.type === "required" && "Email Required"}
          <small>
            {cityStateError && (
              <div
                style={{
                  color: "red",
                }}
              >
                {cityStateError}
              </div>
            )}
          </small>
        </Box>
        <br />
        <Box className="flex flex-row ">
          <Typography
            className="text-align"
            id="modal-modal-description"
            sx={{
              mt: 2,
              fontSize: 14,
              fontWeight: "Bold",
            }}
          >
            Country
          </Typography>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            size="small"
            sx={{
              width: "300px",
              mr: 60,
            }}
            {...register("Country", { required: true })}
            onChange={(e) => setCountry(e.target.value)}
          />
        </Box>
        <Box sx={{ ml: 32, mt: 1 }}>
          {errors.Country?.type === "required" && "Email Required"}
          <small>
            {countryError && (
              <div
                style={{
                  color: "red",
                }}
              >
                {countryError}
              </div>
            )}
          </small>
        </Box>
        <br />
        <Box className="flex flex-row ">
          <Typography
            className="text-align"
            id="modal-modal-description"
            sx={{
              mr: 2,
              mt: 2,
              fontSize: 14,
              fontWeight: "Bold",
            }}
          >
            Emergency contact name
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            sx={{
              width: "300px",
              mr: 60,
            }}
            {...register("Emergency Contact Name", { required: true })}
            onChange={(e) => setContactName(e.target.value)}
          />
        </Box>
        <Box sx={{ ml: 32, mt: 1 }}>
          {errors.EmergencyContact?.type === "required" &&
            "Emergency Contact Name Required"}
          <small>
            {contactNameError && (
              <div
                style={{
                  color: "red",
                }}
              >
                {contactNameError}
              </div>
            )}
          </small>
        </Box>
        <br />
        <Box className="flex flex-row">
          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              width: 250,
              fontSize: 14,
              fontWeight: "Bold",
            }}
          >
            Emergency phone number
          </Typography>
          <Box sx={{ pl: 1 }}>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              size="small"
              sx={{
                width: "300px",
                mr: 60,
              }}
              {...register("Emergency Contact Number", { required: true })}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </Box>
          <br />
        </Box>
        <Box sx={{ ml: 32, mt: 1 }}>
          {errors.EmergencyContactNumber?.type === "required" &&
            "Emergency Contact Number Required"}
          <small>
            {contactNumberError && (
              <div
                style={{
                  color: "red",
                }}
              >
                {contactNumberError}
              </div>
            )}
          </small>
        </Box>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#38b492",
            color: "#ffffff",
          }}
          onClick={(e) => {
            emailValidation();
            mobileValidation();
            addressValidation();
            postcodeValidation();
            cityValidation();
            cityStateValidation();
            countryValidation();
            contactNameValidation();
            contactNumberValidation();
            personalDetails(e);
          }}
        >
          Save
        </Button>
      </Box>
    </>
  );
}

export default ContactForm;
