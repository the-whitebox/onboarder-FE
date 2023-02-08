import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import EmploymentType from "../feature/EmploymentType";
import PayRate from "../feature/PayRate";
import { Avatar } from "@mui/material";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import MaxPilotLogo from "../../assets/images/maxpilot-logo-w.png";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import "../../style/EmploymentDetails.css";
import { TbMessageCircle } from "react-icons/tb";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Modal from "@mui/material/Modal";
import AddleaveentitlementModalBody from "../feature/Addleaveentitlement";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "System Administrator",
  "Supervisor",
  "Employee",
  "Location Manager",
  "Advisor",
];

export default function EmploymentDetails() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [date, setDate] = React.useState(dayjs("2014-08-18T21:11:54"));

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleOnChange = (newValue) => {
    setDate(newValue);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <AddleaveentitlementModalBody />
        </Modal>
        <Grid sx={{ display: "flex" }}>
          <Grid
            container
            component="main"
            sx={{ height: "100vh", width: "240px" }}
          >
            <CssBaseline />
            <Grid
              className="max-width"
              item
              xs={false}
              sm={4}
              md={6}
              sx={{
                backgroundColor: "#38b492",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Grid>
                <Avatar
                  src={MaxPilotLogo}
                  aria-label="Busy Man"
                  sx={{
                    height: "16vh",
                    width: "230px",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid>
            <Box
              sx={{
                pt: 3,
                pl: 2,
              }}
            >
              <Link href="/profile" color="#38b492">
                Back to Profile
              </Link>
            </Box>
            <Box
              sx={{
                pl: 2,
                pt: 2,
                pb: 2,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: "Bold" }}>
                Personal
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#38b492",
                  color: "#ffffff",
                  ml: 80,
                }}
              >
                Save
              </Button>
            </Box>
            <Box sx={{ pb: 2, pl: 2 }}>
              <Typography variant="h6" fontWeight="Bold">
                Asher Muneer
              </Typography>
            </Box>
            <Box sx={{ pb: 2 }}>
              <Button
                className="btn-font-padding"
                variant="outlined"
                sx={{
                  ml: 2,
                  color: "#38b492",
                  border: "1px solid #38b492",
                  fontSize: 12,
                }}
              >
                Asher Muneer
              </Button>
              <Button href="#pay" sx={{ color: "#38b492", fontSize: 12 }}>
                Pay Details
              </Button>
              <Button href="#work" sx={{ color: "#38b492", fontSize: 12 }}>
                Working Hours
              </Button>
              <Button
                onClick={handleOpen}
                sx={{ color: "#38b492", fontSize: 12 }}
              >
                Leave Entitlements
              </Button>
            </Box>
            <Box sx={{ pt: 2, pb: 2, pl: 2 }}>
              <Typography variant="h6" fontWeight="Bold">
                Work Details
              </Typography>
            </Box>
            <Box sx={{ display: "flex", pl: 2 }}>
              <Typography variant="h6" fontWeight="Bold">
                Access Level
              </Typography>
              <FormControl sx={{ pl: 4, m: 1, width: 300, mt: 3 }}>
                <Select
                  multiple
                  size="small"
                  displayEmpty
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em>Select</em>;
                    }

                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ pt: 2, pb: 2, pl: 2 }}>
              <Typography paragraph>
                A set of permissions that control <br /> what a team member can
                do in <br />
                MaxPilot. About access levels
              </Typography>
            </Box>
            <Box sx={{ pt: 2, pb: 2, pl: 2, display: "flex" }}>
              <Typography variant="h6" fontWeight="Bold" id="work">
                Works at
              </Typography>
              <Typography sx={{ pl: 10 }} paragraph>
                Talha's professional service Primary location
              </Typography>
            </Box>
            <Box sx={{ pt: 2, pb: 2, pl: 2, display: "flex" }}>
              <Typography paragraph sx={{ pr: 2 }}>
                Locations where a team <br /> member can be scheduled.
              </Typography>
              <Button sx={{ color: "#38b492", fontSize: 12 }}>
                Add locations
              </Button>
            </Box>
            <Box sx={{ pt: 2, pb: 2, pl: 2, display: "flex" }}>
              <Typography variant="h6" fontWeight="Bold" sx={{ pr: 2 }}>
                Hired on
              </Typography>
              <Box sx={{ pl: 10 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Stack spacing={3}>
                    <DesktopDatePicker
                      inputFormat="MM/DD/YYYY"
                      value={date}
                      onChange={handleOnChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Stack>
                </LocalizationProvider>
              </Box>
            </Box>
            <Box sx={{ pt: 2, pb: 2, pl: 2, display: "flex" }}>
              <Typography variant="h6" fontWeight="Bold">
                Training
              </Typography>
              <Button sx={{ color: "#38b492", pl: 12, fontSize: 12 }}>
                Add training
              </Button>
            </Box>
            <Box sx={{ pt: 2, pb: 2, pl: 2 }}>
              <Typography paragraph>
                Training allows a team member <br /> to work in areas with
                training <br /> requirements.
                <Link sx={{ color: "#38b492", fontSize: 15 }}>
                  About training
                </Link>
              </Typography>
            </Box>
            <Box sx={{ pt: 2, pl: 2 }} id="pay">
              <Typography inline variant="h6" fontWeight="Bold">
                Pay Details
              </Typography>
              <EmploymentType />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <PayRate />
              <Grid
                container
                sx={{
                  pl: 10,
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "end",
                }}
              >
                <Avatar
                  className="messageCircle"
                  sx={{ backgroundColor: "#38b492" }}
                >
                  <TbMessageCircle />
                </Avatar>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
