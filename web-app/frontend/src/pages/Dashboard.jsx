import React from 'react';
import UserAccount from '../components/UserAccount';
import Carousel from '../components/Carousel'; 
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
      </div>
    </div>
  );
};

export default Dashboard;