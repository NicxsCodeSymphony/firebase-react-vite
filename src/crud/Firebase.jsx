import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAumUqgxv0hW98syTfdEEkdxRh-fDkAdfI",
  authDomain: "sample-react-cbe51.firebaseapp.com",
  databaseURL: "https://sample-react-cbe51-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sample-react-cbe51",
  storageBucket: "sample-react-cbe51.appspot.com",
  messagingSenderId: "672745753433",
  appId: "1:672745753433:web:a068147f9a3a4d22dc1a48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
