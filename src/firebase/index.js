// import firebase from "firebase";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApdCBtkNR8UH6vyx5vB25gObkZWZ-a4ZA",
  authDomain: "vue-todorest.firebaseapp.com",
  databaseURL: "https://vue-todorest-default-rtdb.firebaseio.com",
  projectId: "vue-todorest",
  storageBucket: "vue-todorest.appspot.com",
  messagingSenderId: "892365930476",
  appId: "1:892365930476:web:e884c1dfe9ec217910cac9",
  measurementId: "G-5LL26LPKGH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getFirestore(app);
const auth = getAuth();
export const firebaseInstance = getAuth();
export { app, auth };
