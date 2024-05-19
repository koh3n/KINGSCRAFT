// pages/HomePage.js
import React, { useState, useEffect } from 'react';
import GoogleLogin from '../components/GoogleLogin';
import UserAccount from '../components/UserAccount';
import firebase from "../firebase/firebase";
import '../styles/App.css';
import Dashboard from './Dashboard';

import { getImages } from '../util/utils.js'

const Homepage = () => {
  const [user, setUser] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchUserData = async (user) => {
      try {
        const fetchedImages = await getImages(user.uid);
        setImages(fetchedImages);
        console.log("Fetched images:", fetchedImages);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    const unsub = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        fetchUserData(user);
      } else {
        setUser(null);
      }
    });

    return () => unsub();
  }, []);

  useEffect(() => {
    console.log("images state:", images);
  }, [images]);

  return (
    <>
      <img className='grid' src="./grid.png" alt="Grid"/>
      {!user ? (
        <div>
          <section className='landing'>
            <div className='left-div'>
              <p className='title'>ELEVATE YOUR 3D <br/> PRINTING CAPABILITIES</p>
              <p className='summary'>
              This is KingsCraft. The place that can turn your single-angle photos into 
              stunning <br /> 3D models using advanced AI. Download our app today to seamlessly 
              scan your <br /> pictures and generate complete 3D models, enhancing your digital experiences with ease.
              </p>
              <div className='button-cont'>
                <UserAccount />
                <GoogleLogin />
              </div>
``            </div>
            <div>
              <img className='phoneImg' src="./chess4.png" alt="Phone"/>
            </div>
          </section>
        </div>
      ) : (
        <Dashboard images={images}/>
      )}
    </>
  );
};

export default Homepage;