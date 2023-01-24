import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { NavLink } from "react-router-dom";

import Link from "@mui/material/Link";

export default function IconMenu() {
  const drawerWidth = 240;
  // const location = useLocation();

  // let CustomListItem = ({ to, primary }) => (
  //   <ListItem component={Link} to={to}>
  //     <ListItemButton selected={to === location.pathname}>
  //       <ListItemText primary={primary} />
  //     </ListItemButton>
  //   </ListItem>
  // );
  return (
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

      <List>
        <ListItem
          sx={{
            fontWeight: "bold",
            fontSize: "20px",
            pb: "0px !important",
            pl: "30px !important",
          }}
        >
          Profile
        </ListItem>
      </List>
      <List>
        {/* <NavLink
          to="../personal"
          className={({ isActive }) =>
            isActive ? "bg-green-500 font-bold" : "bg-red-500 font-thin"
          }
        >
          Personal
        </NavLink> */}
        {["Personal", "Employment", "Journals"].map((text, index) => (
          <ListItem
            key={text}
            sx={{ pt: "0px !important", pb: "0px !important" }}
          >
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <ListItem
          sx={{
            fontWeight: "bold",
            fontSize: "20px",
            pb: "0px !important",
            pl: "30px !important",
          }}
        >
          Scheduling
        </ListItem>
      </List>
      <List>
        {["Shifts", "Leaves", "Unavailability"].map((text, index) => (
          <ListItem
            key={text}
            sx={{ pt: "0px !important", pb: "0px !important" }}
          >
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <ListItem
          sx={{
            fontWeight: "bold",
            fontSize: "20px",
            pb: "0px !important",
            pl: "30px !important",
          }}
        >
          Activity
        </ListItem>
        <List>
          {["News Feed"].map((text, index) => (
            <ListItem
              key={text}
              sx={{ pt: "0px !important", pb: "0px !important" }}
            >
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </List>
    </Drawer>
  );
}
