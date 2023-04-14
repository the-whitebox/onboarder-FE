import React from "react";
import { Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const handleClick = (event, pageNumber) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
  };
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {currentPage === 1 ? (
        <ArrowBackIosNewIcon
          sx={{ fontSize: "20px", cursor: "pointer", color: "gray" }}
        />
      ) : (
        <ArrowBackIosNewIcon
          sx={{ fontSize: "20px", cursor: "pointer" }}
          onClick={(event) => handleClick(event, currentPage - 1)}
        />
      )}
      <Select
        displayEmpty
        value={currentPage}
        sx={{
          m: "0px 15px 0px 15px",
          width: "100px",
          height: "40px",
        }}
      >
        {pageNumbers.map((number) => (
          <MenuItem
            value={number}
            onClick={(event) => handleClick(event, number)}
          >
            {number}
          </MenuItem>
        ))}
      </Select>
      {currentPage === totalPages ? (
        <ArrowForwardIosIcon
          sx={{ fontSize: "20px", cursor: "pointer", color: "gray" }}
        />
      ) : (
        <ArrowForwardIosIcon
          sx={{ fontSize: "20px", cursor: "pointer" }}
          onClick={(event) => handleClick(event, currentPage + 1)}
        />
      )}
    </Box>
  );
};

export default Pagination;
