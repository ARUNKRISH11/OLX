import React from 'react'
import firebase from 'firebase'

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

 export default Firebase = firebase.initializeApp(firebaseConfig);