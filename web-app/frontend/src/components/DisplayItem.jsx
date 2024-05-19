import React from 'react';
import '../styles/DisplayItem.css';

const DisplayItem = ({ imageUrl }) => {
  return (
    <div className="display-item">
      <img src={imageUrl} alt="Display" />
    </div>
  );
};

export default DisplayItem;