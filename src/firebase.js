// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCepKSeT12WuSa7WM5-YWkUf6KlaaoNrdg",
  authDomain: "supertastyapp.firebaseapp.com",
  projectId: "supertastyapp",
  storageBucket: "supertastyapp.appspot.com",
  messagingSenderId: "689434717370",
  appId: "1:689434717370:web:14ad3bb88fef6b7437a683",
  measurementId: "G-E513Q9QDPB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};

