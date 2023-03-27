import * as React from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Item = styled("div")(({ theme }) => ({
  border: "none",
}));

export default function Contact(props) {
  return (
    <>
      <Box sx={{ pt: 2, pb: 2 }}>
        <Typography variant="h5">Contact</Typography>
      </Box>
      <Box
        sx={{
          ml: 2,
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
                      {props.userInfo?.profile.email}
                      {/* <Link href="/personal_details" color="#38b492">
                        Add an email
                      </Link> */}
                    </li>
                    <li>Emergency contact</li>
                    <li>
                      {props.userInfo?.profile.emergency_contact_name}
                      {/* <Link href="/personal" color="#38b492">
                        Add an emergency contact
                      </Link> */}
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
                      {props.userInfo?.profile.phone_number}
                      {/* <Link href="/personal" color="#38b492">
                        Add a mobile
                      </Link> */}
                    </li>
                    <li>Contact Details</li>
                    <li>
                      <Link href="/personal_details" color="#38b492">
                        Add contact details
                      </Link>
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
                      {props.userInfo?.profile.address}
                      {/* <Link href="/personal" color="#38b492">
                        Add an address
                      </Link> */}
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
