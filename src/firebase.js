import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAsUYKd5a3dRjMQP3DTImpUMyA8LrviU7k",
  authDomain: "chat-app-7d14f.firebaseapp.com",
  projectId: "chat-app-7d14f",
  storageBucket: "chat-app-7d14f.appspot.com",
  messagingSenderId: "690990396059",
  appId: "1:690990396059:web:ece301369a4fe9ed414c3e",
  measurementId: "G-GM6LYP2STW",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
