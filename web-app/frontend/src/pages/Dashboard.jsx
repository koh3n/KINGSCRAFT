import React from "react";
import GoogleLogin from '../components/GoogleLogin';
import UserAccount from '../components/UserAccount';
import { Swiper, SwiperSlide } from "swiper/react";
import '../styles/Dashboard.css'
import "swiper/css";

import image1 from "./airpod.jpg";
import image2 from "./chess.png";

const slides = [image1, image2, image1, image2, image1, image2];

const Projects = () => {
  return (
    <>  
        <div className="project_container">
            <Swiper spaceBetween={10} slidesPerView={3} loop>
                {slides.map((slide) => (
                    <SwiperSlide>
                    <img src={slide} alt="Phone" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </>
  );
};

const Dashboard = () => {
    return (
        <>
            <div className="dashboard">
                <div className='left-div'>
                <div className='button-cont'>
                    <UserAccount />
                    <GoogleLogin />
                </div>
                    <Projects />
                </div>
            </div>
        </>
    )

    // 
}

export default Dashboard