// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_xG_TWmeFIuUd-JmHlvSbZ-RE9su1mQk",
  authDomain: "ph-genius-car.firebaseapp.com",
  projectId: "ph-genius-car",
  storageBucket: "ph-genius-car.appspot.com",
  messagingSenderId: "260581355820",
  appId: "1:260581355820:web:d50802c8fe90a1ee797c89",
  measurementId: "G-Y1TLTKZZC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;