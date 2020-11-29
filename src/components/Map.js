import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

const Map = ({ center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCOAbB6i-KAloXLc6vNInTYR9SlOcfd4t8" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <LocationMarker
          lat={center.lat}
          lng={center.lng}
          onClick={() =>
            setLocationInfo({
              title: "Central Stockholm Appartment",
              price: "10000 SEK",
              bedrooms: "3",
              number: "0735471235",
            })
          }
        />
        <LocationMarker
          lat={center.lat + 0.02}
          lng={center.lng + 0.03}
          onClick={() =>
            setLocationInfo({
              title: "Östermalm Luxurious Appartment",
              price: "15600 SEK",
              bedrooms: "1",
              number: "0733726384",
            })
          }
        />
        <LocationMarker
          lat={center.lat - 0.072}
          lng={center.lng + 0.007}
          onClick={() =>
            setLocationInfo({
              title: "Spacious House in Farsta",
              price: "5600 SEK",
              bedrooms: "4",
              number: "0723623633",
            })
          }
        />
        <LocationMarker
          lat={center.lat + 0.05}
          lng={center.lng - 0.17}
          onClick={() =>
            setLocationInfo({ title: "Family House in Spånga", price: "7500 SEK", bedrooms: "6", number: "0723623633" })
          }
        />
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 59.33,
    lng: 18.06324,
  },
  zoom: 11,
};

export default Map;
