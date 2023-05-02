import * as React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import Group919 from "../../assets/images/Group 919.png";

export default function LeaveEntitlement() {
  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", px: { md: 5, xs: 1 } }}
      >
        <Box
          sx={{
            bgcolor: "#FFFFFF",
            borderRadius: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 2,
            px: 3,
            mt: { md: 8, xs: 2 },
          }}
        >
          <Box>
            <Typography
              sx={{ color: "#131523", fontSize: "18px", fontWeight: 500 }}
            >
              Leave entitlements
            </Typography>
            <Typography sx={{ color: "#131523", fontSize: "12px", mt: "2px" }}>
              Leave types a team member is entitled to.
              <br /> This is determined by the leave conditions set in by the
              leave default pay detail.
            </Typography>
            <Typography
              sx={{
                color: "#2BB491",
                fontSize: "12px",
                cursor: "pointer",
                mt: "5px",
              }}
            >
              About leave entitlements
            </Typography>
          </Box>
          <Avatar
            src={Group919}
            sx={{ width: "181px", height: "140px", borderRadius: 0 }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 3,
          }}
        >
          <Box sx={{ px: 3 }}>
            <Typography
              sx={{ color: "#131523", fontSize: "18px", fontWeight: 500 }}
            >
              Leave
            </Typography>
            <Typography sx={{ color: "#131523", fontSize: "12px", mt: "2px" }}>
              You've 1 leaves in this month
            </Typography>
            <Typography
              sx={{
                color: "#2BB491",
                fontSize: "12px",
                cursor: "pointer",
                mt: "5px",
              }}
            >
              Check schedule
            </Typography>
          </Box>
          <Box
            sx={{
              bgcolor: "#E6F4EB",
              borderRadius: "19px",
              p: "10px 0px",
              width: "90px",
              textAlign: "center",
            }}
          >
            1
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 3,
          }}
        >
          <Box sx={{ px: 3 }}>
            <Typography
              sx={{ color: "#131523", fontSize: "18px", fontWeight: 500 }}
            >
              Leaves limit exceed
            </Typography>
            <Typography sx={{ color: "#131523", fontSize: "12px", mt: "2px" }}>
              You've more then 2 leaves in this month.
            </Typography>
            <Typography
              sx={{
                color: "#2BB491",
                fontSize: "12px",
                cursor: "pointer",
                mt: "5px",
              }}
            >
              Check leave policy
            </Typography>
          </Box>
          <Box
            sx={{
              bgcolor: "#F0142F",
              color: "white",
              borderRadius: "19px",
              p: "10px 0px",
              width: "90px",
              textAlign: "center",
            }}
          >
            12
          </Box>
        </Box>
      </Box>
    </>
  );
}
