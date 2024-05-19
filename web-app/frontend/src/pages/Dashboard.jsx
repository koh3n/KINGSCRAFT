import React from 'react';
import UserAccount from '../components/UserAccount';
import "../styles/Dashboard.css";

const Dashboard = ({ images }) => {
  return (
    <div className="main">
      <div className="dashboard">

        <UserAccount />

        <div className="App">
          <header className="App-header">
            <h1>3D Model Viewer</h1>
          </header>
          <ModelViewer />
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;