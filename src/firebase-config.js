// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZuiXBlasITPXZDmO1x2Uy7fDGhvB0fdM",
  authDomain: "quiz-app-9ff8e.firebaseapp.com",
  databaseURL: "https://quiz-app-9ff8e-default-rtdb.firebaseio.com",
  projectId: "quiz-app-9ff8e",
  storageBucket: "quiz-app-9ff8e.firebasestorage.app",
  messagingSenderId: "289476638555",
  appId: "1:289476638555:web:369f40c470ff83fccfcc7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;