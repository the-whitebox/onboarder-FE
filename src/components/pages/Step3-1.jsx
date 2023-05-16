import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import maxpilot from "../../assets/images/maxpilot-logo.png";
import { Avatar } from "@mui/material";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import { useNavigate } from "react-router-dom";
import image1 from "../../assets/images/welcome1.png";
import image2 from "../../assets/images/welcome2.png";
import bg_image3 from "../../assets/images/bg-image3.png";
import GlobalContext from "../../context/GlobalContext";
import axios from "axios";
import Cookies from "js-cookie";

export default function Step2() {
  const { setUserInfo, userInfo } = React.useContext(GlobalContext);
  const url = process.env.REACT_APP_BASE_URL;
  const token = Cookies.get("token");
  const userId = Cookies.get("pk");
  const Navigate = useNavigate();
  const nextpage = () => {
    Navigate("/step3-2");
  };

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

  console.log(userInfo);

  return (
    <>
      <Grid
        container
        sx={{
          pb: {
            xs: 2,
            md: 0,
          },
          minHeight: "100vh",
        }}
      >
        <Grid
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{ height: { xl: 0 } }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mr: { xl: 10, lg: 10, md: 5, sm: 1, xs: 1 },
              ml: 2,
              py: 2,
            }}
          >
            <Avatar
              src={maxpilot}
              aria-label="Busy Man"
              sx={{
                width: "100px",
                height: "auto",
                padding: "0px",
                margin: "0px",
                borderRadius: 0,
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: { md: "center", xs: "flex-end" },
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "flex-end",
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: "12px", xs: "10px" },
                  mr: { md: 2, xs: 0 },
                }}
              >
                STEP 3 | Complete your profile
              </Typography>
              <Box sx={{ display: "flex", mt: { xs: 1, md: 0 } }}>
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
          </Box>
          <Box sx={{ background: "gray", width: "77%", height: "1px" }} />
        </Grid>

        <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: { xl: 0, md: 5, sm: 2 },
              ml: { lg: 14, md: 5, xs: 1 },
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "25px" }}>
              <span style={{ color: "#2bb491" }}>Welcome to </span>
              <i>
                <span style={{ color: "#555555" }}>MAXpilot, </span>
              </i>
              <span>
                {userInfo?.first_name && userInfo?.last_name ? (
                  <>
                    {userInfo?.first_name}
                    {userInfo?.last_name}
                  </>
                ) : (
                  <>{userInfo?.username}</>
                )}
              </span>
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { sm: "row", xs: "column" },
                alignItems: "center",
                mt: 2,
              }}
            >
              <Box
                sx={{
                  border: "1px solid #2bb491",
                  borderRadius: "10px",
                  padding: "40px 40px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  src={image1}
                  aria-label="Busy Man"
                  sx={{
                    width: "150px",
                    height: "150px",
                    padding: "0px",
                    margin: "0px",
                  }}
                />
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: { sm: "12px", md: "15px" },
                    fontWeight: "bold",
                    mt: 2,
                  }}
                >
                  Are you a business owner <br />
                  or team manager?
                </Typography>
                <Button
                  className="all-green-btns"
                  variant="contained"
                  sx={{
                    mt: { md: 8, sm: 5 },
                    textTransform: "none",
                    borderRadius: "10px",
                  }}
                  onClick={nextpage}
                >
                  Discover
                  <span style={{ fontWeight: "bold", marginLeft: "5px" }}>
                    MAX
                  </span>
                  pilot
                </Button>
              </Box>
              <Box
                sx={{
                  border: "1px solid #2bb491",
                  borderRadius: "10px",
                  padding: "40px 40px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  ml: { sm: 2, xs: 0 },
                  mt: { sm: 0, xs: 2 },
                }}
              >
                <Avatar
                  src={image2}
                  aria-label="Busy Man"
                  sx={{
                    width: "150px",
                    height: "150px",
                    padding: "0px",
                    margin: "0px",
                    backgroundSize: "100% 100%",
                    objectFit: "contain",
                  }}
                />
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: { sm: "12px", md: "15px" },
                    fontWeight: "bold",
                    mt: 2,
                  }}
                >
                  Is your team already using
                  <br />
                  <span style={{ fontWeight: "bold" }}>MAX</span>pilot?
                </Typography>
                <Button
                  className="all-green-btns"
                  variant="contained"
                  sx={{
                    mt: { md: 8, sm: 5 },
                    textTransform: "none",
                    borderRadius: "10px",
                  }}
                >
                  Join Your Team
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: { xl: 5, lg: 8, sm: 4 },
            }}
          >
            <Box
              sx={{
                background: "#e6f4eb",
                display: "flex",
                alignItems: "center",
                boxSizing: "border-box",
                padding: { lg: "20px", sm: "10px 15px" },
                borderRadius: "40px 0px 0px 40px",
              }}
            >
              <RecentActorsIcon sx={{ color: "#2bb491" }} />
              <Typography
                sx={{
                  color: "#2bb491",
                  fontSize: { md: "12px", sm: "10px" },
                  ml: 1,
                }}
              >
                Complete by adding your profile information
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { sm: "column" },
              alignItems: "flex-end",
              justifyContent: "center",
              mt: { xl: 20, sm: 5, xs: 3 },
              mr: { sm: 5, xs: 0 },
            }}
          >
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
                background: "#e6f4eb",
                borderRadius: "100%",
                mt: 1,
                ml: { xs: 1, md: 0 },
              }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            position: "relative",
            mt: 8,
          }}
        >
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
            <br /> Any information you provide on this page will be used solely
            for the purpose of authentication and will be kept confidential. We
            do not share your information with third parties.
            <br />
            For more information on our privacy policy, please visit our
            website.
          </Typography>
          <Avatar
            src={bg_image3}
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
        </Grid>
      </Grid>
    </>
  );
}
