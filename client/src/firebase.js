// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-d77a6.firebaseapp.com",
  projectId: "mern-blog-d77a6",
  storageBucket: "mern-blog-d77a6.appspot.com",
  messagingSenderId: "384970763939",
  appId: "1:384970763939:web:ad04867dddba91525f1916"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
