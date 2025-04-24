// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //add your fib
  apiKey: "AIzaSyA67pzrSXsbFAsKkfwEv0fAgl7an-563ps",
  authDomain: "netflixgpt-62010.firebaseapp.com",
  projectId: "netflixgpt-62010",
  storageBucket: "netflixgpt-62010.firebasestorage.app",
  messagingSenderId: "704472851639",
  appId: "1:704472851639:web:1e4c66f3fe15ca1c6a1932",
  measurementId: "G-NV1FMWZH2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();;

//npm install -g firebase-tools
//firebase login
//firebase init
//firebase deploy