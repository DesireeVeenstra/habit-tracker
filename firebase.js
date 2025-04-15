// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHZI6lG3-n3C-FE0MM2K5lyJrqZTyUtBI",
  authDomain: "habit-tracker-533c4.firebaseapp.com",
  projectId: "habit-tracker-533c4",
  storageBucket: "habit-tracker-533c4.firebasestorage.app",
  messagingSenderId: "985658821142",
  appId: "1:985658821142:web:45559fea944e776268c337",
  measurementId: "G-2N1MRE0PP5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);