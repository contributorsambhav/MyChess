import React from 'react';
import './NumLabel.css';
const GridComponent = () => {
  // Letters from A to H
  const letters = ['1', '2', '3', '4', '5', '6', '7', '8'];

  return (
    <div className="column-container">
      {/* Map through the letters and create a horizontal grid item for each */}
      {letters.map((letter, index) => (
        <div key={index} className="column-item">
          {letter}
        </div>
      ))}
    </div>
  );
};

export default GridComponent;
