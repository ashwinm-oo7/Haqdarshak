import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const HaqdarshakPage = () => {
  const navigate = useNavigate();
  const [showLoading, setShowLoading] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
      setShowSuccess(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        navigate("/finalPage");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showSuccess, navigate]);

  return (
    <div className="haqdarshak-page">
      {showLoading ? (
        <div className="loading">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="success">
          <p>Welcome to HaqDarshak</p>
          <p>Your profile has been created successfully!</p>
          {showSuccess && (
            <div>
              <p>
                <span className="success-icon">✔️</span>
                Find the benefits that are right for you or your business
              </p>
              <p>
                <span className="success-icon">✔️</span>
                Save schemes and track your bookings
              </p>
              <button onClick={() => navigate("/dashboard")}>
                Get Started
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HaqdarshakPage;
