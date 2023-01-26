import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import CssBaseline from "@mui/material/CssBaseline";
import { styled, alpha } from "@mui/material/styles";
import VerticalMenu from "../feature/VerticalMenu";
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
import { DataGrid } from "@mui/x-data-grid";
import { fontWeight } from "@mui/system";
import "../../style/People.css";
// import { getMaxListeners } from "process";

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

const drawerWidth = 240;

const columns = [
  { field: "name", headerName: "Name", width: 200 },
  { field: "connected", headerName: "Connected to", width: 200 },
  { field: "access", headerName: "Access", width: 200 },
  { field: "location", headerName: "Main Location", width: 200 },
  { field: "status", headerName: "Status", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "mobile", headerName: "Mobile", width: 200 },
];

const rows = [
  {
    id: 1,
    name: "Asher",
    access: "Advisor",
    location: "Talha's Professonal Service",
    status: "Employed",
    email: "Someemail@some.com",
    mobile: 1234,
  },
  {
    id: 2,
    name: "Cersei",
    access: "Supervisor",
    location: "Talha's Professonal Service",
    status: "Employed",
    email: "Someemail@some.com",
    mobile: 1234,
  },
  {
    id: 3,
    name: "Talha",
    access: "System Administrator",
    location: "Talha's Professonal Service",
    status: "Employed",
    email: "Someemail@some.com",
    mobile: 1234,
  },
];

export default function People() {
  const [people, setPeople] = React.useState("");

  const handleChange = (event) => {
    setPeople(event.target.value);
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
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
              border: "1px solid",
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
        <VerticalMenu />
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
          <Box display="flex" alignItems="center">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Filters />
            <Display />
            <BulkActions />
          </Box>
          <Box sx={{ pt: 3, pb: 2 }}>
            <Typography variant="h5">Personal Details</Typography>
          </Box>
          <Box
            sx={{
              height: 400,
              width: "100%",
              ml: 2,
              mr: 40,
              pt: 0.5,
            }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
