// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbVVSUUqHYwLXiNTCSSIi9wkZoQYHg00E",
  authDomain: "wip-event-display.firebaseapp.com",
  projectId: "wip-event-display",
  storageBucket: "wip-event-display.appspot.com",
  messagingSenderId: "517884776118",
  appId: "1:517884776118:web:dfca2225a2c1b77e452017",
  measurementId: "G-6QZE6QP1PS",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
