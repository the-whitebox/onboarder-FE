import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import { useState } from "react";

import { styled } from "@mui/material/styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function SyncPayroll() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <Button onClick={handleShow}>Open Sync Modal</Button>
      <Modal
        backdrop="static"
        show={show}
        onHide={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 300 }}>
          <h2 id="child-modal-title">Sync Team member with payroll</h2>
          <div>
            <p>Asher Muneer</p>
            <p>Refresh the mapping of Team members between Deputy and Xero.</p>
            <br />
            <p>Asher Muneer</p>
          </div>
          <Button onClick={handleClose}>Sync Team member</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
