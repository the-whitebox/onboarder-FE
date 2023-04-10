import * as React from "react";
import "../../style/General.css";
import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";
const Item = styled("div")(({ theme }) => ({
  border: "none",
}));

export default function Contact(props) {
  const { userInfo } = React.useContext(GlobalContext);

  const Navigate = useNavigate();
  const routeToNextPage = () => {
    Navigate("/personal_details");
  };
  return (
    <>
      <Box sx={{ pt: 2, pb: 2 }}>
        <Typography variant="h5">Contact</Typography>
      </Box>
      <Box
        sx={{
          ml: { xl: 2, lg: 2, md: 0, sm: 0, xs: 0 },
          mr: { xl: 40, lg: 30, md: 0, sm: 0, xs: 0 },
          pt: 0.5,
          border: "1px solid",
          borderColor: "#ced7e0",
          borderRadius: "10px",
          bgcolor: "#ffffff",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid container xs={12} md={7} lg={12}>
              <Grid xs={6} lg={4}>
                <Item>
                  <Box
                    component="ul"
                    aria-labelledby="category-a"
                    sx={{ pl: 2 }}
                  >
                    <li>Email</li>
                    <li>
                      {userInfo?.profile.email ? (
                        userInfo?.profile.email
                      ) : (
                        <Typography
                          component="p"
                          className="aTag"
                          onClick={routeToNextPage}
                        >
                          Add an email
                        </Typography>
                      )}
                    </li>
                    <li>Emergency contact</li>
                    <li>
                      {userInfo?.profile.emergency_contact_name ? (
                        userInfo?.profile.emergency_contact_name
                      ) : (
                        <Typography
                          component="p"
                          className="aTag"
                          onClick={routeToNextPage}
                        >
                          Add an emergency contact
                        </Typography>
                      )}
                    </li>
                  </Box>
                </Item>
              </Grid>
              <Grid xs={6} lg={4}>
                <Item>
                  <Box
                    component="ul"
                    aria-labelledby="category-b"
                    sx={{ pl: 2 }}
                  >
                    <li>Mobile</li>
                    <li>
                      {userInfo?.profile.phone_number ? (
                        userInfo?.profile.phone_number
                      ) : (
                        <Typography
                          component="p"
                          className="aTag"
                          onClick={routeToNextPage}
                        >
                          Add a mobile
                        </Typography>
                      )}
                    </li>
                    <li>Contact Details</li>
                    <li>
                      <Typography
                        component="p"
                        className="aTag"
                        onClick={routeToNextPage}
                      >
                        Add contact details
                      </Typography>
                    </li>
                  </Box>
                </Item>
              </Grid>
              <Grid xs={6} lg={4}>
                <Item>
                  <Box
                    component="ul"
                    aria-labelledby="category-c"
                    sx={{ pl: 2 }}
                  >
                    <li>Address</li>
                    <li>
                      {userInfo?.profile.address ? (
                        userInfo?.profile.address
                      ) : (
                        <Typography
                          component="p"
                          className="aTag"
                          onClick={routeToNextPage}
                        >
                          Add an address
                        </Typography>
                      )}
                    </li>
                  </Box>
                </Item>
              </Grid>
            </Grid>
            <Grid
              xs={12}
              container
              justifyContent="space-between"
              alignItems="center"
              flexDirection={{ xs: "column", sm: "row" }}
              sx={{ fontSize: "12px" }}
            ></Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
