// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7qfnQ9unOhMWJV6SyaFuIrDiQQCbomg8",
  authDomain: "job-portal-257f9.firebaseapp.com",
  projectId: "job-portal-257f9",
  storageBucket: "job-portal-257f9.appspot.com",
  messagingSenderId: "893278618939",
  appId: "1:893278618939:web:ad7e498606f7c125bb631e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db};