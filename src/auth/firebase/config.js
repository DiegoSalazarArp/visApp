// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7P9smfmxcX3OsUsuOqG9laZC33V7KLEA",
  authDomain: "react-vis.firebaseapp.com",
  projectId: "react-vis",
  storageBucket: "react-vis.appspot.com",
  messagingSenderId: "1064491812755",
  appId: "1:1064491812755:web:75de4b066b114a27a10a66",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
