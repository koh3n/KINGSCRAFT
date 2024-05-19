import React from 'react';
import DisplayItem from './DisplayItem';
import '../styles/DisplayGrid.css';
import { Link, Route } from 'react-router-dom';

const DisplayGrid = ({ images }) => {
    // console.log(images);
    // console.log("Image1", images[0])
  return (
    <div className="display-grid">
      {images.map((url, index) => (
        // <Route path='viewer/:index' element={<Viewer />}>
          <DisplayItem key={index} imageUrl={url} />
        // </Route>
      ))}
      
    </div>
  );
};

export default DisplayGrid;
