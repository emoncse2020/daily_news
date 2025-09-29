// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClW9UE7L9o321G1HqW2E1YR5AOBPTzE_I",
  authDomain: "daily-news-b9291.firebaseapp.com",
  projectId: "daily-news-b9291",
  storageBucket: "daily-news-b9291.firebasestorage.app",
  messagingSenderId: "719101849929",
  appId: "1:719101849929:web:0a613f9375cf3e1d26ea98",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
