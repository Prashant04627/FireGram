import  firebase from 'firebase/compat/app';
import "firebase/compat/storage";
import "firebase/compat/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyAmIW3Gaoh-oNtwPjSJCnIGTfnLoYzIsTg",
    authDomain: "photogram-753a0.firebaseapp.com",
    projectId: "photogram-753a0",
    storageBucket: "photogram-753a0.appspot.com",
    messagingSenderId: "641465775561",
    appId: "1:641465775561:web:b78df2a0c476cc6f616418"
  };
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectFirestore, projectStorage ,timestamp }