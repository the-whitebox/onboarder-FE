import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
  currentData,
  rows,
}) => {
  const handleClick = (event, pageNumber) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
  };
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography sx={{ color: "#A2A2A2", fontSize: "12px", mb: 1 }}>
        showing {currentData?.length} out of {rows?.length} users
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {currentPage === 1 ? (
          <ArrowBackIosNewIcon
            sx={{
              fontSize: "20px",
              color: "gray",
              backgroundColor: "#E6F4EB",
              borderRadius: "8px",
              p: "4px 10px",
            }}
          />
        ) : (
          <ArrowBackIosNewIcon
            sx={{
              fontSize: "20px",
              cursor: "pointer",
              backgroundColor: "#E6F4EB",
              borderRadius: "8px",
              p: "4px 10px",
            }}
            onClick={(event) => handleClick(event, currentPage - 1)}
          />
        )}
        <Select
          displayEmpty
          value={currentPage}
          variant="standard"
          disableUnderline
          sx={{
            "& .MuiSelect-select": {
              p: "3px 15px",
              background: "none",
            },
            m: "0px 15px 0px 15px",
            borderRadius: "8px",
            backgroundColor: "#E6F4EB",
            border: "none !important",
            outline: "none !important",
          }}
        >
          {pageNumbers?.map((number) => (
            <MenuItem
              value={number}
              onClick={(event) => handleClick(event, number)}
            >
              Page {number}
            </MenuItem>
          ))}
        </Select>
        {currentPage === totalPages ? (
          <ArrowForwardIosIcon
            sx={{
              fontSize: "20px",
              color: "gray",
              backgroundColor: "#E6F4EB",
              borderRadius: "8px",
              p: "4px 10px",
            }}
          />
        ) : (
          <ArrowForwardIosIcon
            sx={{
              fontSize: "20px",
              cursor: "pointer",
              backgroundColor: "#E6F4EB",
              borderRadius: "8px",
              p: "4px 10px",
            }}
            onClick={(event) => handleClick(event, currentPage + 1)}
          />
        )}
      </Box>
    </Box>
  );
};

export default Pagination;
