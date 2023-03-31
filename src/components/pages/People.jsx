import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "../../style/People.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect, useState } from "react";
import BulkActions from "../feature/BulkActions";
import AddTeammemberModalBody from "../feature/AddTeammember";
import Modal from "@mui/material/Modal";
import Navbar from "../feature/Navbar";
const modalWrapper = {
  overflow: "auto",
  display: "flex",
};
const theme = createTheme();

const columns = [
  {
    field: "first_name",
    headerName: "Name",
    minWidth: 100,
    flex: 1,
    hideable: false,
  },
  {
    field: "role",
    headerName: "Access",
    minWidth: 100,
    flex: 1,
    valueGetter: (params) => params.row.role.role,
  },
  {
    field: "last_name",
    headerName: "Main Location",
    minWidth: 100,
    flex: 1,
  },
  { field: "user_status", headerName: "Status", minWidth: 100, flex: 1 },
  { field: "email", headerName: "Email", minWidth: 100, flex: 1 },
  {
    field: "profile",
    headerName: "Mobile",
    minWidth: 100,
    flex: 1,
    valueGetter: (params) => params.row.profile.phone_number,
  },
  {
    field: "action",
    headerName: "Action",
    width: 100,

    renderCell: (params) => {
      return (
        /*  Circled Icon on Table's last cloumn */
        <Avatar
          sx={{
            backgroundColor: "#38B492",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button>
            <MoreVertIcon
              sx={{ height: "20px", width: "20px", color: "white" }}
            />
            {/* <MoreVert/> */}
          </Button>
        </Avatar>
      );
    },
  },
];

export default function People() {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const url = process.env.REACT_APP_BASE_URL;
  const [businessId, setBusinessId] = useState();
  const [selectedModel, setSelectedModel] = useState([]);
  const [listOfTeamMembers, setListOfTeamMembers] = React.useState([]);
  const [selectedValue, setSelectedValue] = useState("");

  const bulkAccessUpdate = (e) => {
    selectedModel.map((id) => {
      console.log(id);

      axios
        .patch(
          url + `/people/${id}/`,
          {
            role: selectedValue,
            is_superuser: false,
            profile: {},
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };

  const bulkWorkPeriodUpdate = (e) => {
    selectedModel.map((id) => {
      axios
        .patch(
          url + `/people/${id}/`,
          {
            role: 4,
            is_superuser: false,
            working_hours: {},
            profile: {},
            hours_per_work_period: hours,
            next_work_period_day: netWorkPeriod,
            work_period_length: workPeriod,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };

  const handleSelectionModelChange = (newSelection) => {
    setSelectedModel(newSelection);
  };

  const getBusiness = async () => {
    await axios
      .get(url + "/business/", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const ids = response.data.map((obj) => obj.id);
        setBusinessId(ids[0]);
        getBusinessById(ids[0]);
      })
      .catch((err) => console.log(err));
  };

  const getBusinessById = async (id) => {
    await axios
      .get(`${url}/people/?business_id=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setListOfTeamMembers(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getBusiness();
  }, []);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Navbar />
        <Grid
          direction="column"
          alignItems="center"
          sx={{
            minHeight: "100vh",
            border: "1px solid black",
          }}
        ></Grid>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", pl: 2, pr: 2 }}
        >
          <Toolbar />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 4,
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "Bold" }}>
              Personal
            </Typography>

            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
              <Button
                onClick={handleOpen}
                variant="contained"
                className="btn-color"
                sx={{
                  mr: 2,
                }}
              >
                Add People
              </Button>
            </FormControl>
          </Box>

          <Modal
            open={open}
            onClose={handleClose}
            sx={modalWrapper}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <AddTeammemberModalBody
              businessId={businessId}
              handleClose={handleClose}
              getBusiness={getBusiness}
            />
          </Modal>

          <Box display="flex" alignItems="center" className="pl-2">
            <BulkActions listOfTeamMembers={listOfTeamMembers} />
          </Box>

          <Box sx={{ pt: 3, pb: 2 }}>
            <Typography variant="h6" fontWeight="Bold">
              Personal Details
            </Typography>
          </Box>
          <Box
            sx={{
              height: "50%",
              width: "100%",
              pt: 0.5,
              display: "flex",
              flexGrow: 1,
            }}
          >
            <DataGrid
              rows={listOfTeamMembers}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
              selectionModel={selectedModel}
              onSelectionModelChange={handleSelectionModelChange}
              components={{
                Toolbar: GridToolbar,
              }}
            />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
