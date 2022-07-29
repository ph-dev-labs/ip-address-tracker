import { Container } from "@mui/system";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = ({data}) => {
    const{lat, lng} = data.location
    return (
        <Container className="map" sx={{
            width: "500px",
            height: "100%",
            
        }}>
            <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={true}>
                <TileLayer 
               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                />

                <Marker position={[lat, lng]}>
                   <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </Container>
    )
}

export default Map