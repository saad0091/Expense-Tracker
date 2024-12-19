// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDT93ZalEkhhZ2qW48WKNLEXxNFYjPClJk",
    authDomain: "expense-tracker-c718b.firebaseapp.com",
    projectId: "expense-tracker-c718b",
    storageBucket: "expense-tracker-c718b.firebasestorage.app",
    messagingSenderId: "433687428343",
    appId: "1:433687428343:web:28a52a837c01822a1f27f2",
    measurementId: "G-CW55ZJM5VE"
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };