// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCRcNqZp0g-3r8JodOJDA4T-rACtj30e4",
  authDomain: "flightfinder-23fbf.firebaseapp.com",
  projectId: "flightfinder-23fbf",
  storageBucket: "flightfinder-23fbf.firebasestorage.app",
  messagingSenderId: "284186663398",
  appId: "1:284186663398:web:01f2fdf0c78c99b941de27",
  measurementId: "G-LMKCBLMG12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);