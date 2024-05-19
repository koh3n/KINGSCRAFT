import React from 'react';
import UserAccount from '../components/UserAccount';
import Carousel from '../components/Carousel'; 
import styled from 'styled-components';
import "../styles/Dashboard.css";


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
  let items = [];

  console.log('images: ', images);
  if (!images || images.length === 0) {
    items = [
      {
        image: <CarouselItemContent>Download the Mobile App to Start a New Project</CarouselItemContent>,
        title: "",
        downloadLink: ""
      }
    ];
  } else {
    items = images.map((image, index) => ({
      image: <img src={image.url} alt={`Slide ${index + 1}`} />,
      title: image.title,
      downloadLink: image.downloadLink
    }));
  }

  return (
    <div className="main">
      <div className="dashboard">
        {/* <ThreeDisplay /> */}
        <UserAccount />
        <Carousel items={items} />
      </div>
    </div>
  );
};

export default Dashboard;