import React, { useEffect, useState } from "react";
import { Grid, Typography, Box, Modal } from "@mui/material";
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
import AddTeammemberModalBody from "../feature/AddTeammember";
import GlobalContext from "../../context/GlobalContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BulkImportUpdateModal from "../feature/BulkImportUpdateModal";
import Cookies from "js-cookie";
const modalWrapper = {
  overflow: "auto",
  display: "flex",
};

function AddPeople() {
  const Navigate = useNavigate();
  const { userInfo, setUserInfo } = React.useContext(GlobalContext);
  const token = Cookies.get("token");
  const userId = Cookies.get("pk");
  const url = process.env.REACT_APP_BASE_URL;
  const [rows, setRows] = useState([]);
  const [skeleton, setSkeleton] = useState(true);

  useEffect(() => {
    const getLoggedInUserDetails = async () => {
      await axios
        .get(`${url}/people/${userId}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setUserInfo(response.data);
        })
        .catch((error) => console.log("Error", error));
    };
    getLoggedInUserDetails();
  }, []);

  const getBusiness = async () => {
    await axios
      .get(`${url}/people/?business_id=${userInfo?.business[0].id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setRows(response.data);
        setSkeleton(false);
      })
      .catch((err) => {
        setSkeleton(false);
      });
  };

  useEffect(() => {
    if (userInfo) {
      getBusiness();
    }
  }, [userInfo]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const [openAddTeam, setOpenAddTeam] = React.useState(false);
  const handleOpenAddTeam = () => setOpenAddTeam(true);
  const handleCloseAddTeam = () => setOpenAddTeam(false);
  const [showModal1, setShowModal1] = useState(false);
  const modal1Click = () => {
    setShowModal1(true);
    handleClose();
  };

  const routeToManuallyAdd = () => {
    Navigate("/team-members/add-people-manually");
    handleClose();
  };

  return (
    <>
      <Modal
        open={openAddTeam}
        onClose={handleCloseAddTeam}
        sx={modalWrapper}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AddTeammemberModalBody
          handleCloseAddTeam={handleCloseAddTeam}
          getBusiness={getBusiness}
        />
      </Modal>
      <Modal
        open={showModal1}
        onClose={() => setShowModal1(false)}
        sx={modalWrapper}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BulkImportUpdateModal setShowModal1={setShowModal1} />
      </Modal>
      <Grid
        container
        sx={{
          overflowY: "scroll",
          maxHeight: "91vh",
          p: "30px 0px 30px 30px",
          boxSizing: "border-box",
        }}
      >
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
                    width: "320px",
                    mt: "5px",
                    borderRadius: "11px",
                    border:
                      "0.10000000149011612px solid rgb(112, 112, 112,0.5)",
                    filter: "drop-shadow(0px 6px 3px rgba(21,34,50,0.08 ))",
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <Box sx={{ mt: 1, mb: 2 }}>
                  <MenuItem
                    onClick={handleClose}
                    sx={{
                      "&:hover": {
                        backgroundColor: "#E6F4EB !important",
                      },
                    }}
                  >
                    <ListItemIcon>
                      <FaUserPlus
                        style={{ color: "#2BB491", fontSize: "22px" }}
                      />
                    </ListItemIcon>
                    <Box onClick={handleOpenAddTeam}>
                      <Typography sx={{ color: "#555555", fontSize: "15px" }}>
                        Add New Team Member
                      </Typography>
                      <Typography sx={{ color: "#555555", fontSize: "10px" }}>
                        Quick and employees into MAXpilot
                      </Typography>
                    </Box>
                  </MenuItem>
                  <Divider sx={{ mx: 2 }} />
                  <MenuItem
                    onClick={routeToManuallyAdd}
                    sx={{
                      mt: 2,
                      "&:hover": {
                        backgroundColor: "#E6F4EB !important",
                      },
                    }}
                  >
                    <ListItemIcon>
                      <CgUserList
                        style={{ color: "black", fontSize: "22px" }}
                      />
                    </ListItemIcon>
                    <Typography sx={{ color: "#555555", fontSize: "15px" }}>
                      Add Multiple Team Members
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    sx={{
                      "&:hover": {
                        backgroundColor: "#E6F4EB !important",
                      },
                    }}
                  >
                    <ListItemIcon>
                      <MdImportExport
                        style={{ color: "black", fontSize: "22px" }}
                      />
                    </ListItemIcon>
                    <Typography sx={{ color: "#555555", fontSize: "15px" }}>
                      Import via integration
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={modal1Click}
                    sx={{
                      "&:hover": {
                        backgroundColor: "#E6F4EB !important",
                      },
                    }}
                  >
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
          <TeamMembersTable tableData={rows} skeleton={skeleton} />
        </Grid>
      </Grid>
    </>
  );
}

export default AddPeople;
