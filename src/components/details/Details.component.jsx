import { Box, Typography } from "@mui/material";
import React from "react";

const Details = () => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            borderRadius: "20px",
            width: "65%",
            height: "120px",
            marginLeft: "130px",
            marginBottom: "30px",
            backgroundColor: "#fff",
            position: "absolute",
            transform: "translateY(-50px)"
        }}>
            <div className="">
                <Typography variant="p" component="h6" sx={{
                    color: "hsl(0, 0%, 59%)"
                }}>
                    IP ADDRESS
               </Typography>
               <Typography variant="h6" component="p" sx={{
                 color: "hsl(0, 0%, 17%)",
                 fontSize: "18px",
                 fontWeight: "Bold"
               }}>
                1.444.444.34
               </Typography>
            </div>

            <div className="">
                <Typography variant="p" component="h6" sx={{
                    color: "hsl(0, 0%, 59%)"
                }}>
                    LOCATION
               </Typography>
               <Typography variant="h6" component="p" sx={{
                 color: "hsl(0, 0%, 17%)",
                 fontSize: "18px",
                 fontWeight: "Bold"
               }}>
                1.444.444.34
               </Typography>

            </div>

            <div className="">
                <Typography variant="p" component="h6" sx={{
                    color: "hsl(0, 0%, 59%)"
                }}>
                    TIMEZONE
               </Typography>
               <Typography variant="h6" component="p" sx={{
                 color: "hsl(0, 0%, 17%)",
                 fontSize: "18px",
                 fontWeight: "Bold"
               }}>
                1.444.444.34
               </Typography>
            </div>

            <div className="" >
                <Typography variant="p" component="h6" sx={{
                    color: "hsl(0, 0%, 59%)"
                }}>
                    ISP
               </Typography>
               <Typography variant="h6" component="p" sx={{
                 color: "hsl(0, 0%, 17%)",
                 fontSize: "18px",
                 fontWeight: "Bold"
               }}>
                1.444.444.34
               </Typography>
            </div>
    
        </Box>
    )
}

export default Details;