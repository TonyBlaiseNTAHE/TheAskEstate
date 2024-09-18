// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "theaskproperties.firebaseapp.com",
  projectId: "theaskproperties",
  storageBucket: "theaskproperties.appspot.com",
  messagingSenderId: "215693072788",
  appId: "1:215693072788:web:022330660009ed51da9781",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
