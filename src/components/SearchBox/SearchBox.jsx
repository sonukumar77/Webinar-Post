import React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));

const SearchBox = ({ handleSearch, searchKey }) => {
  return (
    <Search
      sx={{
        backgroundColor: "white",
        border: "1px solid #E6EAED",
        padding: 0.8,
        display: "flex",
        alignItems: "center",
        borderRadius: "15px",
      }}
    >
      <SearchIconWrapper>
        <SearchIcon sx={{ color: "gray" }} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search for webinar"
        onChange={handleSearch}
        onKeyDown={handleSearch}
        value={searchKey}
      />
    </Search>
  );
};

export default React.memo(SearchBox);
