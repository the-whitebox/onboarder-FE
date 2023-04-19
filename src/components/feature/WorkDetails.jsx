import React from "react";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  Divider,
  TextField,
} from "@mui/material";

function WorkDetails() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: { md: 5, xs: 1 },
          pb: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 3,
            width: "100%",
          }}
        >
          <Box>
            <Typography
              sx={{ color: "#131523", fontSize: "18px", fontWeight: 500 }}
            >
              MAXPilot access level
            </Typography>
            <Typography sx={{ color: "#131523", fontSize: "12px", mt: "2px" }}>
              A set f permissions that control what a team member can do in
              MAXPilot.
            </Typography>
            <Typography
              sx={{
                color: "#2BB491",
                fontSize: "12px",
                cursor: "pointer",
                mt: "5px",
              }}
            >
              About access levels
            </Typography>
          </Box>
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
              "& .MuiSelect-icon": { right: "5px" },
              borderRadius: "25px",
              border: "none !important",
              outline: "none !important",
              background: "#e6f4eb",
              boxSizing: "border-box",
              width: "200px",
            }}
          >
            <MenuItem>FOH Staff</MenuItem>
          </Select>
        </Box>
        <Divider sx={{ mt: 3, width: "100%", boxSizing: "border-box" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 3,
            width: "100%",
          }}
        >
          <Box>
            <Typography
              sx={{ color: "#131523", fontSize: "18px", fontWeight: 500 }}
            >
              Work at
            </Typography>
            <Typography sx={{ color: "#131523", fontSize: "12px", mt: "2px" }}>
              Locations where a team member can be scheduled.
            </Typography>
            <Typography
              sx={{
                color: "#2BB491",
                fontSize: "12px",
                cursor: "pointer",
                mt: "5px",
              }}
            >
              Learn more about work at here
            </Typography>
          </Box>
          <Box>
            <TextField
              type="text"
              name=""
              size="small"
              placeholder="Location"
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              sx={{
                p: "5px 10px 2px 15px",
                borderRadius: "25px",
                border: "none",
                outline: "none ",
                background: "#e6f4eb",
                boxSizing: "border-box",
                mt: 1,
              }}
            />
            <Typography
              sx={{
                color: "#2BB491",
                fontSize: "12px",
                cursor: "pointer",
                mt: "5px",
                textAlign: "end",
              }}
            >
              Add Location
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            mt: 3,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ color: "#131523", fontSize: "16px", width: "150px" }}
          >
            Job Position
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
              "& .MuiSelect-icon": { right: "5px" },
              borderRadius: "25px",
              border: "none !important",
              outline: "none !important",
              background: "#e6f4eb",
              boxSizing: "border-box",
              width: "200px",
            }}
          >
            <MenuItem>No Job Position</MenuItem>
          </Select>
        </Box>
        <Box
          sx={{
            mt: 3,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ color: "#131523", fontSize: "16px", width: "150px" }}
          >
            Hired on
          </Typography>
          <TextField
            type="date"
            name=""
            size="small"
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            sx={{
              p: "5px 10px 2px 15px",
              borderRadius: "25px",
              border: "none",
              outline: "none ",
              background: "#e6f4eb",
              boxSizing: "border-box",
              width: "200px",
            }}
          />
        </Box>
        <Divider sx={{ mt: 3, width: "100%", boxSizing: "border-box" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 3,
            width: "100%",
          }}
        >
          <Box>
            <Typography
              sx={{ color: "#131523", fontSize: "18px", fontWeight: 500 }}
            >
              Training
            </Typography>
            <Typography sx={{ color: "#131523", fontSize: "12px", mt: "2px" }}>
              Training allows a team member to work in areas with training
              requirements.
            </Typography>
            <Typography
              sx={{
                color: "#2BB491",
                fontSize: "12px",
                cursor: "pointer",
                mt: "5px",
              }}
            >
              About Training
            </Typography>
          </Box>
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
              "& .MuiSelect-icon": { right: "5px" },
              borderRadius: "25px",
              border: "none !important",
              outline: "none !important",
              background: "#e6f4eb",
              boxSizing: "border-box",
              width: "200px",
            }}
          >
            <MenuItem>Add training</MenuItem>
          </Select>
        </Box>
        <Divider sx={{ mt: 3, width: "100%", boxSizing: "border-box" }} />
      </Box>
    </>
  );
}

export default WorkDetails;
