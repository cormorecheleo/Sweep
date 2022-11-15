
import '@firebase/auth';
import '@firebase/firestore';
import firebase from "firebase/compat";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2uBtSJFxhYukOP60tXOWySid4iVmVVSo",
  authDomain: "sweep-549b0.firebaseapp.com",
  projectId: "sweep-549b0",
  storageBucket: "sweep-549b0.appspot.com",
  messagingSenderId: "940201777460",
  appId: "1:940201777460:web:0b72a1e870dc379fe06d61",
  measurementId: "G-3HCEPGGS79"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export {firebase}