import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0n5tTxB1oPnJghXJSu03kCsH36kCq3w0",
  authDomain: "aikon-e1ba6.firebaseapp.com",
  projectId: "aikon-e1ba6",
  storageBucket: "aikon-e1ba6.appspot.com",
  messagingSenderId: "283145900428",
  appId: "1:283145900428:web:662ea099761b4e244a06a9",
  measurementId: "G-50JY4810PF"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
