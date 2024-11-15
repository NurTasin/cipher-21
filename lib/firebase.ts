// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzFY5-FmLWYSl78kSMyqau2YMYHtoC1ig",
  authDomain: "cse-21-pushnotification.firebaseapp.com",
  projectId: "cse-21-pushnotification",
  storageBucket: "cse-21-pushnotification.appspot.com",
  messagingSenderId: "253963153691",
  appId: "1:253963153691:web:14c686bd9687b369bb23be",
  measurementId: "G-58VM4ZCM37"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);