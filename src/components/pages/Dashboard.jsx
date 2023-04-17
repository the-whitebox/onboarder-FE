import React from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  Badge,
  Avatar,
} from "@mui/material";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddIcon from "@mui/icons-material/Add";
import TodayIcon from "@mui/icons-material/Today";
import bg_image7 from "../../assets/images/bg-image7.png";
import GlobalContext from "../../context/GlobalContext";
import axios from "axios";

function Dashboard() {
  const { setUserInfo } = React.useContext(GlobalContext);
  const url = process.env.REACT_APP_BASE_URL;
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
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
    <Grid container sx={{ overflowY: "scroll", height: "91vh" }}>
      <Grid item xl={8} lg={8} md={8} sm={8} xs={12} sx={{ pb: 8 }}>
        <Box sx={{ display: "flex", flexDirection: "column", mb: 4 }}>
          <Box sx={{ display: "flex", mb: 2, color: "#2BB491" }}>
            <DashboardCustomizeOutlinedIcon />
            <Typography sx={{ ml: 1, fontWeight: "600" }}>Dashboard</Typography>
          </Box>
          <Divider />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          <Box
            sx={{
              width: "250px",
              height: "175px",
              borderRadius: "15px",
              background: "#ffffff",
              border: "1px solid #21d59b",
              filter: "drop-shadow(0px 1px 2px rgba(21,34,50,0.08 ))",
              boxSizing: "border-box",
            }}
          ></Box>
          <Box
            sx={{
              width: "250px",
              height: "175px",
              borderRadius: "15px",
              background: "#ffffff",
              border: "1px solid #21d59b",
              filter: "drop-shadow(0px 1px 2px rgba(21,34,50,0.08 ))",
              boxSizing: "border-box",
            }}
          ></Box>
          <Box
            sx={{
              width: "250px",
              height: "175px",
              borderRadius: "15px",
              background: "#ffffff",
              border: "1px solid #21d59b",
              filter: "drop-shadow(0px 1px 2px rgba(21,34,50,0.08 ))",
              boxSizing: "border-box",
            }}
          ></Box>
          <Box
            sx={{
              width: "250px",
              height: "175px",
              borderRadius: "15px",
              background: "#ffffff",
              border: "1px solid #21d59b",
              filter: "drop-shadow(0px 1px 2px rgba(21,34,50,0.08 ))",
              boxSizing: "border-box",
            }}
          ></Box>
          <Box
            sx={{
              width: "250px",
              height: "175px",
              borderRadius: "15px",
              background: "#ffffff",
              border: "1px solid #21d59b",
              filter: "drop-shadow(0px 1px 2px rgba(21,34,50,0.08 ))",
              boxSizing: "border-box",
              p: "10px 10px 10px 15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Typography
                sx={{ fontSize: "24px", color: "#555555", fontWeight: "500" }}
              >
                Location
              </Typography>
              <LocationOnIcon sx={{ color: "#21d59b" }} />
            </Box>
            <Typography
              sx={{ fontSize: "12px", color: "#131523", fontWeight: "400" }}
            >
              Process your team's pay
            </Typography>
            <Typography
              sx={{ fontSize: "11px", color: "#555555", fontWeight: "500" }}
            >
              I wnat to be able to
              <br /> process pay cycles without
              <br /> headaches
            </Typography>
          </Box>
          <Box
            sx={{
              width: "250px",
              height: "175px",
              borderRadius: "15px",
              background: "#ffffff",
              border: "1px solid #21d59b",
              filter: "drop-shadow(0px 1px 2px rgba(21,34,50,0.08 ))",
              boxSizing: "border-box",
              p: "10px 10px 10px 15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Typography
                sx={{ fontSize: "24px", color: "#555555", fontWeight: "500" }}
              >
                People
              </Typography>
              <AddIcon
                sx={{ bgcolor: "#21d59b", color: "white", borderRadius: "7px" }}
              />
            </Box>
            <Typography
              sx={{ fontSize: "12px", color: "#131523", fontWeight: "400" }}
            >
              Add New team Memebers
            </Typography>
            <Typography
              sx={{ fontSize: "11px", color: "#555555", fontWeight: "500" }}
            >
              I wnat to be able to
              <br /> process pay cycles without
              <br /> headaches
            </Typography>
          </Box>
          <Box
            sx={{
              width: "250px",
              height: "175px",
              borderRadius: "15px",
              background: "#ffffff",
              border: "1px solid #21d59b",
              filter: "drop-shadow(0px 1px 2px rgba(21,34,50,0.08 ))",
              boxSizing: "border-box",
              p: "10px 10px 10px 15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "75%",
                }}
              >
                <Typography
                  sx={{ fontSize: "24px", color: "#555555", fontWeight: "500" }}
                >
                  Schedule
                </Typography>
                <Divider sx={{ mb: 2 }} />
              </Box>
              <TodayIcon sx={{ color: "#21d59b" }} />
            </Box>
            <Typography
              sx={{ fontSize: "12px", color: "#131523", fontWeight: "400" }}
            >
              Add New team Memebers
            </Typography>
            <Typography
              sx={{ fontSize: "11px", color: "#555555", fontWeight: "500" }}
            >
              I wnat to be able to
              <br /> process pay cycles without
              <br /> headaches
            </Typography>
          </Box>
          <Box
            sx={{
              width: "250px",
              height: "175px",
              borderRadius: "15px",
              background: "#ffffff",
              border: "1px solid #21d59b",
              filter: "drop-shadow(0px 1px 2px rgba(21,34,50,0.08 ))",
              boxSizing: "border-box",
            }}
          ></Box>
          <Box
            sx={{
              width: "250px",
              height: "175px",
              borderRadius: "15px",
              background: "#ffffff",
              border: "1px solid #21d59b",
              filter: "drop-shadow(0px 1px 2px rgba(21,34,50,0.08 ))",
              boxSizing: "border-box",
              p: "10px 10px 10px 15px",
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                color: "#555555",
                fontWeight: "500",
                mb: 1,
              }}
            >
              Reports
            </Typography>
            <Typography
              sx={{ fontSize: "12px", color: "#131523", fontWeight: "400" }}
            >
              Add New team Memebers
            </Typography>
            <Typography
              sx={{ fontSize: "11px", color: "#555555", fontWeight: "500" }}
            >
              I wnat to be able to
              <br /> process pay cycles without
              <br /> headaches
            </Typography>
          </Box>
          <Box
            sx={{
              width: "250px",
              height: "175px",
              borderRadius: "15px",
              background: "#ffffff",
              border: "1px solid #21d59b",
              filter: "drop-shadow(0px 1px 2px rgba(21,34,50,0.08 ))",
              boxSizing: "border-box",
              p: "10px 10px 10px 15px",
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                color: "#555555",
                fontWeight: "500",
                mb: 1,
              }}
            >
              Enterprise
            </Typography>
            <Typography
              sx={{ fontSize: "12px", color: "#131523", fontWeight: "400" }}
            >
              Add New team Memebers
            </Typography>
            <Typography
              sx={{ fontSize: "11px", color: "#555555", fontWeight: "500" }}
            >
              I wnat to be able to
              <br /> process pay cycles without
              <br /> headaches
            </Typography>
          </Box>
          <Box
            sx={{
              width: "250px",
              height: "175px",
              borderRadius: "15px",
              background: "#ffffff",
              border: "1px solid #21d59b",
              filter: "drop-shadow(0px 1px 2px rgba(21,34,50,0.08 ))",
              boxSizing: "border-box",
              p: "10px 10px 10px 15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "65%",
                }}
              >
                <Typography
                  sx={{ fontSize: "24px", color: "#555555", fontWeight: "500" }}
                >
                  Subscription
                </Typography>
                <Divider sx={{ mb: 2 }} />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Badge
                  color="success"
                  variant="dot"
                  sx={{
                    background: "#e6f4eb",
                    borderRadius: "12px",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    width: "60px",
                    height: "20px",
                  }}
                >
                  <Button
                    sx={{
                      textTransform: "none",
                      fontSize: "12px",
                      color: "#21D59B",
                    }}
                  >
                    Active
                  </Button>
                </Badge>
                <Badge
                  color="error"
                  variant="dot"
                  sx={{
                    background: "#e6f4eb",
                    borderRadius: "12px",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    width: "60px",
                    height: "20px",
                    mt: "4px",
                  }}
                >
                  <Button
                    sx={{
                      textTransform: "none",
                      fontSize: "12px",
                      color: "red",
                    }}
                  >
                    Expired
                  </Button>
                </Badge>
              </Box>
            </Box>
            <Typography
              sx={{ fontSize: "12px", color: "#131523", fontWeight: "400" }}
            >
              You've Yearly Membership
            </Typography>
            <Typography
              sx={{ fontSize: "11px", color: "#555555", fontWeight: "500" }}
            >
              I wnat to be able to
              <br /> process pay cycles without
              <br /> headaches
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xl={4}
        lg={4}
        md={4}
        sm={4}
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Avatar
          src={bg_image7}
          sx={{ width: "363px", height: "438px", borderRadius: 0 }}
        />
      </Grid>
    </Grid>
  );
}

export default Dashboard;
