// pages/HomePage.js
import React, { useState, useEffect } from 'react';
import GoogleLogin from '../components/GoogleLogin';
import UserAccount from '../components/UserAccount';
import firebase from "../firebase/firebase";
import '../styles/App.css';
import Dashboard from './Dashboard';

import getImages from '../util/utils.js'

const HomePage = () => {
  const [user, setUser] = useState(null);
  const [images, setImages] = useState(['']);

  useEffect(() => {
    const unsub = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setImages(user.uid);

        console.log(images);
      } else {
        setUser(null);
      }
    });

    return () => unsub();
  }, []);

  return (
    <>
      <img className='grid' src="./grid.png" alt="Grid"/>
      {!user ? (
        <div>
          <section className='landing'>
            <div className='left-div'>
              <p className='title'>ELEVATE YOUR 3D <br/> PRINTING CAPABILITIES</p>
              <p className='summary'>
                To be, or not to be: that is the question: whether 'tis nobler in the mind to suffer 
                the <br />slings and arrows of outrageous fortune, or art-ache and the thousand natural shocks <br />
                that flesh is heir to, 'tis a consummation of buttplugs
              </p>
              <div className='button-cont'>
                <UserAccount />
                <GoogleLogin />
              </div>
            </div>
            <div>
              <img className='phoneImg' src="./chess4.png" alt="Phone"/>
            </div>
          </section>
        </div>
      ) : (
        <Dashboard />
      )}
    </>
  );
};

export default HomePage;