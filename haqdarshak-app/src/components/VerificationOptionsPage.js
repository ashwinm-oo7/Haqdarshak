import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const VerificationOptionsPage = ({ onBack }) => {
  const navigate = useNavigate();
  const [option, setOption] = React.useState(null);

  const handleOptionChange = (e) => {
    setOption(e.target.value);
  };

  const handleProceed = () => {
    if (option === "yes") {
      // Navigate to next page or handle "proceed without OTP" logic
      navigate("/personal-details"); // Replace with actual path
    } else if (option === "no") {
      // Navigate to OTP verification page
      navigate("/next-Page"); // Replace with actual path
    }
  };

  return (
    <div className="verification-options-page">
      <button className="back-button" onClick={onBack}>
        Back
      </button>
      <h2>Do you want to proceed without OTP verification?</h2>
      <div className="radio-options">
        <label>
          <input
            type="radio"
            value="yes"
            checked={option === "yes"}
            onChange={handleOptionChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={option === "no"}
            onChange={handleOptionChange}
          />
          No, I want to complete OTP verification
        </label>
      </div>
      <p>
        Proceed without OTP if you live in an area with low network
        connectivity.
      </p>
      <button onClick={handleProceed} disabled={!option}>
        Next
      </button>
    </div>
  );
};

export default VerificationOptionsPage;
