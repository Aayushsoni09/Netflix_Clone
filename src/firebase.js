
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAUyqENcFSmU59rwuZGQ6B2n6eZUtxOW74",
    authDomain: "netflix-clone-e4069.firebaseapp.com",
    projectId: "netflix-clone-e4069",
    storageBucket: "netflix-clone-e4069.appspot.com",
    messagingSenderId: "286720558500",
    appId: "1:286720558500:web:7fe8d22c67e6b7b8ef6d31",
    measurementId: "G-6TXKP4S8NK"
});

const db =firebaseApp.firestore();
const auth=firebase.auth();
export{auth}
export default db;