import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Contact from "../feature/Contact";
import LoginInfo from "../feature/LoginInfo";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";
import Link from "@mui/material/Link";

const Item = styled("div")(({ theme }) => ({
  border: "none",
}));

const drawerWidth = 240;

export default function Profile() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        ></AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "#38b492",
              color: "white",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <List>
            {["Profile", "Personal", "Employment", "Journals"].map(
              (text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5">Personal</Typography>
            <Button variant="outlined" backgroundColor="#38b492">
              Save
            </Button>
          </Box>
          <Box>
            <Button>Message</Button>
            <Button>Archive Team member</Button>
          </Box>
          <Box sx={{ pt: 3, pb: 2 }}>
            <Typography variant="h5">Personal Details</Typography>
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
                <Grid container xs={12} md={7} lg={12} spacing={2}>
                  <Grid xs={6} lg={3}>
                    <Item>
                      <Box
                        component="ul"
                        aria-labelledby="category-a"
                        sx={{ pl: 2 }}
                      >
                        <li>Name</li>
                        <li>Emergency contact</li>
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
                        <li>Contact Details</li>
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
                        <li>Not specified</li>
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
                          <Link>Add a date of Birth</Link>
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
      </Box>
      <Box sx={{ pt: 3 }}>
        <Contact />
      </Box>
      <Box sx={{ pt: 3 }}>
        <LoginInfo />
      </Box>
    </>
  );
}
