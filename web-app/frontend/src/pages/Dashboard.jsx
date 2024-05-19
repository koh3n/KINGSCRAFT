import React from 'react';
import UserAccount from '../components/UserAccount';
import styled from 'styled-components';
import "../styles/Dashboard.css";
import DisplayGrid from '../components/DisplayGrid';


const CarouselItemContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  background-color: lightblue;
  font-size: 24px;
  color: white;
`;

const Dashboard = ({ images }) => {


  return (
    <div className="main">
      <div className="dashboard">
        {/* <ThreeDisplay /> */}
        <UserAccount />
        <DisplayGrid images={images} />

        {/* {isModalOpen && <Modal onClose={handleClose} objUrl={url} />}
        <DashboardContainer className="dashboard">
          <img></img>
          <div style={{ width: '100%', height: '500px' }}>
            <ModelViewer />
          </div>
          <button onClick={handleOpen}>360° View</button>
        </DashboardContainer> */}
      </div>
    </div>
  );
};

export default Dashboard;