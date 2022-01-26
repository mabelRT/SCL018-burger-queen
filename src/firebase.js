// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNk3zygAPsXGnShGDkTzSHlEAhF5HWl7Y",
  authDomain: "burger-queen-4f83a.firebaseapp.com",
  projectId: "burger-queen-4f83a",
  storageBucket: "burger-queen-4f83a.appspot.com",
  messagingSenderId: "660453152387",
  appId: "1:660453152387:web:54e40c935556fab230edb6",
  measurementId: "G-CF4XBJF4TP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);