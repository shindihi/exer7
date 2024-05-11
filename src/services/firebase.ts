// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Attention Please add your firebase console config here
const firebaseConfig = {
  apiKey: "AIzaSyAQKC_sO_sjc5300vK3F_XKa3KNyfYks_o",
  authDomain: "domere7.firebaseapp.com",
  projectId: "domere7",
  storageBucket: "domere7.appspot.com",
  messagingSenderId: "15109204026",
  appId: "1:15109204026:web:ab747009b79a97c9d96d03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
