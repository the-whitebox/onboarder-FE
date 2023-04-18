import React from "react";
import { Avatar, Box, Button, Grid, Radio, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import groud808 from "../../assets/icons/Group 808.png";
import groud819 from "../../assets/icons/Group 819.png";

const style = {
  width: { md: "80%", xs: "95%" },
  height: "auto",
  position: "absolute",
  top: "5%",
  left: "50%",
  transform: "translate(-50%, 0%)",
  bgcolor: "background.paper",
  borderRadius: "8px ",
  boxShadow: 24,
  py: 3,
  px: 3,
  borderRadius: "39px",
  boxSizing: "border-box",
};

function BulkImportUpdateModal({ setShowModal1 }) {
  return (
    <>
      <Grid container sx={{ ...style, justifyContent: "center" }}>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <CloseIcon
            onClick={() => setShowModal1(false)}
            sx={{
              cursor: "pointer",
              background: "#2BB491",
              color: "white",
              borderRadius: "100%",
            }}
          />
        </Grid>
        <Grid
          xl={8}
          lg={8}
          md={8}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <FileOpenIcon
              sx={{
                color: "#2BB491",
                mr: 1,
              }}
            />
            <Typography sx={{ color: "#131523", fontWeight: 700 }}>
              Import or update team members via file
            </Typography>
          </Box>
          <Avatar
            src={groud808}
            sx={{ width: "150px", height: "140px", borderRadius: 0, mt: 1 }}
          />
          <Typography sx={{ color: "#354052", mt: 2 }}>
            What would you like to upload?
          </Typography>
          <Box
            sx={{
              mt: 1,
              bgcolor: "#E6F4EB",
              borderRadius: "15px",
              width: { sm: "350px", xs: "300px" },
              py: 3,
              px: 1,
              boxSizing: "border-box",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <Radio />
            <Box>
              <Typography sx={{ color: "#354052", fontSize: "12px" }}>
                Team Members Profile
              </Typography>
              <Typography sx={{ color: "#555555", fontSize: "11px" }}>
                Add new team members, update existing team members
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              mt: 1,
              bgcolor: "#E6F4EB",
              borderRadius: "15px",
              width: { sm: "350px", xs: "300px" },
              py: 3,
              px: 1,
              boxSizing: "border-box",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <Radio />
            <Box>
              <Typography sx={{ color: "#354052", fontSize: "12px" }}>
                Training
              </Typography>
              <Typography sx={{ color: "#555555", fontSize: "11px" }}>
                Add new training, assign/update team member's training
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              bgcolor: "#FAFAFA",
              borderRadius: "15px",
              py: 3,
              px: 3,
              mt: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                sx={{ color: "#354052", fontSize: "12px", fontWeight: 300 }}
              >
                Make sure your upload has the right format
                <br /> Enter your data into the template and upload to import or
                update your team members.
              </Typography>
              <Box sx={{ display: "flex", mt: 1 }}>
                <Typography
                  sx={{
                    color: "#2BB491",
                    mr: 3,
                    fontSize: "12px",
                    cursor: "pointer",
                  }}
                >
                  Export all team members data
                </Typography>
                <Typography
                  sx={{ color: "#2BB491", fontSize: "12px", cursor: "pointer" }}
                >
                  Download sample temple
                </Typography>
              </Box>
              <Typography sx={{ color: "#354052", fontSize: "12px", mt: 2 }}>
                Please Note: This import does not support all pay rates
              </Typography>
            </Box>
            <Avatar
              src={groud819}
              sx={{ width: "135px", height: "110px", borderRadius: 0 }}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              mt: 3,
            }}
          >
            <Typography
              sx={{ color: "#2BB491", fontSize: "12px", cursor: "pointer" }}
            >
              View previous import
            </Typography>
            <Button
              className="all-green-btns"
              variant="contained"
              sx={{ textTransform: "none", borderRadius: "6px" }}
              onClick={() => preventDefault()}
            >
              Continue
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default BulkImportUpdateModal;
