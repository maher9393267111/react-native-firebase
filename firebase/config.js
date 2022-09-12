
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA764C7WdnjFOiwfh9q9nqstrCqA08gvfU",
      authDomain: "social-c7db0.firebaseapp.com",
      projectId: "social-c7db0",
      storageBucket: "social-c7db0.appspot.com",
      messagingSenderId: "782857857583",
      appId: "1:782857857583:web:e080621d0ffb1776d6b4da",
      measurementId: "G-B2S28WESDV"
};

//initializeApp(firebaseConfig);

let firebaseApp;
try {
    firebaseApp = getApp();
    console.log(
        'firebaseApp',
    )
} catch (e) {
  firebaseApp = initializeApp(firebaseConfig);
  console.log('firebaseApp', firebaseApp);
}



export const auth = getAuth();

export const db = getFirestore();

