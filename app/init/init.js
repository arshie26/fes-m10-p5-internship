// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBchpRacU8cnFfnKC18GMtbgGEC5onsd-0",

  authDomain: "nextjs-test-4d931.firebaseapp.com",

  projectId: "nextjs-test-4d931",

  storageBucket: "nextjs-test-4d931.firebasestorage.app",

  messagingSenderId: "469162043509",

  appId: "1:469162043509:web:3299db4ae899f772f9703c"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export default db;