import * as React from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Modal from "@mui/material/Modal";
import AddLeaveEntitlementModalBody from "../feature/Addleaveentitlement";

const Item = styled("div")(({ theme }) => ({
  border: "none",
}));
const theme = createTheme();

export default function LeaveEntitlement() {
  const [openLeaveEntitlement, setOpenLeaveEntitlement] = React.useState(false);
  const handleOpenLeaveEntitlement = () => setOpenLeaveEntitlement(true);
  const handleCloseLeaveEntitlement = () => setOpenLeaveEntitlement(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Modal
          open={openLeaveEntitlement}
          onClose={handleCloseLeaveEntitlement}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <AddLeaveEntitlementModalBody />
        </Modal>
        <Grid sx={{ width: "100% !important", maxWidth: "100% !important" }}>
          <Box
            sx={{
              pt: 3,
              pb: 2,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" fontWeight="Bold">
              Leave Entitlements
            </Typography>
          </Box>
          <Box
            sx={{
              mt: 0,
              ml: 2,
              maxWidth: "88%",
              border: "1px solid",
              borderColor: "#ced7e0",
              borderRadius: "10px",
              bgcolor: "#ffffff",
              flexGrow: 1,
            }}
          >
            <Grid container xs={12} md={7} lg={12} spacing={2}>
              <Grid xs={6} lg={3}>
                <Item>
                  <Box
                    component="ul"
                    aria-labelledby="category-a"
                    sx={{ pl: 2 }}
                  >
                    <li>Leave Entitlements</li>
                    <li>
                      <Link
                        onClick={handleOpenLeaveEntitlement}
                        color="#38b492"
                      >
                        Add leave entitlements
                      </Link>
                    </li>
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </ThemeProvider>
    </>
  );
}
