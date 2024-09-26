// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl0HYrKEwL6ZAu2R7aQ1B3djdOG6GFJQQ",
  authDomain: "netflixgpt-c7b7c.firebaseapp.com",
  projectId: "netflixgpt-c7b7c",
  storageBucket: "netflixgpt-c7b7c.appspot.com",
  messagingSenderId: "126380891330",
  appId: "1:126380891330:web:93349a69c9bbd8d158af5b",
  measurementId: "G-3JQTGCLJEL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
