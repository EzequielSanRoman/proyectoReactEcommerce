import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4X9824K4IhgM33giXodkp0y0b9P6xKUo",
  authDomain: "e-comerce-dronstation.firebaseapp.com",
  projectId: "e-comerce-dronstation",
  storageBucket: "e-comerce-dronstation.appspot.com",
  messagingSenderId: "287461465162",
  appId: "1:287461465162:web:a96fc8a96aa5b989f9dab3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
