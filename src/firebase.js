// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxd3ENAaFuZ48ZGayhalMC0z4OB6S6TiI",
  authDomain: "fir-auth-e0b91.firebaseapp.com",
  projectId: "fir-auth-e0b91",
  storageBucket: "fir-auth-e0b91.appspot.com",
  messagingSenderId: "184743337544",
  appId: "1:184743337544:web:321b23ae050e438b6a027d",
  measurementId: "G-78KM5NQ7EL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();
export { app, auth, provider };
