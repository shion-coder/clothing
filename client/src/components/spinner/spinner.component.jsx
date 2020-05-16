import React, { useState, useEffect } from 'react';

import { LOADING_SPINNER_DELAY } from 'config/consts';

import { SpinnerOverlay, SpinnerContainer } from './spinner.styles';

/* -------------------------------------------------------------------------- */

const Spinner = () => {
  const delay = LOADING_SPINNER_DELAY;
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSpinner(true), delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay]);

  return showSpinner ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : null;
};

/* -------------------------------------------------------------------------- */

export default Spinner;
