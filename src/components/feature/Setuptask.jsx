import React from "react";
import { Avatar, Box, Divider, ListItemIcon, Typography } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import icon1 from "../../assets/icons/Group 783.png";
import icon2 from "../../assets/icons/bug.png";
import icon3 from "../../assets/icons/play.png";
import icon4 from "../../assets/icons/Group 550.png";
import icon5 from "../../assets/icons/unlock.png";
import icon6 from "../../assets/icons/help-solid-badged.png";
import icon7 from "../../assets/icons/chat.png";

function Setuptask() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            border: "0.10000000149011612px solid rgb(112, 112, 112,0.5)",
            borderRadius: "11px",
            display: "flex",
            alignItems: "center",
            p: "0px 10px",
            height: "50px",
          }}
        >
          <Typography sx={{ color: "#354052" }}>Setup task</Typography>
          <Box
            sx={{
              bgcolor: "#e6f4eb",
              color: "#354052",
              ml: 2,
              borderRadius: "100%",
              fontSize: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              height: "30px",
            }}
          >
            24/7
          </Box>
        </Box>
        <Box
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            border: "0.5px solid rgb(43, 180, 145,0.5)",
            borderRadius: "11px",
            display: "flex",
            alignItems: "center",
            p: "0px 10px",
            height: "50px",
            ml: 1,
            cursor: "pointer",
          }}
        >
          <QuestionMarkIcon sx={{ color: "#2BB491", fontSize: "30px" }} />
        </Box>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              mt: -8,
              borderRadius: "11px",
              border: "1px solid rgb(43, 180, 145,0.2)",
              filter: "drop-shadow(0px 6px 3px rgba(21,34,50,0.08 ))",
              width: { md: "220px", xs: "220px" },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "bottom" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Avatar
                src={icon1}
                sx={{
                  width: "15px",
                  height: "15px",
                  borderRadius: 0,
                }}
              />
            </ListItemIcon>
            <Typography sx={{ color: "#555555", fontSize: "12px" }}>
              What's new
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Avatar
                src={icon2}
                sx={{
                  width: "15px",
                  height: "15px",
                  borderRadius: 0,
                }}
              />
            </ListItemIcon>
            <Typography sx={{ color: "#555555", fontSize: "12px" }}>
              Give us Feedback
            </Typography>
          </MenuItem>
          <Divider sx={{ mx: 2, boxSizing: "border-box" }} />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Avatar
                src={icon3}
                sx={{
                  width: "15px",
                  height: "15px",
                  borderRadius: 0,
                }}
              />
            </ListItemIcon>
            <Typography sx={{ color: "#555555", fontSize: "12px" }}>
              Learning center
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Avatar
                src={icon4}
                sx={{
                  width: "15px",
                  height: "15px",
                  borderRadius: 0,
                }}
              />
            </ListItemIcon>
            <Typography sx={{ color: "#555555", fontSize: "12px" }}>
              Book with an expert
            </Typography>
          </MenuItem>
          <Divider sx={{ mx: 2, boxSizing: "border-box" }} />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Avatar
                src={icon5}
                sx={{
                  width: "15px",
                  height: "15px",
                  borderRadius: 0,
                }}
              />
            </ListItemIcon>
            <Typography
              sx={{ color: "#555555", fontSize: "12px", display: "flex" }}
            >
              Allow Support Access{" "}
              <Box
                sx={{
                  bgcolor: "#2BB491",
                  borderRadius: "4px",
                  color: "white",
                  p: "0px 2px",
                  ml: 1,
                }}
              >
                ON
              </Box>
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Avatar
                src={icon6}
                sx={{
                  width: "15px",
                  height: "15px",
                  borderRadius: 0,
                }}
              />
            </ListItemIcon>
            <Typography sx={{ color: "#555555", fontSize: "12px" }}>
              Help and Support
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Avatar
                src={icon7}
                sx={{
                  width: "15px",
                  height: "15px",
                  borderRadius: 0,
                }}
              />
            </ListItemIcon>
            <Typography sx={{ color: "#555555", fontSize: "12px" }}>
              Chat with Customer Support
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
}

export default Setuptask;
