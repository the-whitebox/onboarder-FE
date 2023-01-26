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
import MaxPilotLogo from "../../assets/images/maxpilot-logo.png";
import Paper from "@mui/material/Paper";
import "../../style/AddNewPeople.css";
import styled from "@mui/system/styled";

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

const Item = styled("div")(({ theme }) => ({
  border: "none",
}));

export default function AddNewPeople() {
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
                  height: "10vh",
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
              pb: 2,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5" fontWeight="Bold">
              Add New People
            </Typography>
          </Box>
          <Box sx={{ pb: 2 }}>
            <Typography variant="h6" fontWeight="Bold">
              Invite with link
            </Typography>
          </Box>
          <Box sx={{ pt: 2, pb: 2 }}>
            <Typography paragraph>
              Share a link with your team to get them on to your MaxPilot
              workplace. You approve each request to keep your MaxPilot secure.
            </Typography>
          </Box>
          <Box sx={{ pt: 2, pb: 2, display: "flex" }}>
            <input type="text" />
            <Button sx={{ ml: 2 }} variant="contained" className="btn-color">
              Copy link
            </Button>
          </Box>
          <Box sx={{ pt: 2, pb: 2 }}>
            <Link>How invite links work</Link>
          </Box>
          <Box sx={{ pt: 2, pb: 2 }}>
            <Typography variant="h6" fontWeight="Bold">
              Add manually
            </Typography>
          </Box>
          <Box>
            <Typography variant="paragraph">These people work at:</Typography>
          </Box>
          <Box>
            <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
              <Select
                multiple
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
          <Box>
            <Typography variant="paragraph">
              Choose a location for you new people and then add as many as you
              want by typing their names and email addresses. You can always
              edit someones's details later, so don't worry if you can't
              remember everything.
            </Typography>
          </Box>
          <Box sx={{ pt: 2, pb: 2 }}>
            <Button variant="outlined">Import and Export a file</Button>
          </Box>
          <Box
            sx={{
              ml: 2,
              mr: 10,
              pt: 0.5,
              border: "1px solid",
              borderColor: "#ced7e0",
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid container xs={12} md={7} lg={12} spacing={2}>
                  <Grid xs={6} lg={4}>
                    <Item>
                      <Box component="ul" aria-labelledby="category-a">
                        <li>Name</li>
                        <li>Name</li>
                        <li>Name</li>
                        <li>Name</li>
                      </Box>
                    </Item>
                  </Grid>
                  <Grid xs={6} lg={4}>
                    <Item>
                      <Box
                        component="ul"
                        aria-labelledby="category-b"
                        sx={{ pl: 2 }}
                      >
                        <li>Email</li>
                        <li>Email</li>
                        <li>Email</li>
                        <li>Email</li>
                      </Box>
                    </Item>
                  </Grid>
                  <Grid xs={6} lg={4}>
                    <Item>
                      <Box
                        component="ul"
                        aria-labelledby="category-b"
                        sx={{ pl: 2 }}
                      >
                        <li>Phone Number</li>
                        <li>(Optional)</li>
                        <li>(Optional)</li>
                        <li>(Optional)</li>
                      </Box>
                    </Item>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box>
            <Typography>Send invitation Email?</Typography>
          </Box>
          <Box>
            <Button>Cancel</Button>
            <Button variant="contained" className="btn-color">
              Add People
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
