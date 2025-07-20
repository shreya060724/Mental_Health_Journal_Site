// src/firebase/config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Replace these with your own Firebase project credentials
const firebaseConfig = {
  apiKey: "AIzaSyBU_A1yfPF0jd9C4krSWkQVBV8gWP1gtGA",
  authDomain: "soulsync-30685.firebaseapp.com",
  projectId: "soulsync-30685",
  storageBucket: "soulsync-30685.firebasestorage.app",
  messagingSenderId: "946099555454",
  appId: "1:946099555454:web:8ec34bd9d98c41fe1f5c2f",
  measurementId: "G-F4DVY1469H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
