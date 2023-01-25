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

export default function LeaveEntitlement() {
  return (
    <>
      <Box
        sx={{
          pt: 3,
          pb: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5">Leave Entitlements</Typography>
        <Avatar sx={{ backgroundColor: "#38b492" }}>
          <TbMessageCircle />
        </Avatar>
      </Box>
      <Box
        sx={{
          mt: 0,
          ml: 2,
          maxWidth: "80%",
          border: "1px solid",
          borderColor: "#ced7e0",
          borderRadius: "10px",
          bgcolor: "#ffffff",
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
                    <li>Leave Entitlements</li>
                    <li>
                      <Link>Add leave entitlements</Link>
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
