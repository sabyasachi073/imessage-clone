import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBXRlXhVzeVUeNUMzKm9GFPfPgpw0qldSY",
  authDomain: "imessage-clone-2c0cb.firebaseapp.com",
  projectId: "imessage-clone-2c0cb",
  storageBucket: "imessage-clone-2c0cb.appspot.com",
  messagingSenderId: "1035061670404",
  appId: "1:1035061670404:web:d4834ea62ddfabad3fbb51",
  measurementId: "G-L14P5NGQED",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
