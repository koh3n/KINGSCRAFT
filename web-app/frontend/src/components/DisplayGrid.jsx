import React from 'react';
import DisplayItem from './DisplayItem';
import '../styles/DisplayGrid.css';

const DisplayGrid = ({ images }) => {
  return (
    <div className="display-grid">
      {images.map((url, index) => (
        <DisplayItem key={index} imageUrl={url} />
      ))}
    </div>
  );
};

export default DisplayGrid;
