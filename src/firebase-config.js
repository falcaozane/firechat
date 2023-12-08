// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAk3iNSnLhBkG7GN7ubo6FHD8fFXoh1xw",
  authDomain: "firechat-a9fe3.firebaseapp.com",
  projectId: "firechat-a9fe3",
  storageBucket: "firechat-a9fe3.appspot.com",
  messagingSenderId: "801486564518",
  appId: "1:801486564518:web:43eea61a4a8281e8dd1867"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app)
export const Provider = new GoogleAuthProvider();
export const db = getFirestore(app)