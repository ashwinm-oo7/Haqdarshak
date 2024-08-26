import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const PersonalDetailsPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleNameChange = (e) => setName(e.target.value);
  const handleGenderChange = (e) => setGender(e.target.value);
  const handleDobChange = (e) => setDob(e.target.value);
  const handleAgeChange = (e) => setAge(e.target.value);

  const validateForm = () => {
    const isValid = name && gender && (dob || age); // Either DOB or Age should be provided
    setIsFormValid(isValid);
  };

  React.useEffect(() => {
    validateForm();
  }, [name, gender, dob, age]);

  const handleSubmit = () => {
    if (isFormValid) {
      setTimeout(() => {
        navigate("/haqdarshak");
      }, 4000);
    }
  };

  return (
    <div className="personal-details-page">
      <h2>Personal Details</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Gender:
        <label>
          <input
            type="radio"
            value="Male"
            checked={gender === "Male"}
            onChange={handleGenderChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            value="Female"
            checked={gender === "Female"}
            onChange={handleGenderChange}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            value="Other"
            checked={gender === "Other"}
            onChange={handleGenderChange}
          />
          Other
        </label>
      </label>
      <label>
        DOB or Age:
        <input
          type="date"
          value={dob}
          onChange={handleDobChange}
          disabled={age}
        />
        <input
          type="number"
          value={age}
          onChange={handleAgeChange}
          placeholder="Age"
          disabled={dob}
        />
      </label>
      <button onClick={handleSubmit} disabled={!isFormValid}>
        Next
      </button>
    </div>
  );
};

export default PersonalDetailsPage;
