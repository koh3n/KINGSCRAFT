// src/Carousel.js
import React, { useState } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const CarouselInner = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
`;

const CarouselItem = styled.div`
  min-width: 100%;
  box-sizing: border-box;
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  width: 30px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.7);
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
  bottom: 10px;
  left: 50%;
  display: flex;
  transform: translateX(-50%);
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: ${({ active }) => (active ? 'black' : 'gray')};
  border-radius: 50%;
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

  return (
    <CarouselContainer>
      <CarouselInner currentIndex={currentIndex}>
        {items.map((item, index) => (
          <CarouselItem key={index}>{item}</CarouselItem>
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
