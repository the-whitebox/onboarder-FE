import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { TbMessageCircle } from "react-icons/tb";
import { Avatar } from "@mui/material";
import { Input } from "antd";

export default function Employment() {
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
        <Typography>Personal Details</Typography>
        <Button variant="outlined" sx={{ ml: 2 }}>
          Contact
        </Button>
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
          pl: 33,
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
            }}
          />
        </Box>

        <br />
        <Row>
          <Form.Label column lg={2}>
            Mobile
          </Form.Label>
          <Col>
            <Form.Control type="text" />
          </Col>
        </Row>
        <br />
        <Row>
          <Form.Label column="sm" lg={2}>
            Address
          </Form.Label>
          <Col>
            <Form.Control size="sm" type="text" />
          </Col>
        </Row>
        <br />
        <Row>
          <Form.Label column="lg" lg={2}>
            Postcode
          </Form.Label>
          <Col>
            <Form.Control size="lg" type="text" />
          </Col>
        </Row>
        <br />
        <Row>
          <Form.Label column lg={2}>
            City
          </Form.Label>
          <Col>
            <Form.Control type="text" />
          </Col>
        </Row>
        <br />
        <Row>
          <Form.Label column="sm" lg={2}>
            State
          </Form.Label>
          <Col>
            <Form.Control size="sm" type="text" />
          </Col>
        </Row>
        <br />
        <Row>
          <Form.Label column="lg" lg={2}>
            Country
          </Form.Label>
          <Col>
            <Form.Control size="lg" type="text" />
          </Col>
        </Row>
        <br />
        <Row>
          <Form.Label column lg={2}>
            Emergency contact name
          </Form.Label>
          <Col>
            <Form.Control type="text" />
          </Col>
        </Row>
        <br />
        <Row>
          <Form.Label column="sm" lg={2}>
            Emergency phone number
          </Form.Label>
          <Col>
            <Form.Control size="sm" type="text" />
          </Col>
        </Row>
      </Box>
      <Avatar sx={{ backgroundColor: "#38b492" }}>
        <TbMessageCircle />
      </Avatar>
    </>
  );
}
