import React from 'react';
import ModelViewer from './ModelViewer';
import './Rap.css';

function Rap() {
  return (
    <div className="Rap">
      <header className="Rap-header">
        <h1>3D Model Viewer</h1>
      </header>
      <ModelViewer />
    </div>
  );
}

export default Rap;