import React from "react";
import Header from "../header/Header.component";
import Container from '@mui/material/Container';
import Details from "../details/Details.component";
import { useGetDetailsQuery } from "../../redux/IP-addressApi";
import { useState, useEffect } from "react";
 

const Main = () => {

    const [ipAddress, setIpAddress] = useState("")
    
   
    const onChange = (e) => {
        e.preventDefault()
        setIpAddress(e.target.value)
    }

   

   const {data} = useGetDetailsQuery(ipAddress)
   console.log(data)


   
    return (
        <Container>
            <Header onChange={onChange} />
            <Details />
        </Container>
    )
}

export default Main;