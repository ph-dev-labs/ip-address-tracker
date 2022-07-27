import React from "react";
import { TextField } from "@mui/material";



const SearchField = ({onChange}) => {
   return (
      
      
          <TextField id="outlined-basic" placeholder="search for any IP address or domain" variant="outlined" size="small"  sx={{
               width: "400px",
               backgroundColor:"#fff",
               borderRadius: "10px",
               margin: "10px",
               outline: "none"
            }}onChange={onChange}/>
        
        
   )
}

export default SearchField;