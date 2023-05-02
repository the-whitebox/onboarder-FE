import React from "react";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import VerticalMenu from "../components/feature/VerticalMenu";

function WithVerticalMenu() {
  return (
    <Grid container>
      <Grid item xl={2.5} lg={3} md={3} sm={4} xs={5}>
        <VerticalMenu />
      </Grid>
      <Grid item xl={9.5} lg={9} md={9} sm={8} xs={7}>
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default WithVerticalMenu;
