// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX0iQs5yA8nUOJBTlt_2gJnyBKK8t7odA",
  authDomain: "olx-react-c903a.firebaseapp.com",
  projectId: "olx-react-c903a",
  storageBucket: "olx-react-c903a.appspot.com",
  messagingSenderId: "260086290317",
  appId: "1:260086290317:web:6250af772945108c660fc4",
  measurementId: "G-BWDHKFNXKY"
};

// Use this to initialize the firebase App
const Firebase = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = Firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {Firebase, auth, db ,storage};
