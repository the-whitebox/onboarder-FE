import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import { FaUserPlus } from "react-icons/fa";
import { CgUserList } from "react-icons/cg";
import { MdImportExport, MdCloudUpload } from "react-icons/md";
import TeamMembersTable from "../feature/TeamMembersTable";

function AddPeople() {
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
      <Grid container sx={{ overflowY: "scroll", height: "91vh", pb: 10 }}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PeopleAltIcon sx={{ color: "#2BB491", fontSize: "30px" }} />
              <Typography sx={{ color: "#354052", fontSize: "20px", ml: 1 }}>
                Team Members
              </Typography>
            </Box>
            <Box sx={{ mr: 3 }}>
              <Button
                variant="contained"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                endIcon={<AddCircleOutlineOutlinedIcon />}
                sx={{
                  color: "white",
                  textTransform: "none",
                  ml: 1,
                  borderRadius: "8px",
                  filter: "drop-shadow(0px 1px 2px rgba(21,34,50,0.08 ))",
                }}
                className="all-green-btns"
              >
                Add People
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
                    width: "300px",
                    px: 2,
                    mt: "5px",
                    borderRadius: "11px",
                    border: "0.5px solid #707070",
                    filter: "drop-shadow(0px 6px 3px rgba(21,34,50,0.08 ))",
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <Box sx={{ mt: 2, mb: 10 }}>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <FaUserPlus
                        style={{ color: "#2BB491", fontSize: "22px" }}
                      />
                    </ListItemIcon>
                    <Box>
                      <Typography sx={{ color: "#555555", fontSize: "15px" }}>
                        Add New Team Member
                      </Typography>
                      <Typography sx={{ color: "#555555", fontSize: "10px" }}>
                        Quick and employees into MAXpilot
                      </Typography>
                    </Box>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleClose} sx={{ mt: 2 }}>
                    <ListItemIcon>
                      <CgUserList
                        style={{ color: "black", fontSize: "22px" }}
                      />
                    </ListItemIcon>
                    <Typography sx={{ color: "#555555", fontSize: "15px" }}>
                      Add Multiple Team Members
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <MdImportExport
                        style={{ color: "black", fontSize: "22px" }}
                      />
                    </ListItemIcon>
                    <Typography sx={{ color: "#555555", fontSize: "15px" }}>
                      Import via integration
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <MdCloudUpload
                        style={{ color: "black", fontSize: "22px" }}
                      />
                    </ListItemIcon>
                    <Typography sx={{ color: "#555555", fontSize: "15px" }}>
                      Bulk Import and update
                    </Typography>
                  </MenuItem>
                </Box>
              </Menu>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <TeamMembersTable />
        </Grid>
      </Grid>
    </>
  );
}

export default AddPeople;
