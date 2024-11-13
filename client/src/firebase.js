// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ksef-b43e6.firebaseapp.com",
  projectId: "ksef-b43e6",
  storageBucket: "ksef-b43e6.firebasestorage.app",
  messagingSenderId: "1038444203711",
  appId: "1:1038444203711:web:8c3478575a6fef9d8a800a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
