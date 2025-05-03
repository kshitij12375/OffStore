// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH5XKk9dnpAhzqye0rNbIxwp1aAxEiAXo",
  authDomain: "chat-e1d91.firebaseapp.com",
  projectId: "chat-e1d91",
  storageBucket: "chat-e1d91.firebasestorage.app",
  messagingSenderId: "711918666544",
  appId: "1:711918666544:web:2da3136f5a9c442e843ef5",
  measurementId: "G-KYX9999C4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);