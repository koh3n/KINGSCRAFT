import React from "react";
import GoogleLogin from '../components/GoogleLogin';
import UserAccount from '../components/UserAccount';
import Carousel from '../components/Carousel'; 
import styled from 'styled-components';
import "../styles/Dashboard.css"

const CarouselItemContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  background-color: lightblue;
  font-size: 24px;
  color: white;
`;

const Dashboard = (images) => {
  const items = [
    <CarouselItemContent>Slide 1</CarouselItemContent>,
    <CarouselItemContent>Slide 2</CarouselItemContent>,
    <CarouselItemContent>Slide 3</CarouselItemContent>,
  ];

  return (
    <div className="dashboard">
      <Carousel items={items} />

      <div className='left-div'>
        <div className='button-cont'>
          <UserAccount />
          <GoogleLogin />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;