import React from 'react';
import './LabelTop.css';
const GridComponent = () => {
  // Letters from A to H
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  return (
    <div className="row-container">
      {/* Map through the letters and create a horizontal grid item for each */}
      {letters.map((letter, index) => (
        <div key={index} className="row-item">
          {letter}
        </div>
      ))}
    </div>
  );
};

export default GridComponent;
