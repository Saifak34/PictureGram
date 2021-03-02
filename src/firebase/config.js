import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDP3l9pfcaNgtZZgDom5tXqijJTvuswQKs",
  authDomain: "saif-firegram.firebaseapp.com",
  projectId: "saif-firegram",
  storageBucket: "saif-firegram.appspot.com",
  messagingSenderId: "309034990012",
  appId: "1:309034990012:web:249773e97610ffd1b993b9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
