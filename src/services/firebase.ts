// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Attention Please add your firebase console config here
const firebaseConfig = {
  apiKey: "AIzaSyB4ab7HsnaeSZYNiE-JrhPongdTKHWx6iM",
  authDomain: "exer-7.firebaseapp.com",
  projectId: "exer-7",
  storageBucket: "exer-7.appspot.com",
  messagingSenderId: "432157227239",
  appId: "1:432157227239:web:d9a6325fa61910ca214a42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
