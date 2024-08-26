import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MapPage from "./MapPage";
import "../App.css";

const LocationSelection = ({ onBack }) => {
  const { t, i18n } = useTranslation();
  const [showMapPage, setShowMapPage] = useState(false);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const navigate = useNavigate();

  const states = [
    { en: "Andhra Pradesh", hi: "आंध्र प्रदेश", mr: "आंध्र प्रदेश" },
    { en: "Arunachal Pradesh", hi: "अरुणाचल प्रदेश", mr: "अरुणाचल प्रदेश" },
    { en: "Assam", hi: "असम", mr: "आसाम" },
    { en: "Bihar", hi: "बिहार", mr: "बिहार" },
    { en: "Chhattisgarh", hi: "छत्तीसगढ़", mr: "छत्तीसगड" },
    { en: "Goa", hi: "गोवा", mr: "गोवा" },
    { en: "Gujarat", hi: "गुजरात", mr: "गुजरात" },
    { en: "Haryana", hi: "हरियाणा", mr: "हरियाणा" },
    { en: "Himachal Pradesh", hi: "हिमाचल प्रदेश", mr: "हिमाचल प्रदेश" },
    { en: "Jharkhand", hi: "झारखंड", mr: "झारखंड" },
    { en: "Karnataka", hi: "कर्नाटक", mr: "कर्नाटक" },
    { en: "Kerala", hi: "केरल", mr: "केरळ" },
    { en: "Madhya Pradesh", hi: "मध्य प्रदेश", mr: "मध्य प्रदेश" },
    { en: "Maharashtra", hi: "महाराष्ट्र", mr: "महाराष्ट्र" },
    { en: "Manipur", hi: "मणिपुर", mr: "मणिपूर" },
    { en: "Meghalaya", hi: "मेघालय", mr: "मेघालय" },
    { en: "Mizoram", hi: "मिजोरम", mr: "मिझोराम" },
    { en: "Nagaland", hi: "नागालैंड", mr: "नागालँड" },
    { en: "Odisha", hi: "ओडिशा", mr: "ओडिशा" },
    { en: "Punjab", hi: "पंजाब", mr: "पंजाब" },
    { en: "Rajasthan", hi: "राजस्थान", mr: "राजस्थान" },
    { en: "Sikkim", hi: "सिक्किम", mr: "सिक्कीम" },
    { en: "Tamil Nadu", hi: "तमिलनाडु", mr: "तामिळनाडू" },
    { en: "Telangana", hi: "तेलंगाना", mr: "तेलंगणा" },
    { en: "Tripura", hi: "त्रिपुरा", mr: "त्रिपुरा" },
    { en: "Uttar Pradesh", hi: "उत्तर प्रदेश", mr: "उत्तर प्रदेश" },
    { en: "Uttarakhand", hi: "उत्तराखंड", mr: "उत्तराखंड" },
    { en: "West Bengal", hi: "पश्चिम बंगाल", mr: "पश्चिम बंगाल" },
    {
      en: "Andaman and Nicobar Islands",
      hi: "अंडमान और निकोबार द्वीप समूह",
      mr: "अंदमान आणि निकोबार बेटे",
    },
    { en: "Chandigarh", hi: "चंडीगढ़", mr: "चंदीगड" },
    {
      en: "Dadra and Nagar Haveli and Daman and Diu",
      hi: "दादरा और नगर हवेली और दमन और दीव",
      mr: "दादरा आणि नगर हवेली आणि दमन आणि दीव",
    },
    { en: "Lakshadweep", hi: "लक्षद्वीप", mr: "लक्षद्वीप" },
    { en: "Delhi", hi: "दिल्ली", mr: "दिल्ली" },
    { en: "Puducherry", hi: "पुदुचेरी", mr: "पुदुचेरी" },
    { en: "Ladakh", hi: "लद्दाख", mr: "लडाख" },
    { en: "Jammu and Kashmir", hi: "जम्मू और कश्मीर", mr: "जम्मू आणि काश्मीर" },
  ];

  const handleUseCurrentLocation = () => {
    setShowMapPage(true);
  };

  const handleBack = () => {
    setShowMapPage(false);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    // Navigate to the next page with selected location
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    // Navigate to LocationDetailsPage with selected state
    navigate("/locationDetails", { state: { selectedState: state } });
  };

  const handleProceed = () => {
    if (!selectedState) {
      // Optionally, show an error message if no state is selected
      alert("Please select a state.");
      return;
    }
    navigate("/locationDetails");
  };

  if (showMapPage) {
    return (
      <MapPage onBack={handleBack} onSelectLocation={handleLocationSelect} />
    );
  }

  // Get the current language
  const currentLang = i18n.language;

  return (
    <div className="location-selection">
      <button className="back-button" onClick={onBack}>
        {t("back")}
      </button>
      <h2>{t("choose_location")}</h2>
      <div className="location-options">
        <label>{t("select_state")}</label>
        <select onChange={handleStateChange}>
          <option value="">{t("select_state")}</option>
          {states.map((state, index) => (
            <option key={index} value={state.en}>
              {state.en} {currentLang !== "en" && `/ ${state[currentLang]}`}
            </option>
          ))}
        </select>
        <p>{t("or")}</p>
        <button onClick={handleUseCurrentLocation}>
          {t("use_current_location")}
        </button>
        <button className="next-button" onClick={handleProceed}>
          {t("next")}
        </button>
      </div>
    </div>
  );
};

export default LocationSelection;
