import firebase from "firebase/compat/app"; 
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxWfRrQtDEVHvPz61ARkPSxFZl-Rd_7EQ",
  authDomain: "sfu-hack-28609.firebaseapp.com",
  projectId: "sfu-hack-28609",
  storageBucket: "sfu-hack-28609.appspot.com",
  messagingSenderId: "652485847432",
  appId: "1:652485847432:web:a41518548e87dfa9e8b23d",
  measurementId: "G-BZYVN0GMJ3"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;