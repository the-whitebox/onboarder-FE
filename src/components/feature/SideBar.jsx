// import React from "react";
// import { slide as Menu } from "react-burger-menu";
// import Link from "@mui/material/Link";
// import { MenuItem } from "@mui/material";
// import "../../style/sideBar.css";

// export default (props) => {
//   return (
//     <Menu {...props}>
//       <Link
//         className="sidebar-links"
//         sx={{ textDecoration: "none", color: "white", mb: 1 }}
//         href="/"
//       >
//         Me
//       </Link>
//       <Link
//         className="sidebar-links"
//         sx={{
//           textDecoration: "none",
//           color: "white",
//           mb: 1,
//           backgroundColor: "black",
//         }}
//         href="/"
//       >
//         People
//       </Link>

//       <Link
//         className="sidebar-links"
//         sx={{ textDecoration: "none", color: "white", mb: 1 }}
//         href="/"
//       >
//         New Feed
//       </Link>
//       <Link
//         className="sidebar-links"
//         sx={{ textDecoration: "none", color: "white", mb: 1 }}
//         href="/"
//       >
//         Task
//       </Link>
//       <Link
//         className="sidebar-links"
//         sx={{ textDecoration: "none", color: "white", mb: 1 }}
//         href="/"
//       >
//         Locations
//       </Link>
//       <Link
//         className="sidebar-links"
//         sx={{ textDecoration: "none", color: "white", mb: 1 }}
//         href="/"
//       >
//         People
//       </Link>
//       <Link
//         className="sidebar-links"
//         sx={{ textDecoration: "none", color: "white", mb: 1 }}
//         href="/"
//       >
//         Timesheets
//       </Link>

//       <Link
//         className="sidebar-links"
//         sx={{ textDecoration: "none", color: "white", mb: 1 }}
//         href="/"
//       >
//         Reports{" "}
//       </Link>
//     </Menu>
//   );
// };

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "@mui/material/Link";
import "../../style/sideBar.css";
import zIndex from "@mui/material/styles/zIndex";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginTop: `${theme.mixins.toolbar.minHeight}px`,
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 0),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, height: "40px", zIndex: "100" }}>
        <IconButton
          sx={{ ml: 0 }}
          color="default"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <Drawer
        sx={{
          width: drawerWidth,
          position: "absolute",
          top: `${theme.mixins.toolbar.minHeight}px`,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List className="list">
          <Link
            className="sidebar-links"
            sx={{ textDecoration: "none", color: "white", mb: 1 }}
            href="/"
          >
            Me
          </Link>
          <Link
            className="sidebar-links"
            sx={{
              textDecoration: "none",
              color: "white",
              mb: 1,
            }}
          >
            People
          </Link>

          <Link
            className="sidebar-links"
            sx={{ textDecoration: "none", color: "#38b492", mb: 1 }}
            href="/"
          >
            New Feed
          </Link>
          <Link
            className="sidebar-links"
            sx={{ textDecoration: "none", color: "white", mb: 1 }}
            href="/"
          >
            Task
          </Link>
          <Link
            className="sidebar-links"
            sx={{ textDecoration: "none", color: "white", mb: 1 }}
            href="/"
          >
            Locations
          </Link>
          <Link
            className="sidebar-links"
            sx={{ textDecoration: "none", color: "white", mb: 1 }}
            href="/"
          >
            People
          </Link>
          <Link
            className="sidebar-links"
            sx={{ textDecoration: "none", color: "white", mb: 1 }}
            href="/"
          >
            Timesheets
          </Link>

          <Link
            className="sidebar-links"
            sx={{ textDecoration: "none", color: "white", mb: 1 }}
            href="/"
          >
            Reports{" "}
          </Link>
        </List>
        {/* <Divider /> */}
        <List></List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
