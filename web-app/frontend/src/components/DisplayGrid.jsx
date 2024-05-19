import React from 'react';
import DisplayItem from './DisplayItem';
import '../styles/DisplayGrid.css';

const DisplayGrid = ({ images }) => {
    // console.log(images);
    // console.log("Image1", images[0])
  return (
    <div className="display-grid">
      {images.map((url, index) => (
        <DisplayItem key={index} imageUrl={url} />
      ))}
      
    </div>
  );
};

export default DisplayGrid;
