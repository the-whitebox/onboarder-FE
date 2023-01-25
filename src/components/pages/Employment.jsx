import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import VerticalMenu from "../feature/VerticalMenu";
import WorkingHours from "../feature/WorkingHours";
import LeaveEntitlement from "../feature/LeaveEntitlement";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";
import Link from "@mui/material/Link";

const Item = styled("div")(({ theme }) => ({
  border: "none",
}));

const drawerWidth = 240;

export default function Employment() {
  const indexToHL = 1;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <VerticalMenu indexToHL={indexToHL} />

        <Box component="main" sx={{ flexGrow: 1, bgcolor: "#fcfcfc", p: 3 }}>
          <Toolbar />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5">Employment Details</Typography>
            <Button variant="outlined" backgroundColor="#38b492">
              Save
            </Button>
          </Box>

          <Box sx={{ pt: 3, pb: 2 }}>
            <Typography variant="h5">Work Details</Typography>
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
                        <li>Deputy access level</li>
                        <li>Advisor</li>
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
                        <li>Worked at</li>
                        <li>Talha's professional services</li>
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
                        <li>Hired on</li>
                        <li>Wed 23/11/22</li>
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
                        <li>Training</li>
                        <li>
                          <Link>Add Training</Link>
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
          <Box sx={{ mt: 3, ml: 2, maxWidth: "80%" }}>
            <Box
              sx={{
                pt: 0.5,
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
                          <li>Payroll Id</li>
                          <li>
                            <Link>Add a payroll ID</Link>
                          </li>
                          <li>
                            <Link>View all rates and allowances</Link>
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
                          <li>Pay rate (Default)</li>
                          <li>
                            <Link>Set a pay rate</Link>
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
          </Box>
          <Box sx={{ pt: 3 }}>
            <WorkingHours />
          </Box>
          <Box sx={{ pt: 3 }}>
            <LeaveEntitlement />
          </Box>
        </Box>
      </Box>
    </>
  );
}
