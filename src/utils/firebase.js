// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9Pq2PK_JsH5irg5I_9AO70432rlYYabA",
  authDomain: "movie-gpt-cdd56.firebaseapp.com",
  projectId: "movie-gpt-cdd56",
  storageBucket: "movie-gpt-cdd56.appspot.com",
  messagingSenderId: "196971916583",
  appId: "1:196971916583:web:aa098871549893c944cd02",
  measurementId: "G-ZFWBJEF7HE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();