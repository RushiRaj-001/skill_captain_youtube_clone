// Import the functions you need from the SDKs you need

import { initializeApp, getApps, getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb_JhiCkydqX8v1-L4OSeHr-u3GjrY49w",
  authDomain: "clone-media-player-3fc07.firebaseapp.com",
  projectId: "clone-media-player-3fc07",
  storageBucket: "clone-media-player-3fc07.appspot.com",
  messagingSenderId: "316339982640",
  appId: "1:316339982640:web:6fdae655a414644c1278f5",
  measurementId: "G-QCP8HR3L4K"
};

// Initialize Firebase

let firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig):getApps()[0];

export default firebaseApp;