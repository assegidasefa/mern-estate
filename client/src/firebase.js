// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f1b84.firebaseapp.com",
  projectId: "mern-estate-f1b84",
  storageBucket: "mern-estate-f1b84.appspot.com",
  messagingSenderId: "901626787450",
  appId: "1:901626787450:web:d81603274334be272aedc3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);