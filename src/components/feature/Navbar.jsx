import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MaxPilotLogo from "../../assets/images/maxpilot-logo.png";
import Avatar from "@mui/material/Avatar";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import GlobalContext from "../../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import { Badge, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import Person2Icon from "@mui/icons-material/Person2";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";

export default function Navbar() {
  const { userInfo } = React.useContext(GlobalContext);
  const Navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    Navigate("/");
  };

  return (
    <AppBar
      id="navbar"
      position="fixed"
      sx={{
        width: "100%",
        height: "9vh",
        boxSizing: "border-box",
        px: 3,
        background: "#ffffff",
        color: "black",
        boxShadow: "none",
        filter: "drop-shadow(0px 1px 2px rgba(21,34,50,0.08 ))",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            sx={{ width: "auto", height: "auto" }}
            variant="square"
            src={MaxPilotLogo}
          />
          <Box
            sx={{ width: "1px", height: "40px", bgcolor: "#707070", ml: 2 }}
          />
          <Typography sx={{ color: "#707070", ml: 2, fontSize: "12px" }}>
            Effortless Time Management
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            type="search"
            size="small"
            className="search-field"
            placeholder="search..."
            variant="standard"
            InputProps={{
              startAdornment: <SearchIcon sx={{ color: "#2BB491" }} />,
              disableUnderline: true,
            }}
            sx={{
              boxSizing: "border-box",
              p: "1px 10px 2px 10px",
              display: { md: "block", xs: "none" },
              borderRadius: "25px !important",
              border: "1px solid #2bb491 !important",
              outline: "none !important",
              height: "30px",
            }}
          />
          <Badge color="error" badgeContent={2} sx={{ mx: 3 }}>
            <NotificationsOutlinedIcon sx={{ color: "#2BB491" }} />
          </Badge>
          <Avatar alt="Remy Sharp" />
          <Box>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{ color: "#131523", textTransform: "none", ml: 1 }}
            >
              {userInfo?.first_name} {userInfo?.last_name}
            </Button>
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
                  mt: "30px",
                  borderRadius: "11px",
                  filter: "drop-shadow(0px 6px 3px rgba(21,34,50,0.08 ))",
                  width: { md: "350px", xs: "300px" },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <Typography
                sx={{
                  color: "#2BB491",
                  fontSize: "18px",
                  fontWeight: "600",
                  textAlign: "center",
                  mt: 1,
                  mb: 1,
                }}
              >
                Manage Profile
              </Typography>
              <Divider sx={{ mx: 2 }} />
              <Box sx={{ mt: 2, mb: 10 }}>
                <Typography sx={{ color: "#707070", ml: 2, px: 5 }}>
                  {userInfo?.first_name} {userInfo?.last_name}
                </Typography>
                <MenuItem onClick={handleClose} sx={{ px: 5 }}>
                  <ListItemIcon>
                    <TextSnippetOutlinedIcon sx={{ color: "black" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography sx={{ color: "#555555", fontSize: "15px" }}>
                      Account Overview
                    </Typography>
                    <Typography sx={{ color: "#555555", fontSize: "10px" }}>
                      Edit your Global Profile and manage billing
                    </Typography>
                  </Box>
                </MenuItem>
                <Typography sx={{ color: "#707070", mt: 3, ml: 5 }}>
                  Business Name
                </Typography>
                <MenuItem onClick={handleClose} sx={{ px: 5 }}>
                  <ListItemIcon>
                    <Person2Icon fontSize="small" sx={{ color: "black" }} />
                  </ListItemIcon>
                  <Typography sx={{ color: "#555555", fontSize: "15px" }}>
                    Profile
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{ px: 5 }}>
                  <ListItemIcon>
                    <CorporateFareIcon
                      fontSize="small"
                      sx={{ color: "black" }}
                    />
                  </ListItemIcon>
                  <Typography sx={{ color: "#555555", fontSize: "15px" }}>
                    Business
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{ px: 5 }}>
                  <ListItemIcon>
                    <CorporateFareIcon
                      fontSize="small"
                      sx={{ color: "black" }}
                    />
                  </ListItemIcon>
                  <Typography sx={{ color: "#555555", fontSize: "15px" }}>
                    Integration
                  </Typography>
                </MenuItem>
              </Box>
              <Divider sx={{ mx: 2 }} />
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  className="all-green-btns"
                  sx={{
                    mt: 2,
                    mb: 2,
                    textTransform: "none",
                    width: "60%",
                    height: 35,
                    borderRadius: "8px",
                  }}
                  onClick={handleLogout}
                >
                  Log Out
                </Button>
              </Box>
            </Menu>
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
}
