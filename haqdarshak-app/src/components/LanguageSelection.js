import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../App.css";

const LanguageSelection = ({ onNext }) => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
  };

  const handleNext = () => {
    onNext(selectedLanguage);
    navigate("/login");
  };

  return (
    <div className="language-selection">
      <img
        src="/images/haqdarshak-logo.png"
        alt="Haqdarshak Logo"
        className="logo"
      />
      <h2>{t("welcome")}</h2>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            value="en"
            checked={selectedLanguage === "en"}
            onChange={handleLanguageChange}
          />
          English
        </label>
        <label>
          <input
            type="radio"
            value="hi"
            checked={selectedLanguage === "hi"}
            onChange={handleLanguageChange}
          />
          हिंदी
        </label>
        <label>
          <input
            type="radio"
            value="mr"
            checked={selectedLanguage === "mr"}
            onChange={handleLanguageChange}
          />
          मराठी
        </label>
      </div>
      <button className="next-button" onClick={handleNext}>
        {t("next")}
      </button>
    </div>
  );
};

export default LanguageSelection;
