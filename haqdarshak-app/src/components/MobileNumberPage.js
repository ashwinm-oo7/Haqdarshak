import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const MobileNumberPage = ({ onBack }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setMobileNumber(value);

    // Validate mobile number (10 digits only)
    const regex = /^\d{10}$/;
    setIsValid(regex.test(value));
  };

  const handleProceed = () => {
    navigate("/verification-options"); // Replace with actual path
  };

  return (
    <div className="mobile-number-page">
      <button className="back-button" onClick={onBack}>
        Back
      </button>
      <h2>What is your Mobile Number?</h2>
      <input
        type="text"
        value={mobileNumber}
        onChange={handleChange}
        placeholder="Enter your mobile number"
      />
      <button onClick={handleProceed} disabled={!isValid}>
        Next
      </button>
    </div>
  );
};

export default MobileNumberPage;
