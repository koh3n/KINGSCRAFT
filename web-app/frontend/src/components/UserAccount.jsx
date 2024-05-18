import React, { useState, useEffect } from "react";
import firebase from "../firebase/firebase";

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
    <div>
      {user ? (
        <div>
          <img src={user.photoURL} alt="Profile" />
          <p>{user.displayName}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : null}
    </div>
  );
};

export default UserAccount;
