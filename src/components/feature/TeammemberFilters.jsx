import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";

const style = {
  width: { lg: "600px", sm: "500px", xs: "300px" },
  height: "auto",
  position: "absolute",
  top: { xl: "20%", sm: "5%" },
  left: "50%",
  transform: "translate(-50%, 0%)",
  bgcolor: "background.paper",
  borderRadius: "8px ",
  boxShadow: 24,
  borderRadius: "10px",
  boxSizing: "border-box",
  py: { sm: 4, xs: 2 },
  px: { sm: 4, xs: 2 },
};

export default function TeammemberFilters() {
  return (
    <>
      <Box sx={style}>
        <Typography
          sx={{
            color: "#a2a2a2",
            fontSize: "15px",
          }}
        >
          STATUS
        </Typography>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid item xs={12} sm={12} md={5.8} lg={5.8} xl={5.8} sx={{ mt: 2 }}>
            <Typography sx={{ color: "#131523", mb: "3px" }}>Status</Typography>
            <Select
              fullWidth
              name="select"
              displayEmpty
              size="small"
              variant="standard"
              disableUnderline
              sx={{
                "& .MuiSelect-select": {
                  p: "5px 15px 5px 15px",
                  background: "none",
                },
                "& .MuiSelect-select:focus": {
                  background: "none",
                },
                "& .MuiSelect-icon": { right: "5px" },
                borderRadius: "25px",
                border: "none !important",
                outline: "none !important",
                background: "#e6f4eb",
                boxSizing: "border-box",
              }}
            >
              <MenuItem>All</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={12} md={5.8} lg={5.8} xl={5.8} sx={{ mt: 2 }}>
            <Typography sx={{ color: "#131523", mb: "3px" }}>
              Invitations
            </Typography>
            <Select
              fullWidth
              name="select"
              displayEmpty
              size="small"
              variant="standard"
              disableUnderline
              sx={{
                "& .MuiSelect-select": {
                  p: "5px 15px 5px 15px",
                  background: "none",
                },
                "& .MuiSelect-select:focus": {
                  background: "none",
                },
                "& .MuiSelect-icon": { right: "5px" },
                borderRadius: "25px",
                border: "none !important",
                outline: "none !important",
                background: "#e6f4eb",
                boxSizing: "border-box",
              }}
            >
              <MenuItem>All</MenuItem>
            </Select>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid item xs={12} sm={12} md={5.8} lg={5.8} xl={5.8} sx={{ mt: 2 }}>
            <Typography sx={{ color: "#131523", mb: "3px" }}>
              Onboard Status
            </Typography>
            <Select
              fullWidth
              name="select"
              displayEmpty
              size="small"
              variant="standard"
              disableUnderline
              sx={{
                "& .MuiSelect-select": {
                  p: "5px 15px 5px 15px",
                  background: "none",
                },
                "& .MuiSelect-select:focus": {
                  background: "none",
                },
                "& .MuiSelect-icon": { right: "5px" },
                borderRadius: "25px",
                border: "none !important",
                outline: "none !important",
                background: "#e6f4eb",
                boxSizing: "border-box",
              }}
            >
              <MenuItem>All</MenuItem>
            </Select>
          </Grid>
        </Grid>

        <Typography
          sx={{
            color: "#a2a2a2",
            fontSize: "15px",
            mt: 3,
          }}
        >
          EMPLOYMENT
        </Typography>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid item xs={12} sm={12} md={5.8} lg={5.8} xl={5.8} sx={{ mt: 2 }}>
            <Typography sx={{ color: "#131523", mb: "3px" }}>
              Location
            </Typography>
            <Select
              fullWidth
              name="select"
              displayEmpty
              size="small"
              variant="standard"
              disableUnderline
              sx={{
                "& .MuiSelect-select": {
                  p: "5px 15px 5px 15px",
                  background: "none",
                },
                "& .MuiSelect-select:focus": {
                  background: "none",
                },
                "& .MuiSelect-icon": { right: "5px" },
                borderRadius: "25px",
                border: "none !important",
                outline: "none !important",
                background: "#e6f4eb",
                boxSizing: "border-box",
              }}
            >
              <MenuItem>All</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={12} md={5.8} lg={5.8} xl={5.8} sx={{ mt: 2 }}>
            <Typography sx={{ color: "#131523", mb: "3px" }}>
              Payroll ID
            </Typography>
            <Select
              fullWidth
              name="select"
              displayEmpty
              size="small"
              variant="standard"
              disableUnderline
              sx={{
                "& .MuiSelect-select": {
                  p: "5px 15px 5px 15px",
                  background: "none",
                },
                "& .MuiSelect-select:focus": {
                  background: "none",
                },
                "& .MuiSelect-icon": { right: "5px" },
                borderRadius: "25px",
                border: "none !important",
                outline: "none !important",
                background: "#e6f4eb",
                boxSizing: "border-box",
              }}
            >
              <MenuItem>All</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid item xs={12} sm={12} md={5.8} lg={5.8} xl={5.8} sx={{ mt: 2 }}>
            <Typography sx={{ color: "#131523", mb: "3px" }}>
              Training
            </Typography>
            <Select
              fullWidth
              name="select"
              displayEmpty
              size="small"
              variant="standard"
              disableUnderline
              sx={{
                "& .MuiSelect-select": {
                  p: "5px 15px 5px 15px",
                  background: "none",
                },
                "& .MuiSelect-select:focus": {
                  background: "none",
                },
                "& .MuiSelect-icon": { right: "5px" },
                borderRadius: "25px",
                border: "none !important",
                outline: "none !important",
                background: "#e6f4eb",
                boxSizing: "border-box",
              }}
            >
              <MenuItem>All</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={12} md={5.8} lg={5.8} xl={5.8} sx={{ mt: 2 }}>
            <Typography sx={{ color: "#131523", mb: "3px" }}>
              Training Expiry
            </Typography>
            <Select
              fullWidth
              name="select"
              displayEmpty
              size="small"
              variant="standard"
              disableUnderline
              sx={{
                "& .MuiSelect-select": {
                  p: "5px 15px 5px 15px",
                  background: "none",
                },
                "& .MuiSelect-select:focus": {
                  background: "none",
                },
                "& .MuiSelect-icon": { right: "5px" },
                borderRadius: "25px",
                border: "none !important",
                outline: "none !important",
                background: "#e6f4eb",
                boxSizing: "border-box",
              }}
            >
              <MenuItem>All</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid item xs={12} sm={12} md={5.8} lg={5.8} xl={5.8} sx={{ mt: 2 }}>
            <Typography sx={{ color: "#131523", mb: "3px" }}>
              Leave Type
            </Typography>
            <Select
              fullWidth
              name="select"
              displayEmpty
              size="small"
              variant="standard"
              disableUnderline
              sx={{
                "& .MuiSelect-select": {
                  p: "5px 15px 5px 15px",
                  background: "none",
                },
                "& .MuiSelect-select:focus": {
                  background: "none",
                },
                "& .MuiSelect-icon": { right: "5px" },
                borderRadius: "25px",
                border: "none !important",
                outline: "none !important",
                background: "#e6f4eb",
                boxSizing: "border-box",
              }}
            >
              <MenuItem>All</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={12} md={5.8} lg={5.8} xl={5.8} sx={{ mt: 2 }}>
            <Typography sx={{ color: "#131523", mb: "3px" }}>Access</Typography>
            <Select
              fullWidth
              name="select"
              displayEmpty
              size="small"
              variant="standard"
              disableUnderline
              sx={{
                "& .MuiSelect-select": {
                  p: "5px 15px 5px 15px",
                  background: "none",
                },
                "& .MuiSelect-select:focus": {
                  background: "none",
                },
                "& .MuiSelect-icon": { right: "5px" },
                borderRadius: "25px",
                border: "none !important",
                outline: "none !important",
                background: "#e6f4eb",
                boxSizing: "border-box",
              }}
            >
              <MenuItem>All</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid item xs={12} sm={12} md={5.8} lg={5.8} xl={5.8} sx={{ mt: 2 }}>
            <Typography sx={{ color: "#131523", mb: "3px" }}>
              Stress Profile
            </Typography>
            <Select
              fullWidth
              name="select"
              displayEmpty
              size="small"
              variant="standard"
              disableUnderline
              sx={{
                "& .MuiSelect-select": {
                  p: "5px 15px 5px 15px",
                  background: "none",
                },
                "& .MuiSelect-select:focus": {
                  background: "none",
                },
                "& .MuiSelect-icon": { right: "5px" },
                borderRadius: "25px",
                border: "none !important",
                outline: "none !important",
                background: "#e6f4eb",
                boxSizing: "border-box",
              }}
            >
              <MenuItem>All</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={12} md={5.8} lg={5.8} xl={5.8} sx={{ mt: 2 }}>
            <Typography sx={{ color: "#131523", mb: "3px" }}>
              2-Factors Authentication
            </Typography>
            <Select
              fullWidth
              name="select"
              displayEmpty
              size="small"
              variant="standard"
              disableUnderline
              sx={{
                "& .MuiSelect-select": {
                  p: "5px 15px 5px 15px",
                  background: "none",
                },
                "& .MuiSelect-select:focus": {
                  background: "none",
                },
                "& .MuiSelect-icon": { right: "5px" },
                borderRadius: "25px",
                border: "none !important",
                outline: "none !important",
                background: "#e6f4eb",
                boxSizing: "border-box",
              }}
            >
              <MenuItem>All</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid item xs={12} sm={12} md={5.8} lg={5.8} xl={5.8} sx={{ mt: 2 }}>
            <Typography sx={{ color: "#131523", mb: "3px" }}>
              Pay Rates
            </Typography>
            <Select
              fullWidth
              name="select"
              displayEmpty
              size="small"
              variant="standard"
              disableUnderline
              sx={{
                "& .MuiSelect-select": {
                  p: "5px 15px 5px 15px",
                  background: "none",
                },
                "& .MuiSelect-select:focus": {
                  background: "none",
                },
                "& .MuiSelect-icon": { right: "5px" },
                borderRadius: "25px",
                border: "none !important",
                outline: "none !important",
                background: "#e6f4eb",
                boxSizing: "border-box",
              }}
            >
              <MenuItem>All</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
