// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxWfRrQtDEVHvPz61ARkPSxFZl-Rd_7EQ",
  authDomain: "sfu-hack-28609.firebaseapp.com",
  projectId: "sfu-hack-28609",
  storageBucket: "sfu-hack-28609.appspot.com",
  messagingSenderId: "652485847432",
  appId: "1:652485847432:web:a41518548e87dfa9e8b23d",
  measurementId: "G-BZYVN0GMJ3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

// IOS: 652485847432-ndu7urtf3r6r60a0fh4aolebmfqc0ios.apps.googleusercontent.com
// Android: 652485847432-qtdq7ieciominncrai7ocncqumvmjp17.apps.googleusercontent.com
