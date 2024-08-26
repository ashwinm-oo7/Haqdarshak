import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../App.css";

const LocationDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedState = location.state?.selectedState || "";

  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [isPinCodeValid, setIsPinCodeValid] = useState(false);

  useEffect(() => {
    // Fetch districts based on selected state
    // This is just an example, replace with your actual API call or data
    const stateDistricts = {
      Maharashtra: ["Mumbai", "Pune", "Nagpur"], // Example districts
      Delhi: ["New Delhi", "Old Delhi"], // Example districts
      // Add other states and their districts
    };
    setDistricts(stateDistricts[selectedState] || []);
  }, [selectedState]);

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  const handlePinCodeChange = (e) => {
    const value = e.target.value;
    setPinCode(value);
    setIsPinCodeValid(value.length === 6 && /^[0-9]+$/.test(value));
  };

  const handleProceed = () => {
    navigate("/mobileNumber");
  };

  return (
    <div className="location-details-page">
      <button className="back-button" onClick={() => navigate("/location")}>
        Back
      </button>
      <h2>Where Are You From?</h2>
      <div className="location-details">
        <label>State:</label>
        <input type="text" value={selectedState} readOnly />
        <label>District:</label>
        <select value={selectedDistrict} onChange={handleDistrictChange}>
          <option value="">Select District</option>
          {districts.map((district, index) => (
            <option key={index} value={district}>
              {district}
            </option>
          ))}
        </select>
        <label>PinCode:</label>
        <input
          type="text"
          value={pinCode}
          onChange={handlePinCodeChange}
          placeholder="Enter your pincode"
        />
        <button onClick={handleProceed} disabled={!isPinCodeValid}>
          Next
        </button>
      </div>
    </div>
  );
};

export default LocationDetailsPage;
