// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realstate-be4fc.firebaseapp.com",
  projectId: "realstate-be4fc",
  storageBucket: "realstate-be4fc.appspot.com",
  messagingSenderId: "300522591152",
  appId: "1:300522591152:web:d212d21e797abf241f7c75",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
