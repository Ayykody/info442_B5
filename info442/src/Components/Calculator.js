// Calculator.js
import React, { useState } from 'react';

import Swal from 'sweetalert2';

const Calculator = () => {
  const [mileage, setMileage] = useState('');
  
  const calculatePollution = () => {
    const emissionFactor = 2.3;
    const mileageInput = parseFloat(mileage);

    if (isNaN(mileageInput) || mileageInput < 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid positive number for mileage.',
      });
      return;
    }

    const pollutionEstimate = mileageInput * emissionFactor;

    Swal.fire({
      icon: 'success',
      title: 'Calculation complete!',
      text: `Estimated CO2 emissions: ${pollutionEstimate.toFixed(2)} grams.`,
    });

    setMileage('');
  };

  return (
    <div className="calculator-container">
      <h1>Calculate Pollution Impact</h1>
      <label htmlFor="mileage">Enter mileage for travel (in miles): </label>
      <input
        type="number"
        id="mileage"
        placeholder="Enter mileage"
        value={mileage}
        onChange={(e) => setMileage(e.target.value)}
      />
      <button onClick={calculatePollution}>Calculate Pollution</button>
    </div>
  );
};

export default Calculator;
