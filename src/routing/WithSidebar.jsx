import React from "react";
import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideBar from "../components/feature/VerticalMenu";

function WithSidebar() {
  return (
    <Grid container>
      <Grid item xl={3} lg={3} md={3} sm={4} xs={5}>
        <SideBar />
      </Grid>
      <Grid item xl={9} lg={9} md={9} sm={8} xs={7}>
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default WithSidebar;
