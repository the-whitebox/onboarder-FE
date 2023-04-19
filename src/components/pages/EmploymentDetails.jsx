import React, { useState } from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import ProfileSidebar from "../feature/ProfileSidebar";
import WorkDetails from "../feature/WorkDetails";
import WorkingHours from "../feature/WorkingHours";
import LeaveEntitlement from "../feature/LeaveEntitlement";

function EmploymentDetails() {
  const [tabs, setTabs] = useState("Work details");
  return (
    <Box id="employment">
      <Grid
        container
        sx={{
          overflowY: "scroll",
          maxHeight: "91vh",
          boxSizing: "border-box",
        }}
      >
        <Grid
          item
          xl={3}
          lg={3}
          md={3}
          sm={3}
          xs={3}
          sx={{
            border: "1px solid rgb(0, 0, 0,0.1)",
            borderRadius: "0px 45px 45px 0px",
            pt: 2,
            pb: 5,
            boxSizing: "border-box",
          }}
        >
          <ProfileSidebar />
        </Grid>
        <Grid
          item
          xl={9}
          lg={9}
          md={9}
          sm={9}
          xs={9}
          sx={{ p: "30px 30px 20px 30px", boxSizing: "border-box" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ color: "#131523", fontSize: "20px", fontWeight: 500 }}
            >
              Employment Details
            </Typography>
            <Button
              variant="contained"
              className="all-green-btns"
              sx={{ textTransform: "none" }}
            >
              Save
            </Button>
          </Box>
          <Box
            sx={{
              mt: 2,
              bgcolor: "#F6F6F6",
              minHeight: "90%",
              borderRadius: "28px",
              display: "flex",
            }}
          >
            <Box
              sx={{
                bgcolor: "#E6F4EB",
                width: "25%",
                minHeight: "100%",
                borderRadius: "28px 0px 0px 28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                className={tabs === "Work details" ? "typo active" : "typo"}
                onClick={() => setTabs("Work details")}
              >
                Work details
              </Typography>
              <Typography
                className={tabs === "Working hours" ? "typo active" : "typo"}
                onClick={() => setTabs("Working hours")}
              >
                Working hours
              </Typography>
              <Typography
                className={
                  tabs === "Leave entitlements" ? "typo active" : "typo"
                }
                onClick={() => setTabs("Leave entitlements")}
              >
                Leave entitlements
              </Typography>
            </Box>
            <Box sx={{ width: "75%" }}>
              {tabs === "Work details" ? <WorkDetails /> : <></>}
              {tabs === "Working hours" ? <WorkingHours /> : <></>}
              {tabs === "Leave entitlements" ? <LeaveEntitlement /> : <></>}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default EmploymentDetails;
