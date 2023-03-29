import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";
import { Tabs } from "@mui/material";
import Grid from "@mui/material/Grid";
import "../../style/General.css";
import "../../style/PersonalDetails.css";
import PropTypes from "prop-types";
import Tab from "@mui/material/Tab";
import PersonalDetailsForm from "../forms/PersonalDetailsForm";
import ContactForm from "../forms/ContactForm";
import ChatIcon from "../feature/ChatIcon";
import SimpleSidebar from "../feature/SimpleSidebar";
import GlobalContext from "../../context/GlobalContext";

export default function PersonalDetails() {
  const { userInfo } = React.useContext(GlobalContext);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ position: "relative", minHeight: "100vh" }}>
        <Grid sx={{ display: "flex" }}>
          <Grid item lg={4} md={6} sm={4} xs={2}>
            <SimpleSidebar />
          </Grid>
          <Grid item lg={8} md={6} sm={8} xs={10}>
            <Box
              sx={{
                pl: 2,
                pt: 2,
              }}
            >
              <Link to="/profile" className="aTag">
                Back to Profile
              </Link>
            </Box>
            <Box
              sx={{
                pl: 2,
                pt: 2,
                pb: 1,
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
                {userInfo?.first_name} {userInfo?.last_name}
              </Typography>
            </Box>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider", ml: 2 }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor="#38b492 !important"
                  TabIndicatorProps={{
                    sx: {
                      backgroundColor: "#38b492",
                    },
                  }}
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
      </Box>
      <ChatIcon />
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
