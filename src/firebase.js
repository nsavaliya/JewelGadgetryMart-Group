// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDtGS97FfsbzZAvJZMo3ywYFl4swR7VrXU",
  authDomain: "assignment3-9dd72.firebaseapp.com",
  databaseURL: "https://assignment3-9dd72-default-rtdb.firebaseio.com",
  projectId: "assignment3-9dd72",
  storageBucket: "assignment3-9dd72.appspot.com",
  messagingSenderId: "914295334862",
  appId: "1:914295334862:web:e17be00cee2215fdd96d9f",
  measurementId: "G-MHPH9JZDTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth();

export {app, auth};
