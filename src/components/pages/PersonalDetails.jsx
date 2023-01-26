import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { TbMessageCircle } from "react-icons/tb";
import { Avatar } from "@mui/material";

export default function PersonalDetails() {
  return (
    <>
      <Box
        sx={{
          pt: 5,
          pl: 33,
        }}
      >
        <Link>Back to Profile</Link>
      </Box>
      <Box
        sx={{
          pt: 5,
          pl: 33,
          pb: 2,
          pr: 10,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5">Personal</Typography>
        <Button variant="outlined" backgroundColor="#38b492">
          Save
        </Button>
      </Box>
      <Box
        sx={{
          pl: 33,
          pb: 2,
        }}
      >
        <Typography variant="h6">Asher Muneer</Typography>
      </Box>
      <Box
        sx={{
          pl: 33,
          display: "flex",
        }}
      >
        <Button variant="outlined" sx={{ ml: 2 }}>
          Personal Details
        </Button>
        <Typography>Contact</Typography>
      </Box>
      <Box
        sx={{
          pl: 33,
          pb: 2,
        }}
      >
        <Typography variant="h6" fontSize="large" fontWeight="Bold">
          Contact
        </Typography>
      </Box>
      <Box
        sx={{
          pb: 2,
        }}
      >
        {/* <Row>
          <Form.Label column="lg" lg={2}>
            Email
          </Form.Label>
          <Col>
            <Form.Control size="lg" type="text" />
          </Col>
        </Row> */}
        <Box className="flex flex-row ">
          <Typography
            id="modal-modal-description"
            sx={{
              mr: 30,
              mt: 2,
              fontSize: 14,
            }}
          >
            Email
          </Typography>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            sx={{
              width: "300px",
              mr: 30,
            }}
          />
        </Box>

        <br />
        <Box className="flex flex-row ">
          <Typography
            id="modal-modal-description"
            sx={{
              mr: 30,
              mt: 2,
              fontSize: 14,
            }}
          >
            First Name
          </Typography>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            sx={{
              width: "300px",
              mr: 30,
            }}
          />
        </Box>
        <br />
        <Box className="flex flex-row ">
          <Typography
            id="modal-modal-description"
            sx={{
              mr: 30,
              mt: 2,
              fontSize: 14,
            }}
          >
            Last Name
          </Typography>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            sx={{
              width: "300px",
              mr: 30,
            }}
          />
        </Box>
        <br />
        <Box className="flex flex-row ">
          <Typography
            id="modal-modal-description"
            sx={{
              mr: 30,
              mt: 2,
              fontSize: 14,
            }}
          >
            Preferred Full Name
          </Typography>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            sx={{
              width: "300px",
              mr: 30,
            }}
          />
        </Box>
        <br />
        <Box className="flex flex-row ">
          <Typography
            id="modal-modal-description"
            sx={{
              mr: 30,
              mt: 2,
              fontSize: 14,
            }}
          >
            Pronouns
          </Typography>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            sx={{
              width: "300px",
              mr: 30,
            }}
          />
        </Box>
        <br />
        <Box className="flex flex-row ">
          <Typography
            id="modal-modal-description"
            sx={{
              mr: 30,
              mt: 2,
              fontSize: 14,
            }}
          >
            Date of Birth
          </Typography>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            sx={{
              width: "300px",
              mr: 30,
            }}
          />
        </Box>
      </Box>
      <Avatar sx={{ backgroundColor: "#38b492" }}>
        <TbMessageCircle />
      </Avatar>
    </>
  );
}
