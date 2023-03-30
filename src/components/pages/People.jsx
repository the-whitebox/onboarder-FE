import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import CssBaseline from "@mui/material/CssBaseline";
import { styled, alpha } from "@mui/material/styles";
import MaxPilotLogo from "../../assets/images/maxpilot-logo.png";
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
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { MoreVert } from "../feature/MoreVert";
import IconButton from "@mui/material/IconButton";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SideBar from "../feature/SideBar";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import { SmallDashOutlined } from "@ant-design/icons";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SetAccessLevelModalBody from "../feature/SetAccessLevel";
import Link from "@mui/material/Link";
import InfoIcon from "@mui/icons-material/Info";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useForm } from "react-hook-form";
import FormControlLabel from "@mui/material/FormControlLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

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

// const [anchorEl, setAnchorEl] = React.useState(null);
// const openClick = Boolean(anchorEl);
// const handleClick = (event) => {
//   setAnchorEl(event.currentTarget);
// };
// const handleClickClose = () => {
//   setAnchorEl(null);
// };
// const [click, setClick] = React.useState(false);

// const clickClose = () => setClick(false);
// const handleClick = () => {
//   setClick(true);};

const drawerWidth = 2;

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
    width: 100,

    renderCell: (params) => {
      // const onClick = (e) => {
      //   e.stopPropagation();

      // };

      return (
        /*  Circled Icon on Table's last cloumn */
        <Avatar
          sx={{
            backgroundColor: "#38B492",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button>
            <MoreVertIcon
              sx={{ height: "20px", width: "20px", color: "white" }}
            />
            {/* <MoreVert/> */}
          </Button>
        </Avatar>
      );
    },
  },
];

export default function People() {
  const token = localStorage.getItem("token");

  const url = process.env.REACT_APP_BASE_URL;
  const [people, setPeople] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocattion] = useState("");
  const [otherLocation, setOtherLocattion] = useState("");
  const [businessId, setBusinessId] = useState();
  const [selectedModel, setSelectedModel] = useState([]);
  const [workPeriodError, setWorkPeriodError] = useState("");
  const [netWorkPeriodError, setNetWorkPeriodError] = useState("");
  const [hoursError, setHoursError] = useState("");

  const workPeriodValidation = () => {
    if (workPeriod == "") {
      setWorkPeriodError("Please enter work period length");
    } else setWorkPeriodError("");
  };

  const netWorkPeriodValidation = () => {
    if (netWorkPeriod == "") {
      setNetWorkPeriodError("Please enter start day");
    } else setNetWorkPeriodError("");
  };

  const hoursValidation = () => {
    if (hours == "") {
      setHoursError("Please enter hours per work period");
    } else setHoursError("");
  };

  const {
    register,
    formState: { errors },
  } = useForm();

  const bulkAccessUpdate = (e) => {
    console.log({ selectedModel });

    selectedModel.map((id) => {
      console.log(id);

      axios
        .patch(
          url + `/people/${id}/`,
          {
            role: selectedValue,
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
    selectedModel.map((id) => {
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

  const [listOfTeamMembers, setListOfTeamMembers] = React.useState([]);

  const handleSelectionModelChange = (newSelection) => {
    setSelectedModel(newSelection);
  };

  const [openWorkPeriod, setOpenWorkPeriod] = React.useState(false);
  const handleOpenWorkPeriod = () => setOpenWorkPeriod(true);
  const handleCloseWorkPeriod = () => setOpenWorkPeriod(false);

  const getBusiness = async () => {
    await axios
      .get(url + "/business/", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const ids = response.data.map((obj) => obj.id);
        setBusinessId(ids[0]);
        getBusinessById(ids[0]);
      })
      .catch((err) => console.log(err));
  };

  const getBusinessById = async (id) => {
    await axios
      .get(`${url}/people/?business_id=${id}`, {
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
    getBusiness();
  }, []);

  const [openAccess, setOpenAccess] = React.useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleOpenAccess = () => setOpenAccess(true);
  const handleCloseAccess = () => setOpenAccess(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [error, setError] = React.useState(null);

  const modalWrapper = {
    overflow: "auto",
    display: "flex",
  };

  const handleChange = (event) => {
    setPeople(event.target.value);
  };

  const [openATM, setOpenATM] = React.useState(false);

  const handleOpenATM = () => {
    setOpenATM(true);
  };
  const handleCloseATM = () => {
    setOpenATM(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    // border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    borderRadius: "12px",
    padding: "20px",
  };
  return (
    <ThemeProvider theme={theme}>
      <Modal
        open={openAccess}
        onClose={handleCloseAccess}
        onClick={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 370, height: 270 }}>
          <Typography
            variant="h5"
            sx={{ mt: 2, fontWeight: "bold", paddingBottom: 1 }}
            id="child-modal-title"
          >
            Set Access level
          </Typography>

          <div>
            <p className="team">2 Team members </p>
            <Typography sx={{ fontWeight: "bold", ml: "8px" }}>
              Access level
            </Typography>
            <FormControl
              error={error}
              sx={{
                width: 200,
                height: 5,
                padding: "5px  ",
              }}
            >
              <Select
                size="small"
                sx={{ borderRadius: "7px" }}
                displayEmpty
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
              >
                <MenuItem disabled value=""></MenuItem>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>System Administrator</MenuItem>
                <MenuItem value={2}>Supervisior</MenuItem>
                <MenuItem value={3}>Employee</MenuItem>
                <MenuItem value={4}>Location Manager</MenuItem>
                <MenuItem value={5}>Advisor</MenuItem>
              </Select>
              {error && <FormHelperText>Select a value</FormHelperText>}
            </FormControl>
          </div>
          <Button
            variant="primary"
            className="btn"
            sx={{
              ml: 34,
              borderRadius: "6px",
              width: "22%",
              bgcolor: "#38b492",
              color: "white",
              textTransform: "none",
              mt: 6,
            }}
            onClick={() => {
              // accessValidation();
              bulkAccessUpdate();
              // setError(!selectedValue)
            }}
          >
            Update
          </Button>
        </Box>
        {/* <SetAccessLevelModalBody /> */}
      </Modal>

      <Modal
        open={open}
        onClose={handleClose}
        sx={modalWrapper}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AddTeammemberModalBody
          businessId={businessId}
          handleClose={handleClose}
          getBusiness={getBusiness}
        />
      </Modal>

      <Modal
        open={openATM}
        onClose={handleCloseATM}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 550, height: 430 }}>
          <Box className="flex flex-row" sx={{ width: "500px" }}>
            <h2>Archive Team members</h2>
            {/* <CloseIcon onClick={handleClose} sx={{ mb: 6 }}></CloseIcon> */}
          </Box>

          <Box>
            <Typography sx={{ color: "#b4b4b4", ml: 1 }}>
              {listOfTeamMembers.length} Team members
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <InfoIcon
                sx={{
                  fontSize: "medium",
                  color: "Gray",
                  mt: "12px",
                  ml: "12px",
                }}
              />
              <Typography
                sx={{
                  ml: "5px",
                  pb: "15px",
                  mt: "10px",
                }}
              >
                Archiving these people will revoke their access to this
                organization and will no longer be able to login to any device
                but historical records will be retained.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography
                sx={{ pt: 2, pb: 2, mr: 1, pl: 2, fontWeight: "bold" }}
              ></Typography>

              <Typography sx={{ pt: 2, pb: 2, ml: 4, fontWeight: "bold" }}>
                Asher Muneer
              </Typography>
              <Typography sx={{ pt: 2, pb: 2, ml: 20, color: "#a1a1a1" }}>
                Ready to Archive
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ pt: 2, pb: 2, ml: 2, fontWeight: "bold" }}>
                ss
              </Typography>
              <Typography sx={{ pt: 2, pb: 2, ml: 6, fontWeight: "bold" }}>
                sss sss
              </Typography>
              <Typography sx={{ pt: 2, pb: 2, ml: 26, color: "#a1a1a1" }}>
                Ready to Archive
              </Typography>
            </Box>
          </Box>

          <Button
            className="button"
            sx={{
              textTransform: "none",
              ml: 35,
              borderRadius: "7px",
              mt: 4,
              width: "210px",
            }}
          >
            Archive Team members
          </Button>
        </Box>
      </Modal>
      <Modal
        open={openWorkPeriod}
        sx={modalWrapper}
        onClose={handleCloseWorkPeriod}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: 490,
            height: "auto",
          }}
        >
          <Box className="flex flex-row" sx={{ width: "100%" }}>
            <h2 className="set">Set agreed hours</h2>
            {/* <CloseIcon onClick={handleClose} sx={{ pb: "25px" }}></CloseIcon> */}
          </Box>
          <div>
            <Typography
              sx={{
                pt: "10px",
                fontWeight: "bold",
                color: "rgba(95, 91, 81, 0.518)",
              }}
            >
              Team members
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                mt: "20px",
                pb: "20px",
              }}
            >
              Work period
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", ml: "20px", pb: "15px" }}
            >
              Create a new work period{" "}
            </Typography>
            <Typography sx={{ ml: "20px", pb: "30px" }}>
              Saving this template will allow it to be used across any team
              member profile.
            </Typography>
            <Typography
              sx={{
                fontWeight: "Bold",
                fontSize: "large",
                ml: "20px",
                pb: "10px",
              }}
            >
              Work period length
            </Typography>

            <FormControl>
              <RadioGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  ml: "20px",
                  gap: 3,
                }}
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="radio-buttons-group"
                {...register("Work Period", { required: true })}
                onChange={(e) => setWorkPeriod(e.target.value)}
              >
                <FormControlLabel
                  value={1}
                  control={<Radio />}
                  label="Weekly"
                />
                <FormControlLabel
                  value={2}
                  control={<Radio />}
                  label="2-Weekly"
                />
                <FormControlLabel
                  value={3}
                  control={<Radio />}
                  label="4-Weekly"
                />
              </RadioGroup>
            </FormControl>
            <Box sx={{ ml: 3, mt: 1, mb: 1 }}>
              {errors.workPeriod?.type === "required" && "Work Period Required"}
              <small>
                {workPeriodError && (
                  <div
                    style={{
                      color: "red",
                    }}
                  >
                    {workPeriodError}
                  </div>
                )}
              </small>
            </Box>
            <Typography
              sx={{
                ml: "20px",
                fontWeight: "Bold",
                fontSize: "large",
                pb: "10px",
              }}
            >
              {" "}
              Next Work period starts on{" "}
            </Typography>

            <FormControl>
              <RadioGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,

                  ml: "20px",
                }}
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="radio-buttons-group"
                {...register("Work Period", { required: true })}
                onChange={(e) => setNetWorkPeriod(e.target.value)}
              >
                <FormControlLabel value={1} control={<Radio />} label="Mon" />
                <FormControlLabel value={2} control={<Radio />} label="Tue" />
                <FormControlLabel value={3} control={<Radio />} label="Wed" />
                <FormControlLabel value={4} control={<Radio />} label="Thu" />
                <FormControlLabel value={5} control={<Radio />} label="Fri" />
                <FormControlLabel value={6} control={<Radio />} label="Sat" />
                <FormControlLabel value={7} control={<Radio />} label="Sun" />
              </RadioGroup>
            </FormControl>
            <Box sx={{ ml: 3, mt: 1 }}>
              {errors.netWorkPeriod?.type === "required" &&
                "Work Period Required"}
              <small>
                {netWorkPeriodError && (
                  <div
                    style={{
                      color: "red",
                    }}
                  >
                    {netWorkPeriodError}
                  </div>
                )}
              </small>
            </Box>
            <Typography
              sx={{ fontWeight: "bold", pt: "15px", pb: "20px", ml: 3 }}
            >
              Hours per Work period
            </Typography>
            <FormControl
              size="small"
              sx={{ m: 1, width: 150 }}
              variant="outlined"
            >
              <OutlinedInput
                id="outlined-adornment-weight"
                endAdornment={
                  <InputAdornment position="end"> hours</InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
                placeholder="0"
                {...register("Hours", { required: true })}
                onChange={(e) => setHours(e.target.value)}
              />
            </FormControl>
          </div>
          <Box sx={{ ml: 3, mt: 1 }}>
            {errors.hours?.type === "required" && "Work Period Required"}
            <small>
              {hoursError && (
                <div
                  style={{
                    color: "red",
                  }}
                >
                  {hoursError}
                </div>
              )}
            </small>
          </Box>
          <Button
            className="btn btn-primary"
            sx={{
              ml: 45,
              borderRadius: "5px",
              width: "16%",
              textTransform: "none",
              mt: 3,
            }}
            onClick={() => {
              workPeriodValidation();
              netWorkPeriodValidation();
              hoursValidation();
              bulkWorkPeriodUpdate();
            }}
          >
            Save
          </Button>
        </Box>
      </Modal>
      <Box
        sx={{
          display: "flex",
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
            <Avatar
              sx={{ width: "140px", height: "70px", ml: 5 }}
              variant="square"
              src={MaxPilotLogo}
            ></Avatar>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                mr: 30,
                flexGrow: 1,
              }}
            >
              <Button
                sx={{
                  textTransform: "none",
                  borderRadius: "20px",
                  mr: 2,
                  color: "white",
                  bgcolor: "#f26a60",
                  fontSize: "0.8rem",
                }}
              >
                Me
              </Button>
              <Typography
                sx={{
                  mr: 2,
                  fontSize: "0.8rem",
                }}
              >
                News Feed
              </Typography>
              <Typography
                sx={{
                  mr: 2,
                  fontSize: "0.8rem",
                }}
              >
                Task
              </Typography>
              <Typography
                sx={{
                  mr: 2,
                  fontSize: "0.8rem",
                }}
              >
                Locations
              </Typography>
              <Typography
                sx={{
                  mr: 2,
                  fontSize: "0.8rem",
                }}
              >
                people
              </Typography>
              <Typography
                sx={{
                  mr: 2,
                  fontSize: "0.8rem",
                }}
              >
                Schedule
              </Typography>
              <Typography
                sx={{
                  mr: 2,
                  fontSize: "0.8rem",
                }}
              >
                TimeSheets
              </Typography>
              <Typography
                sx={{
                  mr: 2,
                  fontSize: "0.8rem",
                }}
              >
                Reports
              </Typography>
              <Typography
                sx={{
                  mr: 2,
                  fontSize: "0.8rem",
                }}
              >
                Enterprise
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column " }}>
              <Typography sx={{ fontSize: "0.9rem", mr: 1 }}>
                {" "}
                Danish Fareed{" "}
              </Typography>
              <Typography sx={{ ml: 5, fontSize: "0.8rem" }}>
                {" "}
                @Danish{" "}
              </Typography>
            </Box>
            <Avatar alt="Remy Sharp" />
            <Typography
              sx={{ ml: 2, bgcolor: "black", width: 2, height: 25 }}
            ></Typography>
            <IconButton
              size="medium"
              aria-label="show 17 new notifications"
              color="white"
            >
              <SettingsOutlinedIcon />
            </IconButton>

            <IconButton
              size="medium"
              aria-label="show 17 new notifications"
              color="white"
            >
              <FavoriteBorderIcon />
            </IconButton>

            <IconButton
              size="medium"
              aria-label="show 17 new notifications"
              color="white"
            >
              <NotificationsOutlinedIcon />
            </IconButton>
          </Box>
        </AppBar>

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
            {/* drop down menu of Right side of Screen with bulk */}

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Bulk Actions
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={people}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <Link
                    sx={{ textDecoration: "none" }}
                    onClick={handleOpenWorkPeriod}
                    color="#38b492"
                  >
                    Agreed hours
                  </Link>
                </MenuItem>

                <MenuItem>
                  {" "}
                  <Link
                    sx={{ textDecoration: "none" }}
                    onClick={handleOpenAccess}
                    color="#38b492"
                  >
                    Access level
                  </Link>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link
                    sx={{ textDecoration: "none" }}
                    onClick={handleOpenATM}
                    color="#38b492"
                  >
                    {" "}
                    Archive team{" "}
                  </Link>{" "}
                </MenuItem>
              </Select>
            </FormControl>
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
              selectionModel={selectedModel}
              onSelectionModelChange={handleSelectionModelChange}
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
