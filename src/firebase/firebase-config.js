import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfM8-3dtU3Q_0a4ObIaELfbaouPl5b7GM",
  authDomain: "as-f2471.firebaseapp.com",
  projectId: "as-f2471",
  storageBucket: "as-f2471.appspot.com",
  messagingSenderId: "517146740989",
  appId: "1:517146740989:web:662c8ea3adb83288d05694"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore();

export {app,db};