import React from "react";
import Header from "../header/Header.component";
import Container from "@mui/material/Container";
import Details from "../details/Details.component";
import Map from "../map/map.component";
import { useGetInputIpQuery } from "../../redux/IP-addressApi";
import { useGetIpQuery } from "../../redux/IP-addressApi";
import { useState, } from "react";

const Main = () => {
  const [ip, setIp] = useState("");
  const [ipAddress, setIpAddress] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setIpAddress(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIp(ipAddress);
  
  };
  const { data } = useGetIpQuery();
  const { data: typedIp } = useGetInputIpQuery(ip);
  if(typedIp)
  return (
    <Container>
      <Header onChange={handleChange} onClick={handleSubmit} />
      <Details data={typedIp}/>
      <Map data={typedIp}/>
    </Container>
  );
};

export default Main;
