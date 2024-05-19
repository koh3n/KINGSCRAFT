import React, { useState } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-top: 3rem;
`;

const CarouselInner = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ translateValue }) => `translateX(-${translateValue}%)`};
`;

const CarouselItem = styled.div`
  min-width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  z-index: 2;
  ${({ direction }) => direction}: 10px;
  transform: translateY(-50%);
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 70px;
  left: 50%;
  display: flex;
  transform: translateX(-50%);
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: ${({ active }) => (active ? '#5200FF' : '#CA2B9D')};
  border-radius: 50%;
  cursor: pointer;
`;

const Title = styled.div`
  margin-top: 10px;
  font-size: 18px;
  color: black;
`;

const ViewButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const translateValue = currentIndex * 100;

  return (
    <CarouselContainer>
      <CarouselInner translateValue={translateValue}>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            {item.image}
            <Title>{item.title}</Title>
            <ViewButton onClick={() => window.location.href = item.downloadLink}>
              360° View
            </ViewButton>
          </CarouselItem>
        ))}
      </CarouselInner>
      <Arrow direction="left" onClick={prevSlide}>
        &#10094;
      </Arrow>
      <Arrow direction="right" onClick={nextSlide}>
        &#10095;
      </Arrow>
      <DotsContainer>
        {items.map((_, index) => (
          <Dot key={index} active={index === currentIndex} onClick={() => goToSlide(index)} />
        ))}
      </DotsContainer>
    </CarouselContainer>
  );
};

export default Carousel;
