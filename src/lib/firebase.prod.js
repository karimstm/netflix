import Firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// Seed the database

// We need a config here
const config = {
  apiKey: "AIzaSyDev76nAeDIQo96HARaOLbML4FhhJfvJeg",
  authDomain: "netflix-clone-f9c86.firebaseapp.com",
  databaseURL: "https://netflix-clone-f9c86.firebaseio.com",
  projectId: "netflix-clone-f9c86",
  storageBucket: "netflix-clone-f9c86.appspot.com",
  messagingSenderId: "528178592692",
  appId: "1:528178592692:web:5f714cd70537a8c18090e1",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
