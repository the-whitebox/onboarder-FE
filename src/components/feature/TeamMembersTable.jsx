import React, { useState } from "react";
import {
  Avatar,
  Box,
  Checkbox,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { HiOutlineFilter, HiCube } from "react-icons/hi";
import { BiEdit } from "react-icons/bi";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Pagination from "./Pagination";
import TeammemberFiltersModal from "../feature/TeammemberFilters";
import Setuptask from "./Setuptask";
const modalWrapper = {
  overflow: "auto",
  display: "flex",
};

const rows = [
  {
    id: "1",
    name: "Username1",
    connect: "Connected",
    access: "Access",
    main_location: "Main Location",
    status: "Status",
    email: "Email",
    mobile: "Mobile",
  },
  {
    id: "2",
    name: "Username2",
    connect: "Connected",
    access: "Access",
    main_location: "Main Location",
    status: "Status",
    email: "Email",
    mobile: "Mobile",
  },
  {
    id: "3",
    name: "Username3",
    connect: "Connected",
    access: "Access",
    main_location: "Main Location",
    status: "Status",
    email: "Email",
    mobile: "Mobile",
  },
  {
    id: "4",
    name: "Username4",
    connect: "Connected",
    access: "Access",
    main_location: "Main Location",
    status: "Status",
    email: "Email",
    mobile: "Mobile",
  },
  {
    id: "5",
    name: "Username5",
    connect: "Connected",
    access: "Access",
    main_location: "Main Location",
    status: "Status",
    email: "Email",
    mobile: "Mobile",
  },
  {
    id: "6",
    name: "Username6",
    connect: "Connected",
    access: "Access",
    main_location: "Main Location",
    status: "Status",
    email: "Email",
    mobile: "Mobile",
  },
  {
    id: "7",
    name: "Username7",
    connect: "Connected",
    access: "Access",
    main_location: "Main Location",
    status: "Status",
    email: "Email",
    mobile: "Mobile",
  },
  {
    id: "8",
    name: "Username8",
    connect: "Connected",
    access: "Access",
    main_location: "Main Location",
    status: "Status",
    email: "Email",
    mobile: "Mobile",
  },
  {
    id: "9",
    name: "Username9",
    connect: "Connected",
    access: "Access",
    main_location: "Main Location",
    status: "Status",
    email: "Email",
    mobile: "Mobile",
  },
  {
    id: "10",
    name: "Username10",
    connect: "Connected",
    access: "Access",
    main_location: "Main Location",
    status: "Status",
    email: "Email",
    mobile: "Mobile",
  },
  {
    id: "11",
    name: "Username11",
    connect: "Connected",
    access: "Access",
    main_location: "Main Location",
    status: "Status",
    email: "Email",
    mobile: "Mobile",
  },
  {
    id: "12",
    name: "Username12",
    connect: "Connected",
    access: "Access",
    main_location: "Main Location",
    status: "Status",
    email: "Email",
    mobile: "Mobile",
  },
  {
    id: "13",
    name: "Username13",
    connect: "Connected",
    access: "Access",
    main_location: "Main Location",
    status: "Status",
    email: "Email",
    mobile: "Mobile",
  },
  {
    id: "14",
    name: "Username14",
    connect: "Connected",
    access: "Access",
    main_location: "Main Location",
    status: "Status",
    email: "Email",
    mobile: "Mobile",
  },
  {
    id: "15",
    name: "Username15",
    connect: "Connected",
    access: "Access",
    main_location: "Main Location",
    status: "Status",
    email: "Email",
    mobile: "Mobile",
  },
];

const listItems = [
  { id: "1", name: "Main Location" },
  { id: "2", name: "Status" },
  { id: "3", name: "Email" },
  { id: "4", name: "Mobile" },
  { id: "5", name: "Stress Profile" },
  { id: "6", name: "Training" },
  { id: "7", name: "Pay Rates" },
  { id: "8", name: "Payroll ID" },
  { id: "9", name: "Leave Balance" },
  { id: "10", name: "Connected to" },
];

function TeamMembersTable() {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(rows?.map((data) => data.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };
  const handleCheckClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };
  const [checkListItems, setCheckListItems] = useState([
    { id: "1", value: true },
    { id: "2", value: true },
    { id: "3", value: true },
    { id: "4", value: true },
    { id: "5", value: false },
    { id: "6", value: false },
    { id: "7", value: false },
    { id: "8", value: false },
    { id: "9", value: false },
    { id: "10", value: true },
  ]);
  const handleCheckListItems = (e) => {
    const { id, checked } = e.target;
    setCheckListItems((prevItems) =>
      prevItems?.map((item) =>
        item.id === id ? { ...item, value: checked } : item
      )
    );
  };
  const [filteredItems, setFilteredItems] = useState();
  React.useEffect(() => {
    const filtered = checkListItems?.filter((items) => items.value === true);
    setFilteredItems(filtered);
  }, [checkListItems]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const [openTeamFilter, setOpenTeamFilter] = React.useState(false);
  const handleOpenTeamFilter = () => setOpenTeamFilter(true);
  const handleCloseTeamFilter = () => setOpenTeamFilter(false);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(rows.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = rows?.slice(startIndex, endIndex);

  return (
    <>
      <Modal
        open={openTeamFilter}
        onClose={handleCloseTeamFilter}
        sx={modalWrapper}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <TeammemberFiltersModal />
      </Modal>
      <Box sx={{ width: "100%", boxSizing: "border-box", pr: 3 }}>
        <Box
          sx={{
            mt: { xl: 2, xs: 2 },
            bgcolor: "white",
            boxShadow: 3,
            border: "0.5px solid #e4e4e4",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            py: 2,
            boxSizing: "border-box",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              type="search"
              size="small"
              placeholder="search team member..."
              variant="standard"
              InputProps={{
                startAdornment: <SearchIcon sx={{ color: "#2BB491" }} />,
                disableUnderline: true,
              }}
              sx={{
                p: "5px 10px 2px 10px",
                borderRadius: "25px",
                border: "none",
                outline: "none ",
                width: "270px",
                background: "#e6f4eb",
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                ml: "20px",
                cursor: "pointer",
              }}
              onClick={handleOpenTeamFilter}
            >
              <HiOutlineFilter
                style={{
                  fontSize: "20px",
                  background: "#e6f4eb",
                  color: "#2BB491",
                  padding: "5px",
                }}
              />
              <Typography
                sx={{ fontSize: "10px", color: "#A2A2A2", mt: "2px" }}
              >
                Filters
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                ml: "20px",
                cursor: "pointer",
              }}
            >
              <HiCube
                style={{
                  fontSize: "20px",
                  color: "#2BB491",
                  padding: "5px",
                }}
              />
              <Typography
                sx={{ fontSize: "10px", color: "#A2A2A2", mt: "2px" }}
              >
                Bulk Action
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              ml: "20px",
              cursor: "pointer",
            }}
          >
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              endIcon={<ArrowDropDownIcon />}
              sx={{
                color: "#a2a2a2",
                textTransform: "none",
                ml: 1,
                borderRadius: "5px",
                border: "0.10000000149011612px solid rgb(162, 162, 162,0.5)",
                py: "5px",
              }}
            >
              <BiEdit
                style={{
                  fontSize: "20px",
                  color: "#2BB491",
                }}
              />
            </Button>
            <Typography sx={{ color: "#A2A2A2", fontSize: "10px", mt: "2px" }}>
              List items
            </Typography>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  width: "180px",
                  mt: 2,
                  borderRadius: "10px",
                  boxShadow: 3,
                  filter: "drop-shadow(0px 6px 3px rgba(21,34,50,0.08 ))",
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              {listItems?.map((data) => (
                <MenuItem sx={{ p: 0 }} key={data.id}>
                  <Checkbox
                    size="small"
                    sx={{
                      "&.Mui-checked": {
                        color: "#2BB491",
                      },
                    }}
                    id={data.id}
                    name={data.name}
                    onChange={(e) => handleCheckListItems(e)}
                    checked={
                      filteredItems?.find((item) => item.id === data.id)
                        ? true
                        : false
                    }
                  />
                  {data.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
        <Box
          sx={{
            mt: 2,
            height: { xl: "680px" },
          }}
        >
          <TableContainer
            component={Paper}
            sx={{
              maxWidth: "100%",
              maxHeight: { xl: 690, sm: 560 },
              overflow: "scroll",
            }}
          >
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "#2BB491",
                        },
                      }}
                      name="selectAll"
                      id="selectAll"
                      onChange={handleSelectAll}
                      checked={isCheckAll}
                    />
                  </TableCell>
                  <TableCell align="start" sx={{ fontWeight: "bold" }}>
                    Name
                  </TableCell>
                  {checkListItems[9].value === true ? (
                    <TableCell
                      align="start"
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      Connect to
                    </TableCell>
                  ) : null}
                  <TableCell align="start" sx={{ fontWeight: "bold" }}>
                    Access
                  </TableCell>
                  {checkListItems[0].value === true ? (
                    <TableCell align="start" sx={{ fontWeight: "bold" }}>
                      Main Location
                    </TableCell>
                  ) : null}
                  {checkListItems[1].value === true ? (
                    <TableCell align="start" sx={{ fontWeight: "bold" }}>
                      Status
                    </TableCell>
                  ) : null}
                  {checkListItems[2].value === true ? (
                    <TableCell align="start" sx={{ fontWeight: "bold" }}>
                      Email
                    </TableCell>
                  ) : null}
                  {checkListItems[3].value === true ? (
                    <TableCell align="start" sx={{ fontWeight: "bold" }}>
                      Mobile
                    </TableCell>
                  ) : null}
                  {checkListItems[4].value === true ? (
                    <TableCell align="start" sx={{ fontWeight: "bold" }}>
                      Stress Profile
                    </TableCell>
                  ) : null}
                  {checkListItems[5].value === true ? (
                    <TableCell align="start" sx={{ fontWeight: "bold" }}>
                      Training
                    </TableCell>
                  ) : null}
                  {checkListItems[6].value === true ? (
                    <TableCell align="start" sx={{ fontWeight: "bold" }}>
                      Pay Rates
                    </TableCell>
                  ) : null}
                  {checkListItems[7].value === true ? (
                    <TableCell align="start" sx={{ fontWeight: "bold" }}>
                      Payroll ID
                    </TableCell>
                  ) : null}
                  {checkListItems[8].value === true ? (
                    <TableCell align="start" sx={{ fontWeight: "bold" }}>
                      Leave Balance
                    </TableCell>
                  ) : null}
                  <TableCell align="start"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentData?.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{
                      "&:last-child td, &:last-child th": {
                        border: 0,
                      },
                    }}
                  >
                    <TableCell>
                      <Checkbox
                        sx={{
                          "&.Mui-checked": {
                            color: "#2BB491",
                          },
                        }}
                        id={row.id}
                        name={row.name}
                        onChange={handleCheckClick}
                        checked={isCheck.includes(row.id)}
                      />
                    </TableCell>
                    <TableCell align="start">
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Avatar sx={{ width: "30px", height: "30px", mr: 1 }} />
                        <Typography>{row.name}</Typography>
                      </Box>
                    </TableCell>
                    {checkListItems[9].value === true ? (
                      <TableCell align="start">Connect to</TableCell>
                    ) : null}
                    <TableCell align="start">Access</TableCell>
                    {checkListItems[0].value === true ? (
                      <TableCell align="start">Main Location</TableCell>
                    ) : null}
                    {checkListItems[1].value === true ? (
                      <TableCell align="start">Status</TableCell>
                    ) : null}
                    {checkListItems[2].value === true ? (
                      <TableCell align="start">Email</TableCell>
                    ) : null}
                    {checkListItems[3].value === true ? (
                      <TableCell align="start">Mobile</TableCell>
                    ) : null}
                    {checkListItems[4].value === true ? (
                      <TableCell align="start">Stress Profile</TableCell>
                    ) : null}
                    {checkListItems[5].value === true ? (
                      <TableCell align="start">Training</TableCell>
                    ) : null}
                    {checkListItems[6].value === true ? (
                      <TableCell align="start">Pay Rates</TableCell>
                    ) : null}
                    {checkListItems[7].value === true ? (
                      <TableCell align="start">Payroll ID</TableCell>
                    ) : null}
                    {checkListItems[8].value === true ? (
                      <TableCell align="start">Leave Balance</TableCell>
                    ) : null}
                    <TableCell align="start">
                      <MoreHorizIcon sx={{ cursor: "pointer" }} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box
          sx={{
            width: "100%",
            mt: 3,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <Box sx={{ mr: 2 }}>
            <Setuptask />
          </Box>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            currentData={currentData}
            rows={rows}
          />
        </Box>
      </Box>
    </>
  );
}

export default TeamMembersTable;
