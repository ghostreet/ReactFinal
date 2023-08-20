// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2r_Fdvk9zmhEciDnDdN6mFNF8YwltQcg",
  authDomain: "appteca-17188.firebaseapp.com",
  projectId: "appteca-17188",
  storageBucket: "appteca-17188.appspot.com",
  messagingSenderId: "514267504526",
  appId: "1:514267504526:web:112b389d1c2ffa27440edf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)