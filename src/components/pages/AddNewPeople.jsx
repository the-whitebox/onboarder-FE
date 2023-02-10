import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import MaxPilotLogo from "../../assets/images/maxpilot-logo-w.png";
// import Paper from "@mui/material/Paper";
import "../../style/AddNewPeople.css";
// import styled from "@mui/system/styled";
import { DataGrid } from "@mui/x-data-grid";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";

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

// const Item = styled("div")(({ theme }) => ({
//   border: "none",
// }));

const columns = [
  { field: "name", headerName: "Name", width: 200, editable: true },
  { field: "email", headerName: "Email", width: 200, editable: true },
  { field: "phone", headerName: "Phone number", width: 200, editable: true },
];

const rows = [
  {
    id: 1,
    name: "Asher",
    email: "Someemail@some.com",
    phone: 1234,
  },
  {
    id: 2,
    name: "Cersei",
    email: "Someemail@some.com",
    phone: 1234,
  },
  {
    id: 3,
    name: "Talha",
    email: "Someemail@some.com",
    phone: 1234,
  },
];

export default function AddNewPeople() {
  const [checked, setChecked] = React.useState(true);

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

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleOnChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
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
              pt: 5,
              pl: 2,
              pb: 2,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h4" fontWeight="Bold">
              Add New People
            </Typography>
          </Box>
          <Box sx={{ pb: 2, pl: 2 }}>
            <Typography variant="h6" fontWeight="Bold">
              Invite with link
            </Typography>
          </Box>
          <Box sx={{ pt: 2, pb: 2, pl: 2 }}>
            <Typography paragraph>
              Share a link with your team to get them on to your MaxPilot <br />
              workplace. You approve each request to keep your MaxPilot secure.
            </Typography>
          </Box>
          <Box sx={{ pt: 2, pb: 2, pl: 2, display: "flex" }}>
            <TextField size="small" />
            <Button
              sx={{ ml: 2, height: 30 }}
              variant="contained"
              className="btn-color"
            >
              Copy link
            </Button>
          </Box>
          <Box sx={{ pt: 2, pb: 2, pl: 2 }}>
            <Link sx={{ color: "#38b492", textDecoration: "none" }}>
              How invite links work
            </Link>
          </Box>
          <Box sx={{ pt: 2, pb: 2, pl: 2 }}>
            <Typography variant="h6" fontWeight="Bold">
              Add manually
            </Typography>
          </Box>
          <Box sx={{ pl: 2 }}>
            <Typography variant="paragraph">These people work at:</Typography>
          </Box>
          <Box sx={{ pl: 2 }}>
            <FormControl sx={{ width: 300, mt: 3 }}>
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
          <Box sx={{ pl: 2, pt: 1 }}>
            <Typography variant="paragraph">
              Choose a location for you new people and then add as many as you
              want by typing their names and email addresses. <br /> You can
              always edit someones's details later, so don't worry if you can't
              remember everything.
            </Typography>
          </Box>
          <Box sx={{ pt: 2, pb: 2, pl: 2 }}>
            <Button
              variant="contained"
              className="btn-color"
              sx={{ height: 30 }}
            >
              <AttachFileOutlinedIcon />
              Import and Export a file
            </Button>
          </Box>
          <Box
            sx={{
              height: 300,
              width: "100%",
              ml: 2,
              mr: 10,
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
          <Box sx={{ pt: 2, pl: 2, display: "flex" }}>
            <Typography color="#38b492">Send invitation Email?</Typography>
            <Switch
              checked={checked}
              onChange={handleOnChange}
              inputProps={{ "aria-label": "controlled" }}
              size="small"
              sx={{ color: "red" }}
            />
          </Box>
          <Box
            sx={{
              ml: 90,
            }}
          >
            <Button sx={{ color: "#38b492" }}>Cancel</Button>
            <Button
              sx={{ ml: 2, height: 30 }}
              variant="contained"
              className="btn-color"
            >
              Add People
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
