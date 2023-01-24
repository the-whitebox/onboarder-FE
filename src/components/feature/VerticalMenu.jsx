import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

const StyledList = styled(List)({
  // selected and (selected + hover) states
  "&& .Mui-selected, && .Mui-selected:hover": {
    backgroundColor: "white",
    borderRadius: "12px 0px 0px 12px",
    "&, & .MuiListItemIcon-root": {
      color: "#38B492",
    },
  },
  // hover states
  "& .MuiListItemButton-root:hover": {
    backgroundColor: "white",
    // borderRadius: "12px",
    "&, & .MuiListItemIcon-root": {
      color: "#38B492",
    },
  },
});

export default function SelectedListItem() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 240,
        bgcolor: "#38B492",
        height: "100vh",
        color: "#ffffff",
      }}
    >
      <StyledList
        // sx={{
        //   // selected and (selected + hover) states
        //   '&& .Mui-selected, && .Mui-selected:hover': {
        //     bgcolor: 'red',
        //     '&, & .MuiListItemIcon-root': {
        //       color: 'pink',
        //     },
        //   },
        //   // hover states
        //   '& .MuiListItemButton-root:hover': {
        //     bgcolor: 'orange',
        //     '&, & .MuiListItemIcon-root': {
        //       color: 'yellow',
        //     },
        //   },
        // }}
        sx={{
          pl: "10px",
        }}
      >
        <List sx={{ fontWeight: "900 !important", pl: "10px", mt: "5px" }}>
          {" "}
          Profile
        </List>
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={() => handleListItemClick(0)}
        >
          <ListItemText primary="Personal" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={() => handleListItemClick(1)}
        >
          <ListItemText primary="Employment" />
        </ListItemButton>

        <ListItemButton
          selected={selectedIndex === 2}
          onClick={() => handleListItemClick(2)}
        >
          <ListItemText primary="Journals" />
        </ListItemButton>
        <List sx={{ fontWeight: "900 !important", pl: "10px", mt: "5px" }}>
          {" "}
          Scheduling
        </List>
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={() => handleListItemClick(3)}
        >
          <ListItemText primary="Shifts" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 4}
          onClick={() => handleListItemClick(4)}
        >
          <ListItemText primary="Leave" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 5}
          onClick={() => handleListItemClick(5)}
        >
          <ListItemText primary="Unavailability" />
        </ListItemButton>
        <List sx={{ fontWeight: "900 !important", pl: "10px", mt: "5px" }}>
          {" "}
          Activity
        </List>
        <ListItemButton
          selected={selectedIndex === 6}
          onClick={() => handleListItemClick(6)}
        >
          <ListItemText primary="News feed" />
        </ListItemButton>
      </StyledList>
    </Box>
  );
}
