import React, { useState, useEffect } from "react";
import firebase from "../firebase/firebase";
import "../styles/UserAccount.css"

const UserAccount = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsub();
  }, []);

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // renders if user is logged in
    <>
      {user ? (
        <div className="user-navbar">
          <div className="user-profile">
            <img className="profile-picture" src={user.photoURL} alt="Profile" />
            <p className="user-name">{user.displayName}</p>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default UserAccount;
