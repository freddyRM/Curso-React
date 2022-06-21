import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBetMBcOFhW9DSnU1Xxj8Dt6SIQOPAFWS8",
  authDomain: "curso-react-39716.firebaseapp.com",
  projectId: "curso-react-39716",
  storageBucket: "curso-react-39716.appspot.com",
  messagingSenderId: "1079058550172",
  appId: "1:1079058550172:web:7f35e418917cbe42abcc59",
  measurementId: "G-ZLLX71J3LM"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const store = fire.firestore()

export {store}