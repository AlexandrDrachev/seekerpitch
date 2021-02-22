import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

const AlertIndicator = () => {

  const alertIndicatorState = useSelector(({ alertIndicatorState }) => alertIndicatorState);
  const [ showAlert, setShowAlert ] = useState(false);

  useEffect(() => {
    setShowAlert(alertIndicatorState);
  }, [alertIndicatorState]);

  return (
    <div
      className={`
      absolute top-0 right-0 flex flex-col justify-start items-end
      ${showAlert.alertIndicator ? `block` : `hidden`}
      `}>
        <div
            className={`
            mt-100 w-300 h-100 flex flex-col justify-center items-center bg-white text-gray-500 slide-left
            rounded border
            `}>
            {showAlert.alertMessage}
        </div>
      </div>
    );
};

export default AlertIndicator;
