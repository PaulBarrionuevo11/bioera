// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD53oyOKX0rQHVP5WXm6mQQT6yMxRY3Oto",
  authDomain: "bioera-test-v0.firebaseapp.com",
  projectId: "bioera-test-v0",
  storageBucket: "bioera-test-v0.firebasestorage.app",
  messagingSenderId: "109807797212",
  appId: "1:109807797212:web:64f9838578af64ecb24519",
  measurementId: "G-TEPZXTY17G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };