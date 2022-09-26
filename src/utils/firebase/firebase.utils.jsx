import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgrqasM_utJZi4veUU8Zdv-q4V9c_LgfA",
  authDomain: "crown-clothing-db-ca5c9.firebaseapp.com",
  projectId: "crown-clothing-db-ca5c9",
  storageBucket: "crown-clothing-db-ca5c9.appspot.com",
  messagingSenderId: "616335734019",
  appId: "1:616335734019:web:558df7eaeeafc5934e2536",
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
