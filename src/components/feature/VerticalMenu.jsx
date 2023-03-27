import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../../style/General.css";
import { useNavigate } from "react-router-dom";

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

export default function VerticalMenu(props) {
  const [selectedIndex] = React.useState(props.indexToHL);
  // const handleListItemClick = (index: number) => {
  //   setSelectedIndex(index);
  // };

  // setSelectedIndex(props.indexToHL);

  const navigate = useNavigate();

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: "white",
        color: "black",
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 240,
        bgcolor: "#38B492",
        minHeight: "100vh",
        color: "#ffffff",
      }}
    >
      <StyledList
        sx={{
          pl: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: 250,
          }}
        >
          <Avatar
            className="avatar-size"
            // sx={{ width: "120px !important", height: 120 }}
            {...stringAvatar(
              `${props.userInfo?.first_name} ${props.userInfo?.last_name}`
            )}
          />
          <Typography
            component="h3"
            variant="body1"
            sx={{
              fontWeight: "Semi-Bold",
              fontSize: "20px",
              color: "#ffffff",
              mt: 2,
            }}
          >
            {props.userInfo?.profile.username}
          </Typography>
          <Typography
            component="h3"
            variant="body1"
            sx={{
              fontWeight: "Regular",
              fontSize: "16px",
              color: "#ffffff",
            }}
          >
            {props.userInfo?.role.role}
          </Typography>
          <Button
            type="submit"
            variant="contained"
            sx={{
              // mt: 4,
              // width: "89px",
              borderRadius: "5px",
              justifyContent: "center",
              backgroundColor: "#ffffff",
              color: "#38B492",
              fontSize: "12px",
              mt: 0.5,
            }}
          >
            Start unscheduled shift
          </Button>
        </Box>
        <Divider />
        <List sx={{ fontWeight: "900 !important", pl: "10px", mt: "5px" }}>
          Profile
        </List>
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={() => navigate("/profile")}
        >
          <ListItemText primary="Personal" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={() => navigate("/employment")}
        >
          <ListItemText primary="Employment" />
        </ListItemButton>

        <ListItemButton
          selected={selectedIndex === 2}
          // onClick={() => handleListItemClick(2)}
        >
          <ListItemText primary="Journals" />
        </ListItemButton>
        <List sx={{ fontWeight: "900 !important", pl: "10px", mt: "5px" }}>
          Scheduling
        </List>
        <ListItemButton
          selected={selectedIndex === 3}
          // onClick={() => handleListItemClick(3)}
        >
          <ListItemText primary="Shifts" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 4}
          // onClick={() => handleListItemClick(4)}
        >
          <ListItemText primary="Leave" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 5}
          // onClick={() => handleListItemClick(5)}
        >
          <ListItemText primary="Unavailability" />
        </ListItemButton>
        <List sx={{ fontWeight: "900 !important", pl: "10px", mt: "5px" }}>
          {" "}
          Activity
        </List>
        <ListItemButton
          selected={selectedIndex === 6}
          // onClick={() => handleListItemClick(6)}
        >
          <ListItemText primary="News feed" />
        </ListItemButton>
      </StyledList>
    </Box>
  );
}
