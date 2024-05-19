import React from "react";
import GoogleLogin from '../components/GoogleLogin';
import UserAccount from '../components/UserAccount';



import { Carousel } from "./components/carousel-5/Carousel";


const Dashboard = () => {
  return (
    <div className="dashboard">
        <Carousel/>
        <div className='left-div'>
        <div className='button-cont'>
          <UserAccount />
          <GoogleLogin />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
