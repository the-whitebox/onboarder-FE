import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Modal } from "@mui/material";
import LoginSidebar from "../feature/LoginSidebar";
import ForgotPassword from "./ForgotPassword";
import emailIcon from "../../assets/icons/email-icon.png";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import bg_image2 from "../../assets/images/bg-image2.png";
import { useNavigate } from "react-router-dom";

export default function Step2() {
  const Navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const goNext = () => {
    Navigate("/step3-1");
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ForgotPassword handleClose={handleClose} />
      </Modal>
      <Grid container sx={{ pb: { xs: 1, md: 0 } }}>
        <Grid item xl={3} lg={3} md={4} sm={12} xs={12}>
          <LoginSidebar handleOpen={handleOpen} />
        </Grid>
        <Grid
          item
          xl={9}
          lg={9}
          md={8}
          sm={12}
          xs={12}
          sx={{
            position: "relative",
            // height: { md: "auto", sm: "70vh", xs: "80vh" },
            minHeight: "100vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: { md: "flex-end", xs: "center" },
              mt: 5,
              mr: { md: 10, xs: 0 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ fontSize: "12px", mr: 2 }}>
                STEP 2 | VERIFY YOUR E-MAIL
              </Typography>
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  background: "#e6f4eb",
                  borderRadius: "100%",
                }}
              />
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  background: "#2bb491",
                  borderRadius: "100%",
                  ml: 1,
                }}
              />
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  background: "#e6f4eb",
                  borderRadius: "100%",
                  ml: 1,
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: { xl: 15, sm: 8, xs: 5 },
            }}
          >
            <Box
              sx={{
                background: "#e6f4eb",
                display: "flex",
                alignItems: "center",
                padding: "20px 50px 20px 20px",
                borderRadius: "40px 0px 0px 40px",
              }}
            >
              <CheckCircleOutlineIcon sx={{ color: "#2bb491" }} />
              <Typography sx={{ color: "#2bb491", fontSize: "12px", ml: 1 }}>
                VERIFICATION SUCCESSFULL
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              mt: { xl: 20, lg: 5, md: 5, sm: 5, xs: 5 },
            }}
          >
            <Avatar
              src={emailIcon}
              aria-label="Busy Man"
              sx={{
                width: "auto",
                height: "auto",
                padding: "0px",
                margin: "0px",
                borderRadius: 0,
                mb: { xs: 1, md: 1 },
              }}
            />
            <Typography
              sx={{ color: "#2bb491", textAlign: "center", fontSize: "18px" }}
            >
              Verification has been sent to your email address
            </Typography>
            <Typography
              sx={{
                background: "#354052",
                color: "white",
                fontSize: "10px",
                padding: "2px 8px",
                borderRadius: "20px",
                mt: 1,
              }}
            >
              CONFIRM YOUR IDENTIFICATION FROM YOUR EMAIL
            </Typography>
            <Box
              sx={{
                width: "260px",
                height: "15px",
                background: "#e1f2ec",
                padding: "2px 8px",
                borderRadius: "20px",
              }}
            ></Box>
            <Box
              sx={{
                width: "260px",
                height: "15px",
                background: "#fddce0",
                padding: "2px 8px",
                borderRadius: "20px",
              }}
            ></Box>
            <Button
              variant="contained"
              className="all-green-btns"
              sx={{
                color: "white",
                padding: "8px 40px",
                borderRadius: "10px",
                mt: "-30px",
                textTransform: "none",
              }}
              onClick={goNext}
            >
              Next
            </Button>
          </Box>
          <Box>
            <Typography
              sx={{
                width: "100%",
                fontSize: { md: "10px", xs: "5px" },
                textAlign: "center",
                zIndex: 9999,
                position: "absolute",
                bottom: 0,
                paddding: "0px 10px",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's <br />
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen
              book. <br />
              It has survived not only five centuries.
            </Typography>
            <Avatar
              src={bg_image2}
              aria-label="Busy Man"
              sx={{
                width: { xl: "400px", md: "250px", xs: "200px" },
                height: "auto",
                padding: "0px",
                margin: "0px",
                borderRadius: 0,
                position: "absolute",
                bottom: "1px",
                right: "0",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
