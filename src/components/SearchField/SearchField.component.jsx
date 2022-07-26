import React from "react";
import { TextField } from "@mui/material";


const SearchField = () => {
   return (
        <TextField id="outlined-basic" placeholder="search for any IP address or domain" variant="outlined" size="small"  sx={{
            width: "400px",
            position: "absolute",
            marginTop: "73px",
            backgroundColor:"#fff",
            borderRadius: "10px"
        }}/>
        
   )
}

export default SearchField;