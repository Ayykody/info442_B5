import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './Calculator.css'; // Import the CSS file for styling

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
      <h1 className="calculator-header">Calculate Pollution Impact</h1>
      <label htmlFor="mileage" className="calculator-label">Enter mileage for travel (in miles): </label>
      <input
        type="number"
        id="mileage"
        placeholder="Enter mileage"
        value={mileage}
        onChange={(e) => setMileage(e.target.value)}
        className="calculator-input"
      />
      <br />
      <button onClick={calculatePollution} className="calculator-button">Calculate Pollution</button>
    </div>
  );
};

export default Calculator;
