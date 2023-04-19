import * as React from "react";
import { Grid, Box, Typography, Avatar } from "@mui/material";
import ProfileSidebar from "../feature/ProfileSidebar";
import path1131 from "../../assets/icons/Path 1131.png";
import path1132 from "../../assets/icons/Path 1132.png";
import archive from "../../assets/icons/archive-f.png";
import icon1 from "../../assets/icons/Group 834.png";
import icon2 from "../../assets/icons/date-outline-badged.png";
import icon3 from "../../assets/icons/Path 1276.png";
import icon4 from "../../assets/icons/phone-alt.png";
import icon5 from "../../assets/icons/emailalt.png";
import icon6 from "../../assets/icons/location-arrow.png";
import icon7 from "../../assets/icons/address-book.png";
import icon8 from "../../assets/icons/two-factor-authentic.png";
import icon9 from "../../assets/icons/key-sharp.png";
import icon10 from "../../assets/icons/person-workspace.png";
import icon11 from "../../assets/icons/devices.png";
import Setuptask from "../feature/Setuptask";

export default function PersonalDetails() {
  return (
    <>
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
            pb: 0,
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
          sx={{ p: "30px 0px 20px 30px", boxSizing: "border-box" }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{ color: "#131523", fontSize: "20px", fontWeight: 500 }}
            >
              Personal Details
            </Typography>
            <Box
              sx={{
                bgcolor: "#E6F4EB",
                borderRadius: "12px",
                width: { md: "50%", xs: "100%" },
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                mt: 2,
                py: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Avatar
                  src={path1131}
                  sx={{ borderRadius: 0, width: "22px", height: "20px" }}
                />
                <Typography sx={{ color: "#555555", fontSize: "9px", mt: 1 }}>
                  Message
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Avatar
                  src={path1132}
                  sx={{ borderRadius: 0, width: "22px", height: "20px" }}
                />
                <Typography sx={{ color: "#555555", fontSize: "9px", mt: 1 }}>
                  Manage Login Issues
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Avatar
                  src={archive}
                  sx={{ borderRadius: 0, width: "22px", height: "20px" }}
                />
                <Typography sx={{ color: "#F0142F", fontSize: "9px", mt: 1 }}>
                  Archive Team Member
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
            {/* Box 1 */}
            <Box
              sx={{
                border: "1px solid rgb(33, 213, 155,0.5)",
                width: "260px",
                height: "130px",
                borderRadius: "15px",
                px: 3,
                py: 3,
                boxSizing: "border-box",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ color: "#131523", fontSize: "18px", fontWeight: 500 }}
                >
                  Name
                </Typography>
                <Avatar
                  src={icon1}
                  sx={{ width: "25px", height: "25px", borderRadius: 0 }}
                />
              </Box>
              <Typography sx={{ fontSize: "12px", color: "#131523", mt: 1 }}>
                Steve Holland
              </Typography>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
              >
                <Typography sx={{ color: "#555555", fontSize: "11px" }}>
                  Preferred name
                </Typography>
                <Typography sx={{ color: "#38A57D", fontSize: "11px" }}>
                  Steve
                </Typography>
              </Box>
            </Box>
            {/* Box 2 */}
            <Box
              sx={{
                border: "1px solid rgb(33, 213, 155,0.5)",
                width: "260px",
                height: "130px",
                borderRadius: "15px",
                px: 3,
                py: 3,
                boxSizing: "border-box",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ color: "#131523", fontSize: "18px", fontWeight: 500 }}
                >
                  Birthday
                </Typography>
                <Avatar
                  src={icon2}
                  sx={{ width: "25px", height: "25px", borderRadius: 0 }}
                />
              </Box>
              <Typography sx={{ fontSize: "12px", color: "#131523", mt: 2 }}>
                27 July, 1995
              </Typography>
            </Box>
            {/* Box 3 */}
            <Box
              sx={{
                border: "1px solid rgb(33, 213, 155,0.5)",
                width: "260px",
                height: "130px",
                borderRadius: "15px",
                px: 3,
                py: 3,
                boxSizing: "border-box",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ color: "#131523", fontSize: "18px", fontWeight: 500 }}
                >
                  Gender
                </Typography>
                <Avatar
                  src={icon3}
                  sx={{ width: "25px", height: "25px", borderRadius: 0 }}
                />
              </Box>
              <Typography sx={{ fontSize: "12px", color: "#131523", mt: 2 }}>
                Male
              </Typography>
            </Box>
            {/* Box 4 */}
            <Box
              sx={{
                border: "1px solid rgb(33, 213, 155,0.5)",
                width: "260px",
                height: "130px",
                borderRadius: "15px",
                px: 3,
                py: 3,
                boxSizing: "border-box",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ color: "#131523", fontSize: "18px", fontWeight: 500 }}
                >
                  Mobile
                </Typography>
                <Avatar
                  src={icon4}
                  sx={{ width: "25px", height: "25px", borderRadius: 0 }}
                />
              </Box>
              <Typography sx={{ fontSize: "12px", color: "#131523", mt: 2 }}>
                +92001234567
              </Typography>
            </Box>
            {/* Box 5 */}
            <Box
              sx={{
                border: "1px solid rgb(33, 213, 155,0.5)",
                width: "260px",
                height: "130px",
                borderRadius: "15px",
                px: 3,
                py: 3,
                boxSizing: "border-box",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ color: "#131523", fontSize: "18px", fontWeight: 500 }}
                >
                  Email
                </Typography>
                <Avatar
                  src={icon5}
                  sx={{ width: "25px", height: "25px", borderRadius: 0 }}
                />
              </Box>
              <Typography sx={{ fontSize: "12px", color: "#131523", mt: 2 }}>
                steve111@gmail.com
              </Typography>
            </Box>
            {/* Box 6 */}
            <Box
              sx={{
                border: "1px solid rgb(33, 213, 155,0.5)",
                width: "260px",
                height: "130px",
                borderRadius: "15px",
                px: 3,
                py: 3,
                boxSizing: "border-box",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ color: "#131523", fontSize: "18px", fontWeight: 500 }}
                >
                  Country Region
                </Typography>
                <Avatar
                  src={icon6}
                  sx={{ width: "25px", height: "25px", borderRadius: 0 }}
                />
              </Box>
              <Typography sx={{ fontSize: "12px", color: "#131523", mt: 2 }}>
                19 Millstream Place,
                <br /> Pimpama 4209, Queensland, Australia
              </Typography>
            </Box>
            {/* Box 7 */}
            <Box
              sx={{
                border: "1px solid rgb(33, 213, 155,0.5)",
                width: "260px",
                height: "130px",
                borderRadius: "15px",
                px: 3,
                py: 3,
                boxSizing: "border-box",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ color: "#131523", fontSize: "18px", fontWeight: 500 }}
                >
                  Emergency contact
                </Typography>
                <Avatar
                  src={icon7}
                  sx={{ width: "25px", height: "25px", borderRadius: 0 }}
                />
              </Box>
              <Typography sx={{ fontSize: "12px", color: "#131523", mt: 2 }}>
                Mr. Someone Special
              </Typography>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
              >
                <Typography sx={{ color: "#555555", fontSize: "11px" }}>
                  Contact details
                </Typography>
                <Typography sx={{ color: "#555555", fontSize: "11px" }}>
                  +92001234567
                </Typography>
              </Box>
            </Box>
            {/* Box 8 */}
            <Box
              sx={{
                border: "1px solid rgb(33, 213, 155,0.5)",
                width: "260px",
                height: "130px",
                borderRadius: "15px",
                px: 3,
                py: 3,
                boxSizing: "border-box",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ color: "#131523", fontSize: "18px", fontWeight: 500 }}
                >
                  2-Factor
                  <br />
                  authentication
                </Typography>
                <Avatar
                  src={icon8}
                  sx={{ width: "25px", height: "25px", borderRadius: 0 }}
                />
              </Box>
              <Typography sx={{ fontSize: "12px", color: "#131523", mt: 2 }}>
                Not Set up
              </Typography>
            </Box>
            {/* Box 9 */}
            <Box
              sx={{
                border: "1px solid rgb(33, 213, 155,0.5)",
                width: "260px",
                height: "130px",
                borderRadius: "15px",
                px: 3,
                py: 3,
                boxSizing: "border-box",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ color: "#131523", fontSize: "18px", fontWeight: 500 }}
                >
                  Kiosk PIN
                </Typography>
                <Avatar
                  src={icon9}
                  sx={{ width: "25px", height: "25px", borderRadius: 0 }}
                />
              </Box>
              <Typography sx={{ fontSize: "12px", color: "#2BB491", mt: 2 }}>
                Show
              </Typography>
            </Box>
            {/* Box 10 */}
            <Box
              sx={{
                border: "1px solid rgb(33, 213, 155,0.5)",
                width: "260px",
                height: "130px",
                borderRadius: "15px",
                px: 3,
                py: 3,
                boxSizing: "border-box",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ color: "#131523", fontSize: "18px", fontWeight: 500 }}
                >
                  Login username
                </Typography>
                <Avatar
                  src={icon10}
                  sx={{ width: "25px", height: "25px", borderRadius: 0 }}
                />
              </Box>
              <Typography sx={{ fontSize: "12px", color: "#131523", mt: 2 }}>
                steveholland247
              </Typography>
            </Box>
            {/* Box 11 */}
            <Box
              sx={{
                border: "1px solid rgb(33, 213, 155,0.5)",
                width: "260px",
                height: "130px",
                borderRadius: "15px",
                px: 3,
                py: 3,
                boxSizing: "border-box",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ color: "#131523", fontSize: "18px", fontWeight: 500 }}
                >
                  Device info
                </Typography>
                <Avatar
                  src={icon11}
                  sx={{ width: "25px", height: "25px", borderRadius: 0 }}
                />
              </Box>
              <Typography sx={{ fontSize: "12px", color: "#131523", mt: 2 }}>
                Not Installed
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "95%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Setuptask />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
