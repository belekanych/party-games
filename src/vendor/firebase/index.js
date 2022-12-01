// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAquRnq4ImPyK9GzgsaqN1TfEcyIyYnDgQ",
  authDomain: "belekanych-party-games.firebaseapp.com",
  projectId: "belekanych-party-games",
  storageBucket: "belekanych-party-games.appspot.com",
  messagingSenderId: "1028669189321",
  appId: "1:1028669189321:web:62aeaf616e5245808d3118",
  measurementId: "G-71W5E3SE6N",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebaseApp);
