/* eslint-disable array-callback-return */
import React from "react";
import Header from "../header/Header.component";
import Container from "@mui/material/Container";
import Details from "../details/Details.component";
import { CircularProgress } from "@mui/material";
import Map from "../map/map.component";
import { useGetDetailsQuery } from "../../redux/IP-addressApi";
import { useState } from "react";

const Main = () => {
  const [ipAddress, setIpAddress] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    setIpAddress(e.target.value);
  };
  

  const { data } = useGetDetailsQuery(ipAddress);
  console.log(data)
  if(!data) {
    <CircularProgress />
  }
  if (data)
    return (
      <Container>
        <Header onChange={onChange} />
        <Details data={data}/>
        <Map data={data} />
      </Container>
    );
};

export default Main;
