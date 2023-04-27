import * as React from "react";
import {
  Box,
  Divider,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

export default function WorkingHours() {
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
            bgcolor: "#FFFFFF",
            borderRadius: "13px",
            py: 2,
            px: 3,
            mt: { xl: 10, sm: 3 },
            width: "80%",
          }}
        >
          <Typography
            sx={{ color: "#131523", fontSize: "14px", fontWeight: 300 }}
          >
            Keep track of your employee’s hours by setting up their regular work
            hours and choose how overtime applies.
          </Typography>
          <Typography
            sx={{
              color: "#2BB491",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: 300,
            }}
          >
            About agreed hours
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: { sm: 3, xl: 5 },
            width: "100%",
          }}
        >
          <Box>
            <Typography
              sx={{ color: "#131523", fontSize: "18px", fontWeight: 500 }}
            >
              Work Period
            </Typography>
            <Typography
              sx={{ color: "#131523", fontSize: "12px", mt: "2px", pr: 3 }}
            >
              The period used to calculate overtime. This overrides the defaults
              location setting.
            </Typography>
            <Typography
              sx={{
                color: "#2BB491",
                fontSize: "12px",
                cursor: "pointer",
                mt: "5px",
              }}
            >
              About work period
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
            <MenuItem>Select</MenuItem>
          </Select>
        </Box>
        <Divider
          sx={{ mt: { sm: 3, xl: 5 }, width: "100%", boxSizing: "border-box" }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: { sm: 3, xl: 5 },
            width: "100%",
          }}
        >
          <Box>
            <Typography
              sx={{ color: "#131523", fontSize: "18px", fontWeight: 500 }}
            >
              Hours per work period
            </Typography>
            <Typography
              sx={{ color: "#131523", fontSize: "12px", mt: "2px", pr: 3 }}
            >
              How many hours they are expected to work in the work period.
            </Typography>
            <Typography
              sx={{
                color: "#2BB491",
                fontSize: "12px",
                cursor: "pointer",
                mt: "5px",
              }}
            >
              About hours per work period
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#131523",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#2BB491",
                    width: "12px",
                    height: "12px",
                    borderRadius: "100%",
                    mr: "2px",
                    mb: "1px",
                  }}
                />
                Set regular working hours
              </Typography>
              <TextField
                type="text"
                name=""
                size="small"
                placeholder="Total hours per work period: 0"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="end">hours</InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiInput-input::placeholder": {
                    fontSize: { xs: "12px", xs: "10px" },
                  },
                  p: "5px 10px 2px 10px",
                  borderRadius: "25px",
                  border: "none",
                  outline: "none ",
                  background: "#e6f4eb",
                  boxSizing: "border-box",
                  mt: 1,
                  width: "210px",
                }}
              />
              <Typography
                sx={{
                  color: "#2BB491",
                  fontSize: "10px",
                  cursor: "pointer",
                  mt: "1px",
                  textAlign: "end",
                }}
              >
                Add regular working hours
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#131523",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#707070",
                    width: "12px",
                    height: "12px",
                    borderRadius: "100%",
                    mr: "2px",
                    mb: "1px",
                  }}
                />
                Set regular working hours
              </Typography>
              <Box sx={{ display: "flex" }}>
                <TextField
                  type="text"
                  name=""
                  size="small"
                  placeholder="0"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    endAdornment: (
                      <InputAdornment position="end">hours</InputAdornment>
                    ),
                  }}
                  sx={{
                    p: "5px 10px 2px 10px",
                    borderRadius: "25px",
                    border: "none",
                    outline: "none ",
                    background: "#e6f4eb",
                    boxSizing: "border-box",
                    mt: 1,
                    mr: 1,
                    width: "100px",
                  }}
                />
                <TextField
                  type="text"
                  name=""
                  size="small"
                  placeholder="0"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    endAdornment: (
                      <InputAdornment position="end">hours</InputAdornment>
                    ),
                  }}
                  sx={{
                    p: "5px 10px 2px 10px",
                    borderRadius: "25px",
                    border: "none",
                    outline: "none ",
                    background: "#e6f4eb",
                    boxSizing: "border-box",
                    mt: 1,
                    width: "100px",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Divider
          sx={{ mt: { xl: 5, sm: 3 }, width: "100%", boxSizing: "border-box" }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: { sm: 3, xl: 5 },
            width: "100%",
          }}
        >
          <Box>
            <Typography
              sx={{ color: "#131523", fontSize: "18px", fontWeight: 500 }}
            >
              Stress profile
            </Typography>
            <Typography
              sx={{ color: "#131523", fontSize: "12px", mt: "2px", pr: 3 }}
            >
              Scheduling rules such as maximum hours and minimum hours between
              shifts.
            </Typography>
            <Typography
              sx={{
                color: "#2BB491",
                fontSize: "12px",
                cursor: "pointer",
                mt: "5px",
              }}
            >
              About stress profile
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
            <MenuItem>Normal</MenuItem>
          </Select>
        </Box>
      </Box>
    </>
  );
}
