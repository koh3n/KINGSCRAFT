import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";
  import PropTypes from "prop-types";
  import auth from "./FirebaseConfig";
  
  export const AuthContext = createContext(null);
  
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const loginUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const logOut = () => {
      setLoading(true);
      return signOut(auth);
    };
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
  
      return () => {
        unsubscribe();
      };
    }, []);
  
    const authValue = {
      createUser,
      user,
      loginUser,
      logOut,
      loading,
    };
  
    return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
  };
  
  AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  export default AuthProvider;