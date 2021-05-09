import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAX3kU52B7ipCLseE3kuGYMtEnEfTOppsQ",
    authDomain: "nirmitee-1a4e5.firebaseapp.com",
    projectId: "nirmitee-1a4e5",
    storageBucket: "nirmitee-1a4e5.appspot.com",
    messagingSenderId: "508739048032",
    appId: "1:508739048032:web:21f1cf13be8f5f860d2905",
    measurementId: "G-3X8X35VLMB"
  };
  // Initialize Firebase
 const fire = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  const firee = { fire , db }

 export default firee; 
//  export default fire;