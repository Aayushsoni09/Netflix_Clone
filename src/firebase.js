
import firebase from "firebase";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAUyqENcFSmU59rwuZGQ6B2n6eZUtxOW74",
    authDomain: "netflix-clone-e4069.firebaseapp.com",
    projectId: "netflix-clone-e4069",
    storageBucket: "netflix-clone-e4069.appspot.com",
    messagingSenderId: "286720558500",
    appId: "1:286720558500:web:7fe8d22c67e6b7b8ef6d31",
    measurementId: "G-6TXKP4S8NK"
});
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LclslcmAAAAACi1QW-nU506aK_glIeFwrS9zS7v'),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true
});
const db =firebaseApp.firestore();
const auth=firebase.auth();
export{auth}
export default db;
