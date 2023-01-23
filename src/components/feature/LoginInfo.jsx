import * as React from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { TbMessageCircle } from "react-icons/tb";
import { Avatar } from "@mui/material";

const Item = styled("div")(({ theme }) => ({
  border: "none",
}));

export default function LoginInfo() {
  return (
    <>
      <Box sx={{ pt: 5, pl: 33, pb: 2 }}>
        <Typography variant="h5">Login Information</Typography>
      </Box>
      <Box
        sx={{
          ml: 35,
          mr: 40,
          pt: 0.5,
          border: "1px solid",
          borderColor: "#ced7e0",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid container xs={12} md={7} lg={12} spacing={2}>
              <Grid xs={6} lg={3}>
                <Item>
                  <Box
                    component="ul"
                    aria-labelledby="category-a"
                    sx={{ pl: 2 }}
                  >
                    <li>Kiosk PIN</li>
                    <li>
                      <Link>Show</Link>
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
                    <li>Login username</li>
                    <li>Amuneer</li>
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
                    <li>Device</li>
                    <li>Not-installed</li>
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
                    <li>2-Factor authentication</li>
                    <li>Not set up</li>
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
      <Box
        sx={{
          pt: 5,
          pl: 33,
          pr: 20,
          pb: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5">Login Information</Typography>

        <Avatar sx={{ backgroundColor: "#38b492" }}>
          <TbMessageCircle />
        </Avatar>
      </Box>
      <Box
        sx={{
          ml: 35,
          mr: 40,
          pt: 0.5,
          border: "1px solid",
          borderColor: "#ced7e0",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid container xs={12} md={7} lg={12} spacing={2}>
              <Grid xs={6} lg={3}>
                <Item>
                  <Box
                    component="ul"
                    aria-labelledby="category-a"
                    sx={{ pl: 2 }}
                  >
                    <li>Kiosk PIN</li>
                    <li>
                      <Link>Show</Link>
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
                    <li>Login username</li>
                    <li>Amuneer</li>
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
                    <li>Device</li>
                    <li>Not-installed</li>
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
                    <li>2-Factor authentication</li>
                    <li>Not set up</li>
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
