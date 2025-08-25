import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHiu8qJW9m6w_kkMs06vNl1RxB9kQ7kjs",
  authDomain: "k-store-38ef4.firebaseapp.com",
  projectId: "k-store-38ef4",
  storageBucket: "k-store-38ef4.firebasestorage.app",
  messagingSenderId: "454527863629",
  appId: "1:454527863629:web:33089715160c8ac6ac0504",
  measurementId: "G-Y3Y7XT2C8V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);