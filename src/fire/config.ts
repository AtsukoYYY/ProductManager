import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBDL3fg-vuc9o0xzs9rSHWxTeT6mRB4icQ",
  authDomain: "product-management-fb9f8.firebaseapp.com",
  projectId: "product-management-fb9f8",
  storageBucket: "product-management-fb9f8.appspot.com",
  messagingSenderId: "478470067236",
  appId: "1:478470067236:web:1328ad4d5d1af8ac0034b1"
};
export const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase);
