import React, { useState } from "react";
import LanguageSelection from "./components/LanguageSelection";
import LoginOptions from "./components/LoginOptions";
import LocationSelection from "./components/LocationSelection";
import MapPage from "./components/MapPage";
import LocationDetailsPage from "./components/LocationDetailsPage";
import MobileNumberPage from "./components/MobileNumberPage"; // Import the MobileNumberPage component
import "./App.css";
import "./i18n";

const App = () => {
  const [currentPage, setCurrentPage] = useState("language");
  const [locationDetails, setLocationDetails] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const handleLanguageNext = (selectedLanguage) => {
    setCurrentPage("login");
  };

  const handleLoginNext = (selectedOption) => {
    if (selectedOption === "Register me as a new user") {
      setCurrentPage("location");
    }
  };

  const handleBack = () => {
    if (currentPage === "login") {
      setCurrentPage("language");
    } else if (currentPage === "location") {
      setCurrentPage("login");
    } else if (currentPage === "map") {
      setCurrentPage("location");
    } else if (currentPage === "locationDetails") {
      setCurrentPage("location");
    } else if (currentPage === "mobileNumber") {
      setCurrentPage("locationDetails");
    }
  };

  const handleLocationSelect = (details) => {
    if (details) {
      setLocationDetails(details);
      setCurrentPage("locationDetails");
    } else {
      setCurrentPage("map");
    }
  };

  const handleStateSelect = (state) => {
    setSelectedState(state);
    setCurrentPage("locationDetails");
  };

  const handleLocationDetailsNext = () => {
    setCurrentPage("mobileNumber");
  };

  return (
    <div className="app">
      {currentPage === "language" && (
        <LanguageSelection onNext={handleLanguageNext} />
      )}
      {currentPage === "login" && (
        <LoginOptions onBack={handleBack} onNext={handleLoginNext} />
      )}
      {currentPage === "location" && (
        <LocationSelection
          onBack={handleBack}
          onStateSelect={handleStateSelect}
        />
      )}
      {currentPage === "map" && (
        <MapPage onLocationSelect={handleLocationSelect} />
      )}
      {currentPage === "locationDetails" && locationDetails && (
        <LocationDetailsPage
          locationDetails={locationDetails}
          onNext={handleLocationDetailsNext}
        />
      )}
      {currentPage === "mobileNumber" && <MobileNumberPage />}
    </div>
  );
};

export default App;
