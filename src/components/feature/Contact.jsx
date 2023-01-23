import * as React from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Item = styled("div")(({ theme }) => ({
  border: "none",
}));

export default function Contact() {
  return (
    <>
      <Box sx={{ pt: 5, pl: 33, pb: 2 }}>
        <Typography variant="h5">Contact</Typography>
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
            <Grid container xs={12} md={7} lg={12} spacing={4}>
              <Grid xs={6} lg={4}>
                <Item>
                  <Box
                    component="ul"
                    aria-labelledby="category-a"
                    sx={{ pl: 2 }}
                  >
                    <li>Email</li>
                    <li>
                      <Link>Add an email</Link>
                    </li>
                    <li>Emergency contact</li>
                    <li>
                      <Link>Add an emergency contact</Link>
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
                      <Link>Add a mobile</Link>
                    </li>
                    <li>Contact Details</li>
                    <li>
                      <Link>Add contact details</Link>
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
                      <Link>Add an address</Link>
                    </li>
                    <li></li>
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
