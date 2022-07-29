import { Box, Typography } from "@mui/material";
import React from "react";



const Details = ({data}) => {
    const {ip, location, isp} = data
    const {timezone, city} = location
    
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
           
            <div className="detail-container">
                <Typography variant="p" component="h6" sx={{
                    color: "hsl(0, 0%, 59%)",
                }}>
                    IP ADDRESS
               </Typography>
               <Typography variant="h6" component="p" sx={{
                 color: "hsl(0, 0%, 17%)",
                 fontSize: "14px",
                 fontWeight: "Bold",
                 position: "absolute"
               }}>
                {ip}
               </Typography>
            </div>

            <div className="detail-container">
                <Typography variant="p" component="h6" sx={{
                    color: "hsl(0, 0%, 59%)",
                    
                }}>
                    location
               </Typography>
               <Typography variant="h6" component="p" sx={{
                 color: "hsl(0, 0%, 17%)",
                 fontSize: "14px",
                 fontWeight: "Bold",
                 position: "absolute"
               }}>
                {city}
               </Typography>

            </div>

            <div className="detail-container">
                <Typography variant="p" component="h6" sx={{
                    color: "hsl(0, 0%, 59%)",
                    
                }}>
                    TIMEZONE
               </Typography>
               <Typography variant="h6" component="p" sx={{
                 color: "hsl(0, 0%, 17%)",
                 fontSize: "14px",
                 fontWeight: "Bold",
                 position: "absolute"
               }}>
                {timezone}
               </Typography>
            </div>

            <div className="detail-container" >
                <Typography variant="p" component="h6" sx={{
                    color: "hsl(0, 0%, 59%)",
                }}>
                    ISP
               </Typography>
               <Typography variant="h6" component="p" noWrap={false} sx={{
                 color: "hsl(0, 0%, 17%)",
                 fontSize: "15px",
                 fontWeight: "Bold",
                 position: "absolute"
                 
               }}>
                {isp}
               </Typography>
            </div>
    
        </Box>
    )
        
}

export default Details;