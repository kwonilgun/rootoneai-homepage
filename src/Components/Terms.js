import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";

const Terms = () => {
  const [contents, setContents] = useState("");
  const [ready, setReady] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const currentLanguage = i18n.language;

  const fetchUsageTerms = useCallback(async () => {
    console.log("currentLanguage = ", currentLanguage);
    // try {

    //   const response = await axios.get(
    //     `${baseURL}terms/${language === 'kr' ? OZS_USAGE_TERM_ID : OZS_USAGE_TERM_EN_ID}`
    //   );
    //   if (response.status === 200) {
    //     const location = response.data[0]?.usageLocation.split('/').pop();
    //     if (!location) {
    //       throw new Error('Invalid usage location');
    //     }

    //     const res = await axios.get(`${baseURL}terms/downloadtext/${location}`);
    //     if (res.status === 200) {
    //       console.log('Successfully fetched terms of service');
    //       setContents(res.data);
    //     } else {
    //       setContents('Unable to fetch terms.');
    //     }
    //   } else {
    //     setContents('No data available');
    //   }
    // } catch (err) {
    //   console.error('Failed to fetch terms of service from the server');
    //   setContents('An error occurred.');
    // } finally {
    //   setReady(true);
    // }
  }, [currentLanguage]);

  useEffect(() => {
    fetchUsageTerms();
  }, [fetchUsageTerms]);

  const handleBack = () => {
    navigate("/"); // React Router에서 경로 변경
  };

  return (
    <div className="terms-wrapper-container">
      <header className="terms-header-component">
        <button className="terms-back-button" onClick={handleBack}>
          {/* <i className="fa fa-arrow-left" aria-hidden="true"></i> */}
          back
        </button>
        <h1 className="terms-header-title">이용약관</h1>
      </header>

      {ready ? (
        <div className="terms-content-container">
          <div className="terms-scroll-view">
            {contents ? (
              <div dangerouslySetInnerHTML={{ __html: contents }} />
            ) : (
              <p>No content available</p>
            )}
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

async function getUsageTermsFromS3(setContents, setReady, language) {
  console.log("getUsageTermsFromS3");
}

export default Terms;
