import React from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link, useNavigate } from "react-router-dom";
import users from "../../assets/icons/Group 515.png";
import bg_image6 from "../../assets/images/bg-image6.png";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import GlobalContext from "../../context/GlobalContext";
import Cookies from "js-cookie";
const Schema = Yup.object({
  name: Yup.string(),
  birthday: Yup.string(),
  gender: Yup.string(),
  contact: Yup.string(),
  email: Yup.string(),
  address: Yup.string(),
});

function Step3_4() {
  const { setUserInfo, userInfo } = React.useContext(GlobalContext);
  const Navigate = useNavigate();
  const url = process.env.REACT_APP_BASE_URL;
  const token = Cookies.get("token");
  const userId = Cookies.get("pk");

  const initialValues = {
    name: userInfo?.profile.full_name,
    birthday: userInfo?.profile.date_of_birth,
    gender: userInfo?.profile.gender,
    contact: userInfo?.profile.phone_number,
    email: userInfo?.email,
    address: userInfo?.profile.address,
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: Schema,
      onSubmit: async (values, action) => {
        console.log("values", values);
        await axios
          .patch(
            `${url}/people/${userId}/`,
            {
              email: userInfo?.email,
              role: 3,
              profile: {
                full_name: values.name,
                date_of_birth: values.birthday,
                gender: values.gender,
                phone_number: values.contact,
                address: values.address,
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
            console.log(response);
            Navigate("/dashboard");
          })
          .catch((error) => {
            console.log(error);
          });
      },
    });

  React.useEffect(() => {
    const getLoggedInUserDetails = async () => {
      await axios
        .get(`${url}/people/${userId}/`, {
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
    getLoggedInUserDetails();
  }, []);

  return (
    <Grid
      container
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
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
            STEP 3 | Complete Your Profile
          </Typography>
          <Box
            sx={{
              width: "20px",
              height: "20px",
              background: "#e6f4eb",
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
              background: "#2bb491",
              borderRadius: "100%",
              ml: 1,
            }}
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex" }}>
        <Grid
          item
          xs={11}
          sx={{
            mt: { xl: 10, sm: 5 },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              sx={{ fontSize: "26px", color: "#2bb491", textAlign: "center" }}
            >
              Complete your MAXpilot profile
            </Typography>
            <Typography
              sx={{ color: "gray", fontSize: "14px", textAlign: "center" }}
            >
              Choose to create a better looking profile
            </Typography>
            <Avatar
              src={users}
              aria-label="Busy Man"
              sx={{
                width: { xl: "150px", md: "150px", xs: "100px" },
                height: "auto",
                padding: "0px",
                margin: "0px",
                borderRadius: 0,
                mt: 2,
              }}
            />
            <Typography sx={{ textAlign: "center", mt: 2, fontWeight: "500" }}>
              WELCOME, {userInfo?.profile.username}
            </Typography>
            <Typography
              sx={{ color: "gray", fontSize: "14px", textAlign: "center" }}
            >
              Manage your info, privacy, and security to make MAXpilot work
              better for you.
            </Typography>
            <Typography sx={{ textAlign: "center", mt: 4 }}>
              Basic info
            </Typography>
            <Typography
              sx={{ color: "gray", fontSize: "12px", textAlign: "center" }}
            >
              Some info may be visible to other people using MAXpilot services.
            </Typography>
            <Box
              sx={{
                width: { md: "80%", xs: "95%", display: "flex" },
                mt: 2,
              }}
            >
              <Typography sx={{ color: "gray", width: "140px" }}>
                Name
              </Typography>
              <input
                type="text"
                placeholder="Username"
                className="profile-inputs"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
            </Box>
            <Box
              sx={{
                width: { md: "80%", xs: "95%" },
                height: "1px",
                background: "gray",
                mt: 2,
              }}
            />
            <Box
              sx={{
                width: {
                  md: "80%",
                  xs: "95%",
                  display: "flex",
                  position: "relative",
                },
                mt: 2,
              }}
            >
              <Typography sx={{ color: "gray", width: "140px" }}>
                Birthday
              </Typography>
              <input
                type="date"
                className="profile-inputs"
                name="birthday"
                value={values.birthday}
                onChange={handleChange}
              />
              {/* <CalendarMonthIcon
                sx={{ position: "absolute", right: 10, cursor: "pointer" }}
              /> */}
            </Box>
            <Box
              sx={{
                width: { md: "80%", xs: "95%" },
                height: "1px",
                background: "gray",
                mt: 2,
              }}
            />
            <Box
              sx={{
                width: { md: "80%", xs: "95%", display: "flex" },
                mt: 2,
              }}
            >
              <Typography sx={{ color: "gray", width: "140px" }}>
                Gender
              </Typography>
              <select
                className="profile-inputs"
                name="gender"
                value={values.gender}
                onChange={handleChange}
              >
                <option value="" selected disabled>
                  Select
                </option>
                <option value={0}> Male </option>
                <option value={1}> Female </option>
              </select>
            </Box>
            <Box
              sx={{
                width: { md: "80%", xs: "95%" },
                height: "1px",
                background: "gray",
                mt: 2,
              }}
            />
            <Box
              sx={{
                width: { md: "80%", xs: "95%", display: "flex" },
                mt: 2,
              }}
            >
              <Typography sx={{ color: "gray", width: "140px" }}>
                Contact info
              </Typography>
              <input
                type="text"
                className="profile-inputs"
                placeholder="none"
                name="contact"
                value={values.contact}
                onChange={handleChange}
              />
            </Box>
            <Box
              sx={{
                width: { md: "80%", xs: "95%" },
                height: "1px",
                background: "gray",
                mt: 2,
              }}
            />
            <Box
              sx={{
                width: { md: "80%", xs: "95%", display: "flex" },
                mt: 2,
              }}
            >
              <Typography sx={{ color: "gray", width: "140px" }}>
                E-mail
              </Typography>
              <input
                readOnly
                type="text"
                className="profile-inputs"
                name="email"
                value={userInfo?.email}
                onChange={handleChange}
              />
            </Box>
            <Box
              sx={{
                width: { md: "80%", xs: "95%" },
                height: "1px",
                background: "gray",
                mt: 2,
              }}
            />
            <Box
              sx={{
                width: { md: "80%", xs: "95%", display: "flex" },
                mt: 2,
              }}
            >
              <Typography sx={{ color: "gray", width: "140px" }}>
                Address
              </Typography>
              <input
                type="text"
                className="profile-inputs"
                placeholder="none"
                name="address"
                value={values.address}
                onChange={handleChange}
              />
            </Box>
            <Box
              sx={{
                width: { md: "80%", xs: "95%" },
                height: "1px",
                background: "gray",
                mt: 2,
              }}
            />

            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: { md: "center", xs: "center" },
                mt: { xs: 2, lg: 5, xl: 10 },
              }}
            >
              <Link to="/step3-3">
                <ArrowBackIosNewIcon
                  sx={{
                    border: "1px solid #2bb491",
                    borderRadius: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "5px",
                    mr: 2,
                    color: "#2bb491",
                  }}
                />
              </Link>
              <Link to="#" onClick={handleSubmit}>
                <ArrowForwardIosIcon
                  sx={{
                    border: "1px solid #2bb491",
                    borderRadius: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "5px",
                    color: "#2bb491",
                  }}
                />
              </Link>
            </Box>
          </Box>
        </Grid>

        <Grid item md={4} xs={1} sx={{ mt: 5 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "column", xs: "column" },
              alignItems: "flex-end",
              justifyContent: "center",
              mt: { xl: 30, lg: 15, sm: 3 },
              mr: { md: 8, sm: 1 },
            }}
          >
            <Box
              sx={{
                width: "20px",
                height: "20px",
                background: "#e6f4eb",
                borderRadius: "100%",
              }}
            />
            <Box
              sx={{
                width: "20px",
                height: "20px",
                background: "#e6f4eb",
                borderRadius: "100%",
                mt: 1,
                ml: { xs: 1, md: 0 },
              }}
            />
            <Box
              sx={{
                width: "20px",
                height: "20px",
                background: "#e6f4eb",
                borderRadius: "100%",
                mt: 1,
                ml: { xs: 1, md: 0 },
              }}
            />
            <Box
              sx={{
                width: "20px",
                height: "20px",
                background: "#2bb491",
                borderRadius: "100%",
                mt: 1,
                ml: { xs: 1, md: 0 },
              }}
            />
          </Box>
        </Grid>
      </Box>
      <Grid
        item
        xs={12}
        sx={{
          position: "relative",
          mt: { xl: 25, lg: 8 },
        }}
      >
        <Avatar
          src={bg_image6}
          aria-label="Busy Man"
          sx={{
            width: { xl: "400px", md: "250px", xs: "200px" },
            height: "auto",
            padding: "0px",
            margin: "0px",
            borderRadius: 0,
            position: "absolute",
            bottom: "1px !important",
            right: "0",
          }}
        />
      </Grid>
    </Grid>
  );
}

export default Step3_4;
