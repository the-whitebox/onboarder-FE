import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/system/Unstable_Grid";
import "../../style/General.css";
import { useNavigate } from "react-router-dom";
import styled from "@mui/system/styled";

const Item = styled("div")(({ theme }) => ({
  border: "none",
}));

function ProfileDetails({ userInfo }) {
  const Navigate = useNavigate();
  const routeToNextPage = (userInfo) => {
    Navigate("/personal_details", { state: userInfo });
  };
  return (
    <>
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
              <Grid xs={6} lg={3}>
                <Item>
                  <Box
                    component="ul"
                    aria-labelledby="category-a"
                    sx={{ pl: 2 }}
                  >
                    <li>Name</li>
                    <li>
                      {userInfo?.profile.full_name ? (
                        userInfo?.profile.full_name
                      ) : (
                        <Typography
                          component="p"
                          className="aTag"
                          onClick={() => routeToNextPage(userInfo)}
                        >
                          Add a name
                        </Typography>
                      )}
                    </li>
                  </Box>
                </Item>
              </Grid>
              <Grid xs={6} lg={3}>
                <Item>
                  <Box
                    component="ul"
                    aria-labelledby="category-b"
                    sx={{ pl: 2 }}
                  >
                    <li>Preferred name</li>
                    <li>
                      {userInfo?.profile.full_name ? (
                        userInfo?.profile.full_name
                      ) : (
                        <Typography
                          component="p"
                          className="aTag"
                          onClick={() => routeToNextPage(userInfo)}
                        >
                          Add a preferred name
                        </Typography>
                      )}
                    </li>
                  </Box>
                </Item>
              </Grid>
              <Grid xs={6} lg={3}>
                <Item>
                  <Box
                    component="ul"
                    aria-labelledby="category-c"
                    sx={{ pl: 2 }}
                  >
                    <li>Pronouns</li>
                    <li>
                      {userInfo?.profile.pronouns ? (
                        userInfo?.profile.pronouns
                      ) : (
                        <Typography component="p">Not Specified</Typography>
                      )}
                    </li>
                  </Box>
                </Item>
              </Grid>
              <Grid xs={6} lg={3}>
                <Item>
                  <Box
                    component="ul"
                    aria-labelledby="category-c"
                    sx={{ pl: 2 }}
                  >
                    <li>Date of Birth</li>
                    <li>
                      {userInfo?.profile.date_of_birth ? (
                        userInfo?.profile.date_of_birth
                      ) : (
                        <Typography
                          component="p"
                          className="aTag"
                          onClick={() => routeToNextPage(userInfo)}
                        >
                          Add a date of Birth
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

export default ProfileDetails;
