
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDFt1tJ5DabnWmpGBQNQ47sTT_19UyW78I",
  authDomain: "spint3-75d09.firebaseapp.com",
  projectId: "spint3-75d09",
  storageBucket: "spint3-75d09.appspot.com",
  messagingSenderId: "20706170289",
  appId: "1:20706170289:web:b605c1c641efa84f5d1990"
};


const app = initializeApp(firebaseConfig);

export {app};