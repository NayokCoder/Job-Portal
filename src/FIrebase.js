// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI5Ux-vIsHSY4yZZJoPehACvn-Ob69Fgc",
  authDomain: "job-portal-9431f.firebaseapp.com",
  projectId: "job-portal-9431f",
  storageBucket: "job-portal-9431f.firebasestorage.app",
  messagingSenderId: "913555321130",
  appId: "1:913555321130:web:6b3dfdca9e7f2080d82e53",
  measurementId: "G-WJTX1CS10X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
