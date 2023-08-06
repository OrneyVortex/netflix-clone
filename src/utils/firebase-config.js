// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwz9HEoJ2r0AkhImizNhN-glTTfaa7YFo",
  authDomain: "react-netflix-clone-7cf39.firebaseapp.com",
  projectId: "react-netflix-clone-7cf39",
  storageBucket: "react-netflix-clone-7cf39.appspot.com",
  messagingSenderId: "841289730441",
  appId: "1:841289730441:web:440cab944fccba44083958",
  measurementId: "G-LCRPNRX5Z5"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth= getAuth(app)