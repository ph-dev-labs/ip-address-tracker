import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

const SearchField = ({ onChange, onClick }) => {
  return (
    <div className="text">
      <TextField
        id="outlined-basic"
        placeholder="search for any IP address or domain"
        variant="outlined"
        size="small"
        sx={{
          width: "400px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          margin: "10px",
          outline: "none",
        }}
    onChange={onChange} />

      <Button type="submit" variant="contained" color="primary" sx={{
         marginTop: "10px"
      }} onClick={onClick} >
        search
      </Button>
    </div>
  );
};

export default SearchField;
