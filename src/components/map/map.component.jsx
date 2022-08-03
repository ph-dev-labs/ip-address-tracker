import { Container } from "@mui/system";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";


function ChangeView({ center}) {
	const map = useMap();
	map.setView(center, 14);
	return null;
}

const Map = ({ data }) => {

  const { lat, lng } = data.location;
  const loction = [lat, lng]


  return (
    <Container
      className="map"
      sx={{
        alignSelf: "center",
        width: "100%"
      }}
    >
      <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={true}>
        <ChangeView center={loction}/>
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
  );
};

export default Map;
