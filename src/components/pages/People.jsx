import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import CssBaseline from "@mui/material/CssBaseline";
import { styled, alpha } from "@mui/material/styles";
import MaxPilotLogo from "../../assets/images/maxpilot-logo-w.png";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Filters from "../feature/Filters";
import Display from "../feature/Display";
import BulkActions from "../feature/BulkActions";
import Timesheets from "../feature/Timesheets";
import { DataGrid, GridApi, GridToolbar } from "@mui/x-data-grid";
import { fontWeight } from "@mui/system";
import "../../style/People.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Modal from "@mui/material/Modal";
import AddTeammemberModalBody from "../feature/AddTeammember";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import { MoreVert } from "../feature/MoreVert";
import { useEffect, useState } from "react";


const theme = createTheme();

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const drawerWidth = 230;

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
    // valueGetter: (params) => params.row.,
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
    width: 120,
    renderCell: (params) => {
      // const onClick = (e) => {
      //   e.stopPropagation();

      // };

      return (
        <Avatar sx={{ backgroundColor: "#38B492", color: "#ffffff" }}>
          <MoreVertIcon>
            <MoreVert />
          </MoreVertIcon>
        </Avatar>
      );
    },
  },
];

// const rows = [
//   {
//     id: 1,
//     name: "Asher",
//     access: "Advisor",
//     location: "Talha's Professonal Service",
//     status: "Employed",
//     email: "Someemail@some.com",
//     mobile: 1234,
//   },
//   {
//     id: 2,
//     name: "Cersei",
//     access: "Supervisor",
//     location: "Talha's Professonal Service",
//     status: "Employed",
//     email: "Someemail@some.com",
//     mobile: 1234,
//   },
//   {
//     id: 3,
//     name: "Talha",
//     access: "System Administrator",
//     location: "Talha's Professonal Service",
//     status: "Employed",
//     email: "Someemail@some.com",
//     mobile: 1234,
//   },
// ];

export default function People() {
  const token = process.env.REACT_APP_TEMP_TOKEN;
  const url = process.env.REACT_APP_BASE_URL;
  const [people, setPeople] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocattion] = useState("");
  const [otherLocation, setOtherLocattion] = useState("");
  const [businessId, setBusinessId] = useState("");

  // console.log({ token, url });

  const [listOfTeamMembers, setListOfTeamMembers] = React.useState([]);

  let b_id = "";
  let team_array = [];
  const getBusiness = async () => {
    try {
      const response = await axios
        .get(url + "/business/", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response.data);
          const ids = response.data.map((obj) => obj.id);
          const firstId = ids[0];
          setBusinessId(firstId);
          b_id = firstId;
          // console.log("First Id: ", firstId);
        });

      // console.log({ businessId });

      const teamResponse = await axios.get(
        url + `/people/?business_id=${b_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const teamMembers = teamResponse.data;
      // console.log({ teamMembers });
      team_array = teamMembers;
      setListOfTeamMembers(teamMembers);

      // console.log({ listOfTeamMembers });
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getBusiness();
  }, []);

  // getBusiness();

  console.log("The rows", listOfTeamMembers);
  const rows = team_array;
  // console.log("The array of Objects: ", rows);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const modalWrapper = {
    overflow: "auto",
    display: "flex",
  };

  const handleChange = (event) => {
    setPeople(event.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
      <Modal
        open={open}
        onClose={handleClose}
        sx={modalWrapper}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AddTeammemberModalBody businessId={businessId} />
      </Modal>
      <Box
        sx={{
          display: "flex",
          // width: {
          //   xs: 100,
          //   sm: 600,
          //   md: 900,
          //   lg: 900,
          //   xl: 1500,
          // },
        }}
      >
        <CssBaseline />
        <AppBar
          style={{ background: "#ffffff", color: "black" }}
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <Box
            sx={{
              height: 80,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                mr: 2,
              }}
            >
              Me
            </Typography>
            <Typography
              sx={{
                mr: 2,
              }}
            >
              News Feed
            </Typography>
            <Typography
              sx={{
                mr: 2,
              }}
            >
              Task
            </Typography>
            <Typography
              sx={{
                mr: 2,
              }}
            >
              Locations
            </Typography>
            <Button
              variant="contained"
              className="btn-color"
              sx={{
                mr: 2,
              }}
            >
              People
            </Button>
            <Typography
              sx={{
                mr: 2,
              }}
            >
              Schedule
            </Typography>
            <Typography
              sx={{
                mr: 2,
              }}
            >
              TimeSheets
            </Typography>
            <Typography
              sx={{
                mr: 2,
              }}
            >
              Reports
            </Typography>
          </Box>
        </AppBar>
        <Grid
          direction="column"
          alignItems="center"
          sx={{
            backgroundColor: "#38b492",
            minHeight: "100vh",
          }}
        >
          {/* <Paper elevation={3} style={{ transform: "rotate(270deg)" }}>
            <img src={MaxPilotLogo} alt="my image" />
          </Paper> */}
          {/* <img src={MaxPilotLogo} alt="my image" /> */}
          <Avatar
            src={MaxPilotLogo}
            aria-label="Busy Man"
            sx={{
              height: "10vh",

              width: "230px",
            }}
            variant="square"
          />
        </Grid>

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: "Bold" }}>
              Personal
            </Typography>

            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
              <Button
                onClick={handleOpen}
                variant="contained"
                className="btn-color"
                sx={{
                  mr: 2,
                }}
              >
                Add People
              </Button>
            </FormControl>
          </Box>
          <Box display="flex" alignItems="center" className="pl-2">
            {/* <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Filters />
            <Display /> */}
            <BulkActions />
          </Box>
          <Box sx={{ pt: 3, pb: 2 }}>
            <Typography variant="h6" fontWeight="Bold">
              Personal Details
            </Typography>
          </Box>
          <Box
            sx={{
              height: "70%",
              width: "100%",
              ml: 2,
              mr: 40,
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
              onSelectionModelChange={(ids) => {
                console.log(ids);
              }}
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
