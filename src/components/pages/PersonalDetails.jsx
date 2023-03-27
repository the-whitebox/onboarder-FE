import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Tabs } from "@mui/material";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import MaxPilotLogo from "../../assets/images/maxpilot-logo-w.png";
import "../../style/General.css";
import "../../style/PersonalDetails.css";
import PropTypes from "prop-types";
import Tab from "@mui/material/Tab";
import PersonalDetailsForm from "../forms/PersonalDetailsForm";
import ContactForm from "../forms/ContactForm";

export default function PersonalDetails() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid sx={{ display: "flex" }}>
        <Grid
          container
          component="main"
          sx={{ minHeight: "100vh", width: "240px" }}
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
              flexBasis: "100% !important",
            }}
          >
            <Box
              component="img"
              sx={{
                height: 120,
                width: 250,
                maxHeight: { xs: 120, md: 120 },
                maxWidth: { xs: 250, md: 250 },
              }}
              alt="Max Pilot"
              src={MaxPilotLogo}
            />
          </Grid>
        </Grid>

        <Grid>
          <Box
            sx={{
              pl: 2,
              pt: 2,
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
              pr: 10,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "Bold" }}>
              Personal
            </Typography>
          </Box>
          <Box
            sx={{
              pl: 2,
              pb: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "Bold" }}>
              Asher Muneer
            </Typography>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider", ml: 2 }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Personal Details" {...a11yProps(0)} />
                <Tab label="Contact" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <PersonalDetailsForm />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ContactForm />
            </TabPanel>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
