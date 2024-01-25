// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyC42tZhhp15MgYrUjD9LmRVb_BBfYZG1xM",
  authDomain: "bankify-efac1.firebaseapp.com",
  projectId: "bankify-efac1",
  storageBucket: "bankify-efac1.appspot.com",
  messagingSenderId: "276855247260",
  appId: "1:276855247260:web:aaf28f21ca526a231f3859",
  measurementId: "G-T24WSTJYZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the Firebase Authentication object
export const auth = getAuth(app);