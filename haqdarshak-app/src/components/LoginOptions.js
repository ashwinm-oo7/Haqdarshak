import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../App.css";

const LoginOptions = ({ onNext, onBack }) => {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState(
    "Register me as a new user"
  );

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNext = () => {
    onNext(selectedOption);
  };

  return (
    <div className="login-options">
      <button className="back-button" onClick={onBack}>
        {t("back")}
      </button>
      <h2>{t("login_option")}</h2>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            value="Register me as a new user"
            checked={selectedOption === "Register me as a new user"}
            onChange={handleOptionChange}
          />
          {t("register_new_user")}
        </label>
        <label>
          <input
            type="radio"
            value="Use my phone Number"
            checked={selectedOption === "Use my phone Number"}
            onChange={handleOptionChange}
          />
          {t("use_phone_number")}
        </label>
        <label>
          <input
            type="radio"
            value="Use my Yojana Card"
            checked={selectedOption === "Use my Yojana Card"}
            onChange={handleOptionChange}
          />
          {t("use_yojana_card")}
        </label>
      </div>
      <button className="next-button" onClick={handleNext}>
        {t("next")}
      </button>
    </div>
  );
};

export default LoginOptions;
