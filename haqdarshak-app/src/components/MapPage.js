import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapPage = ({ onLocationSelect }) => {
  const handleProceed = () => {
    onLocationSelect({
      state: "Selected State",
      district: "Selected District",
      pinCode: "Selected PinCode",
    });
  };

  return (
    <div className="map-page">
      <h1>Select Your Location</h1>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Add Markers and other map features */}
      </MapContainer>
      <button onClick={handleProceed}>Proceed</button>
    </div>
  );
};

export default MapPage;
