// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCbG8YugLhYpwC6a-pD5RVr5XIZgyq9pP4",

  authDomain: "summarist-6bcb8.firebaseapp.com",

  projectId: "summarist-6bcb8",

  storageBucket: "summarist-6bcb8.firebasestorage.app",

  messagingSenderId: "662995105769",

  appId: "1:662995105769:web:be8afee0be81bf52f6fd78"

};



// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export default db;