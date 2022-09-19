import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA35kEk-OCDHkfnVJgRscAPBOf96CKw7hU",
  authDomain: "dicord-webclone.firebaseapp.com",
  projectId: "dicord-webclone",
  storageBucket: "dicord-webclone.appspot.com",
  messagingSenderId: "653522164739",
  appId: "1:653522164739:web:a662f55932294939908236",
  measurementId: "G-CVCRFXJ1PL",
};

// Initialize firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Grab database & authentication
const db = firebaseApp.firestore();
const auth = firebase.auth();

// Connect google service for user login
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };