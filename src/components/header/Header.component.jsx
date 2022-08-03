import React from "react";
import SearchField from "../SearchField/SearchField.component";
import ReactComponent from "../../images/pattern-bg.png"
import { Container } from "@mui/system";
import { Box, Typography} from "@mui/material";



const Header = ({onChange , onClick}) => {
    
    return(
        <Container>
            <Box sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <Typography variant="h6" component="h1" sx={{
                    color: "#fff",
                    position: "absolute",
                    marginTop : "20px"
                }}>IP Address Tracker</Typography>
                <img src={ReactComponent} alt="Header" className="image" />
                <div className="search-btn">
                  <SearchField onChange={onChange} onClick={onClick}/>
                </div>
            </Box>
        </Container>
    )
}

export default Header