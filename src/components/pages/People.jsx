import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "../../style/People.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect, useState } from "react";
import BulkActions from "../feature/BulkActions";
import AddTeammemberModalBody from "../feature/AddTeammember";
import Modal from "@mui/material/Modal";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Navbar from "../feature/Navbar";
import GlobalContext from "../../context/GlobalContext";
import SetAccessLevelModalBody from "../feature/SetAccessLevel";
import ArchiveTeamMemberModalBody from "../feature/ArchiveTeammembers";
import SetAgreedHoursModalBody from "../feature/SetAgreedhours";
const modalWrapper = {
  overflow: "auto",
  display: "flex",
};
const theme = createTheme();

const columns = [
  {
    field: "first_name",
    headerName: "Name",
    minWidth: 100,
    flex: 1,
    hideable: false,
  },
  {
    field: "role",
    headerName: "Access",
    minWidth: 100,
    flex: 1,
    valueGetter: (params) => params.row.role.role,
  },
  {
    field: "last_name",
    headerName: "Main Location",
    minWidth: 100,
    flex: 1,
  },
  { field: "user_status", headerName: "Status", minWidth: 100, flex: 1 },
  { field: "email", headerName: "Email", minWidth: 100, flex: 1 },
  {
    field: "profile",
    headerName: "Mobile",
    minWidth: 100,
    flex: 1,
    valueGetter: (params) => params.row.profile.phone_number,
  },
  {
    field: "action",
    headerName: "Action",
    width: 100,

    renderCell: (params) => {
      // console.log(params);
      const [anchorEl, setAnchorEl] = React.useState(null);
      const open = Boolean(anchorEl);
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };

      const [openAccess, setOpenAccess] = React.useState(false);
      const handleOpenAccess = (data) => {
        setOpenAccess(true);
        console.log("data", data);
      };
      const handleCloseAccess = () => setOpenAccess(false);

      const [openArchive, setOpenArchive] = React.useState(false);
      const handleOpenArchive = () => setOpenArchive(true);
      const handleCloseArchive = () => setOpenArchive(false);

      const [openWorkPeriod, setOpenWorkPeriod] = React.useState(false);
      const handleOpenWorkPeriod = () => setOpenWorkPeriod(true);
      const handleCloseWorkPeriod = () => setOpenWorkPeriod(false);
      return (
        <>
          <Modal
            open={openAccess}
            onClose={handleCloseAccess}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <SetAccessLevelModalBody handleClose={handleCloseAccess} />
          </Modal>

          <Modal
            open={openArchive}
            onClose={handleCloseArchive}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <ArchiveTeamMemberModalBody handleClose={handleCloseArchive} />
          </Modal>

          <Modal
            open={openWorkPeriod}
            sx={modalWrapper}
            onClose={handleCloseWorkPeriod}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <SetAgreedHoursModalBody handleClose={handleCloseWorkPeriod} />
          </Modal>

          <Avatar
            sx={{
              backgroundColor: "#38B492",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={handleClick}
          >
            <Button>
              <MoreVertIcon
                sx={{ height: "20px", width: "20px", color: "white" }}
              />
            </Button>
          </Avatar>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleOpenWorkPeriod}>Agreed Hours</MenuItem>
            <MenuItem onClick={handleOpenAccess}>Access Level</MenuItem>
            <MenuItem onClick={handleOpenArchive}>Archive Team</MenuItem>
          </Menu>
        </>
      );
    },
  },
];

export default function People() {
  const { userInfo, setUserInfo } = React.useContext(GlobalContext);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const url = process.env.REACT_APP_BASE_URL;
  const [selectedTeamMembers, setSelectedTeamMembers] = useState([]);
  const [listOfTeamMembers, setListOfTeamMembers] = React.useState([]);

  const handleSelectionChange = (newSelection) => {
    setSelectedTeamMembers(newSelection);
  };

  const bulkAccessUpdate = (e) => {
    selectedTeamMembers.map((id) => {
      console.log(id);
      axios
        .patch(
          url + `/people/${id}/`,
          {
            role: 3,
            is_superuser: false,
            profile: {},
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };

  const bulkWorkPeriodUpdate = (e) => {
    selectedTeamMembers.map((id) => {
      axios
        .patch(
          url + `/people/${id}/`,
          {
            role: 4,
            is_superuser: false,
            working_hours: {},
            profile: {},
            hours_per_work_period: hours,
            next_work_period_day: netWorkPeriod,
            work_period_length: workPeriod,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };

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
      .get(`${url}/people/?business_id=${userInfo?.business.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setListOfTeamMembers(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (userInfo) {
      getBusiness();
    }
  }, [userInfo]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Navbar />
        <Grid
          direction="column"
          alignItems="center"
          sx={{
            minHeight: "100vh",
            border: "1px solid black",
          }}
        ></Grid>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", pl: 2, pr: 2 }}
        >
          <Toolbar />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 4,
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "Bold" }}>
              Personal
            </Typography>

            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
              <Button
                onClick={handleOpen}
                variant="contained"
                className="all-green-btns"
                sx={{
                  mr: 2,
                }}
              >
                Add People
              </Button>
            </FormControl>
          </Box>

          <Modal
            open={open}
            onClose={handleClose}
            sx={modalWrapper}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <AddTeammemberModalBody
              handleClose={handleClose}
              getBusiness={getBusiness}
            />
          </Modal>

          <Box display="flex" alignItems="center" className="pl-2">
            <BulkActions selectedTeamMembers={selectedTeamMembers} />
          </Box>

          <Box sx={{ pt: 3, pb: 2 }}>
            <Typography variant="h6" fontWeight="Bold">
              Personal Details
            </Typography>
          </Box>
          <Box
            sx={{
              height: "50%",
              width: "100%",
              pt: 0.5,
              display: "flex",
              flexGrow: 1,
            }}
          >
            <DataGrid
              rows={listOfTeamMembers}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
              selectionModel={selectedTeamMembers}
              onSelectionModelChange={handleSelectionChange}
              components={{
                Toolbar: GridToolbar,
              }}
            />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
