import React from "react";
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
  // const items = images.map((image, index) => (
  //   <CarouselItemContent key={index}>
  //     <img src={image} alt={`Slide ${index + 1}`} />
  //   </CarouselItemContent>
  // ));

  const items = [
    <CarouselItemContent>First Slide</CarouselItemContent>
  ]

  return (
    <div className="main">
      <div className="dashboard">
        <UserAccount />
        <Carousel items={items} />
      </div>
    </div>
  );
};

export default Dashboard;
