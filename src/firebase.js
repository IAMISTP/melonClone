// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk40Lcf8pAreZDTQFEJEXk8jGHORf5AEw",
  authDomain: "melon-17054.firebaseapp.com",
  projectId: "melon-17054",
  storageBucket: "melon-17054.appspot.com",
  messagingSenderId: "408924140754",
  appId: "1:408924140754:web:609ad5ea68df3dbe12e90b",
  measurementId: "G-8ZSFBL3YXW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
